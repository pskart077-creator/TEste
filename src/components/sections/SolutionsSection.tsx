export function SolutionsSection() {
  return (
    <section id="solucoes" className="content-section section-anchor">
      <h2 className="section-title">Solucoes da Landing</h2>
      <p className="section-subtitle">Modelo completo para apresentar valor, provar confianca e converter leads.</p>

      <div className="solutions-grid">
        <article className="solution-card">
          <p className="solution-tag">Infra</p>
          <h3>Node &amp; Network Layer</h3>
          <p>Estrutura para monitorar redes, eventos e saude de contratos em tempo real.</p>
        </article>

        <article className="solution-card">
          <p className="solution-tag">Produto</p>
          <h3>Smart Contract Studio</h3>
          <p>Publicacao, versionamento e testes de contratos com padrao de seguranca.</p>
        </article>

        <article className="solution-card">
          <p className="solution-tag">Operacao</p>
          <h3>Painel de Governanca</h3>
          <p>Controle de acessos, aprovacoes e logs para operacoes distribuidas.</p>
        </article>

        <article className="solution-card">
          <p className="solution-tag">Financeiro</p>
          <h3>Wallet &amp; Settlement</h3>
          <p>Recebimento, conciliacao e repasse automatizado com rastreio ponta a ponta.</p>
        </article>

        <article className="solution-card">
          <p className="solution-tag">Seguranca</p>
          <h3>Risk Engine</h3>
          <p>Deteccao de anomalias e politicas dinamicas para reduzir risco operacional.</p>
        </article>

        <article className="solution-card">
          <p className="solution-tag">Dados</p>
          <h3>Analytics On-chain</h3>
          <p>Dashboards de uso, liquidez e comportamento para decisao orientada por dados.</p>
        </article>
      </div>
    </section>
  );
}
