export function AboutSection() {
  return (
    <section id="sobre" className="content-section section-anchor">
      <h2 className="section-title">Sobre a Plataforma</h2>
      <p className="section-subtitle">Tecnologia blockchain aplicada com foco em resultado de negocio.</p>

      <div className="about-layout">
        <p className="about-description">
          Nosso modelo combina performance, rastreabilidade e usabilidade para que equipes tecnicas e de negocio
          avancem juntas. Voce ganha previsibilidade para escalar produtos sem aumentar complexidade operacional.
        </p>

        <ul className="about-list">
          <li>Arquitetura modular para lancar novas features com velocidade.</li>
          <li>Trilha completa de auditoria para compliance e governanca.</li>
          <li>Integracoes com APIs legadas sem reescrever todo o ecossistema.</li>
          <li>Experiencia pensada para usuario final, nao apenas para devs.</li>
        </ul>
      </div>
    </section>
  );
}
