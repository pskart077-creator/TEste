import {
  Blocks,
  Wallet,
  FileCode2,
  ShieldCheck,
  Activity,
  BadgeCheck,
} from "lucide-react";
import ServiceCard from "@/components/service-card/ServiceCard";

const solutionsData = [
  {
    title: "Infraestrutura Blockchain",
    description:
      "Construa, escale e gerencie operações blockchain com segurança, desempenho e alta confiabilidade para produtos digitais modernos.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Blocks,
  },
  {
    title: "Pagamentos Digitais",
    description:
      "Ofereça fluxos de pagamento mais rápidos, modernos e rastreáveis com uma estrutura preparada para operações digitais escaláveis.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Wallet,
  },
  {
    title: "Contratos Inteligentes",
    description:
      "Implemente automações seguras com smart contracts para reduzir etapas operacionais e aumentar a eficiência da sua plataforma.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: FileCode2,
  },
  {
    title: "Segurança De Ativos",
    description:
      "Proteja transações, contas e ativos digitais com camadas avançadas de segurança, monitoramento e prevenção de riscos.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: ShieldCheck,
  },
  {
    title: "Monitoramento Em Tempo Real",
    description:
      "Acompanhe operações em tempo real com mais visibilidade, controle estratégico e respostas rápidas para ambientes críticos.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: Activity,
  },
  {
    title: "Compliance E Governança",
    description:
      "Fortaleça sua operação com processos de compliance, rastreabilidade e governança para crescer com mais confiança.",
    href: "#",
    linkLabel: "Saiba Mais",
    icon: BadgeCheck,
  },
];

export default function Solutions() {
  return (
    <section className="solutions-grid-section">
      <div className="solutions-grid-container">
        <div className="solutions-grid">
          {solutionsData.map((item, index) => (
            <ServiceCard
              key={`${item.title}-${index}`}
              number={String(index + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
              href={item.href}
              linkLabel={item.linkLabel}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}