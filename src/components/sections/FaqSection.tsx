export function FaqSection() {
  return (
    <section id="faq" className="content-section section-anchor">
      <h2 className="section-title">Perguntas Frequentes</h2>
      <p className="section-subtitle">Respostas objetivas para acelerar sua decisao com seguranca.</p>

      <div className="faq-list">
        <details className="faq-item">
          <summary>A landing e apenas visual ou inclui arquitetura tecnica?</summary>
          <p>Inclui estrutura completa de componentes, SEO base e fluxo de conversao pronto para evolucao.</p>
        </details>

        <details className="faq-item">
          <summary>Posso integrar com CRM e automacoes existentes?</summary>
          <p>
            Sim. A base foi desenhada para conectar formularios, eventos e APIs de ferramentas como HubSpot,
            RD e solucoes proprietarias.
          </p>
        </details>

        <details className="faq-item">
          <summary>A landing serve para campanhas de performance?</summary>
          <p>
            Sim. O modelo prioriza mensagem clara, prova social e CTA em etapas de alta intencao, ideal para
            midia paga.
          </p>
        </details>

        <details className="faq-item">
          <summary>Como evoluir a pagina depois do go-live?</summary>
          <p>Novas secoes e ajustes de copy podem ser feitos sem retrabalho estrutural.</p>
        </details>
      </div>
    </section>
  );
}
