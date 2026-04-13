import Link from "next/link";
import { Check } from "lucide-react";

const pfItems = [
  "Abertura de conta e acesso simplificado",
  "Mais praticidade para pagamentos e rotina digital",
  "Segurança em cada interação e operação",
];

const pjItems = [
  "Soluções para otimizar processos da empresa",
  "Mais eficiência operacional e controle",
  "Tecnologia com segurança para crescer com confiança",
];

export default function SegmentsSection() {
  return (
    <section className="segments-section">
      <div className="segments-container">
        <div className="segments-grid">
          <div className="segments-visual">
            <img
              src="/assets/img/segments/pf.jpg"
              alt="Plug Go para você"
              className="segments-image"
            />
          </div>

          <div className="segments-content">
            <h2 className="segments-title">Para Você</h2>

            <p className="segments-description">
              A Plug Go oferece soluções digitais para tornar sua rotina mais
              simples, prática e segura, com experiências mais rápidas e
              conectadas no dia a dia.
            </p>

            <ul className="segments-list">
              {pfItems.map((item) => (
                <li key={item} className="segments-list-item">
                  <span className="segments-list-icon">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/pf" className="segments-button">
              Ver Mais
            </Link>
          </div>

          <div className="segments-content">
            <h2 className="segments-title">Para Sua Empresa</h2>

            <p className="segments-description">
              A Plug Go entrega tecnologia para empresas que buscam mais
              eficiência, segurança e performance, modernizando operações e
              fortalecendo processos.
            </p>

            <ul className="segments-list">
              {pjItems.map((item) => (
                <li key={item} className="segments-list-item">
                  <span className="segments-list-icon">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/pj" className="segments-button">
              Ver Mais
            </Link>
          </div>

          <div className="segments-visual">
            <img
              src="/assets/img/segments/pj.jpg"
              alt="Plug Go para sua empresa"
              className="segments-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}