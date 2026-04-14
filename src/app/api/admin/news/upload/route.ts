import { NewsAuditAction, UserRole } from "@prisma/client";
import type { NextRequest } from "next/server";
import { ApiError, fromUnknownError, ok } from "@/lib/news/api";
import { writeAuditLog } from "@/lib/news/audit";
import { requireApiAdmin } from "@/lib/news/auth";
import { RATE_LIMIT_WINDOWS } from "@/lib/news/constants";
import { asRateLimitResponse, getRequestIp, getUserAgent, requireRateLimit } from "@/lib/news/http";
import { storeNewsImageUpload } from "@/lib/news/uploads";

export async function POST(request: NextRequest) {
  const ipAddress = getRequestIp(request);
  const userAgent = getUserAgent(request);

  try {
    requireRateLimit(`admin-upload:${ipAddress}`, RATE_LIMIT_WINDOWS.upload);

    const session = await requireApiAdmin(request, {
      allowedRoles: [UserRole.SUPER_ADMIN, UserRole.EDITOR, UserRole.AUTHOR],
      requireCsrf: true,
    });

    const formData = await request.formData();
    const upload = formData.get("file");
    const postId = formData.get("postId");

    if (!(upload instanceof File)) {
      throw new ApiError(400, "UPLOAD_REQUIRED", "Arquivo nao informado.");
    }

    const asset = await storeNewsImageUpload(
      upload,
      session.id,
      typeof postId === "string" ? postId : undefined,
    );

    await writeAuditLog({
      action: NewsAuditAction.UPLOAD,
      actorId: session.id,
      entityType: "news_asset",
      entityId: asset.id,
      description: "Upload de imagem realizado no painel de noticias.",
      metadata: {
        mimeType: asset.mimeType,
        sizeBytes: asset.sizeBytes,
        extension: asset.extension,
      },
      ipAddress,
      userAgent,
    });

    return ok({ asset }, { status: 201 });
  } catch (error) {
    return asRateLimitResponse(error) ?? fromUnknownError(error);
  }
}
