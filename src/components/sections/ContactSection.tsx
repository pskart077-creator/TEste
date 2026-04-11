export function ContactSection() {
  return (
    <section id="contato" className="cta-panel section-anchor">
      <h2>Pronto para lancar sua landing completa?</h2>
      <p>
        Fale com a PlugGo e receba um plano pratico para sair da ideia para execucao com clareza e velocidade.
      </p>

      <div className="contact-channels">
        <article className="contact-chip">
          <p className="contact-chip-label">Email</p>
          <p className="contact-chip-value">contato@pluggo.com</p>
        </article>

        <article className="contact-chip">
          <p className="contact-chip-label">WhatsApp</p>
          <p className="contact-chip-value">+55 (11) 99999-9999</p>
        </article>

        <article className="contact-chip">
          <p className="contact-chip-label">Atendimento</p>
          <p className="contact-chip-value">Seg a Sex, 09h as 18h</p>
        </article>
      </div>

      <div className="cta-actions">
        <a href="mailto:contato@pluggo.com" className="button-primary">
          Enviar briefing
        </a>

        <a href="#home" className="button-secondary">
          Voltar ao topo
        </a>
      </div>
    </section>
  );
}
