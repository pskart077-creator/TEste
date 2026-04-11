export function HeroSection() {
  return (
    <section id="home" className="pluggo-hero section-anchor">
      <div className="pluggo-hero__bg" aria-hidden="true">
        <div className="pluggo-hero__wave pluggo-hero__wave--left" />
        <div className="pluggo-hero__wave pluggo-hero__wave--right" />
        <div className="pluggo-hero__overlay" />
      </div>

      <div className="pluggo-hero__container">
        <div className="pluggo-hero__content">
          <h1 className="pluggo-hero__title">
            Seu Hub Financeiro Completo
            <br />
            Para Movimentar, Receber E
            <br />
            Organizar Sua Rotina.
          </h1>

          <p className="pluggo-hero__description">
            A PlugGo conecta soluções essenciais para pessoas e empresas em uma experiência
            mais simples, segura e inteligente. Centralize sua rotina financeira com mais
            praticidade, clareza e controle no dia a dia.
          </p>

          <div className="pluggo-hero__actions">
            <a href="#contato" className="pluggo-hero__button">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}