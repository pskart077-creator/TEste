export function SolutionsSection() {
  return (
    <section id="solucoes" className="solutions-section section-anchor">
      <div className="solutions-layout">
        <div className="solutions-visual">
          <img
            src="/assets/img/solutions/global.svg"
            alt="Hub financeiro conectado globalmente"
          />
        </div>

        <div className="solutions-content">
          <p className="solutions-eyebrow">HUB FINANCEIRO PLUG GO</p>

          <h2 className="solutions-title">
            Uma experiência financeira
            mais conectada para pessoas e
            empresas.
          </h2>

          <p className="solutions-description">
            A Plug Go reúne soluções essenciais em uma plataforma mais simples,
            segura e funcional. Com uma proposta pensada para o dia a dia, a
            experiência se torna mais fluida para movimentar, receber e
            organizar a rotina financeira com mais clareza e praticidade.
          </p>

          <div className="solutions-proof">
            <div className="solutions-proof-avatars" aria-hidden="true">
              <span className="solutions-proof-avatar" />
              <span className="solutions-proof-avatar" />
              <span className="solutions-proof-avatar" />
              <span className="solutions-proof-avatar" />
              <span className="solutions-proof-avatar" />
              <span className="solutions-proof-badge">50M</span>
            </div>

            <p className="solutions-proof-text">
              Uma plataforma pensada para quem busca mais praticidade,
              segurança e controle financeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}