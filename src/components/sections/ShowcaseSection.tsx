import Image from "next/image";

export function ShowcaseSection() {
  return (
    <section id="showcase" className="home-showcase section-anchor">
      <div className="home-showcase-shell">
        <div className="home-showcase-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
            alt="Pessoa usando app financeiro em smartphone sobre mesa de trabalho"
            className="home-showcase-image"
            width={1600}
            height={900}
          />
        </div>

        <p className="home-showcase-description">
          A PlugGo reune solucoes essenciais em uma experiencia simples, segura e funcional. Um hub blockchain
          para movimentar, receber e organizar operacoes com mais clareza, fluidez e confianca.
        </p>

        <div className="home-showcase-metrics">
          <article className="home-showcase-metric-card">
            <p className="home-showcase-metric-value">22k+</p>
            <p className="home-showcase-metric-label">Transactions/day</p>
          </article>

          <article className="home-showcase-metric-card">
            <p className="home-showcase-metric-value">8k+</p>
            <p className="home-showcase-metric-label">Active wallets</p>
          </article>

          <article className="home-showcase-metric-card">
            <p className="home-showcase-metric-value">14k+</p>
            <p className="home-showcase-metric-label">Smart contracts</p>
          </article>

          <article className="home-showcase-metric-card">
            <p className="home-showcase-metric-value">68k+</p>
            <p className="home-showcase-metric-label">Network events</p>
          </article>
        </div>
      </div>
    </section>
  );
}
