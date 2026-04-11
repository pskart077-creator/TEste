export function ProcessSection() {
  return (
    <section id="processo" className="content-section section-anchor">
      <h2 className="section-title">Como Funciona</h2>
      <p className="section-subtitle">Framework de implementacao em 4 etapas para reduzir risco de entrega.</p>

      <div className="process-grid">
        <article className="process-card">
          <p className="process-index">01</p>
          <h3>Diagnostico e arquitetura</h3>
          <p>Mapeamos requisitos tecnicos, integracoes e restricoes de compliance.</p>
        </article>

        <article className="process-card">
          <p className="process-index">02</p>
          <h3>Prototipo e validacao</h3>
          <p>Criamos fluxo funcional para validar usabilidade e premissas de negocio.</p>
        </article>

        <article className="process-card">
          <p className="process-index">03</p>
          <h3>Implementacao escalavel</h3>
          <p>Subimos ambiente com observabilidade, automacao e trilha de auditoria.</p>
        </article>

        <article className="process-card">
          <p className="process-index">04</p>
          <h3>Go-live e evolucao continua</h3>
          <p>Acompanhamos indicadores para otimizar performance e conversao da landing.</p>
        </article>
      </div>
    </section>
  );
}
