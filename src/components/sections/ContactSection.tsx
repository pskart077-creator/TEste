export function ContactSection() {
  return (
    <section id="contato" className="contact-section section-anchor">
      <div className="contact-wrap">
        <div className="contact-content">
          <h2 className="contact-title">Fale Com A Plug Go</h2>
          <p className="contact-description">
            Descubra como a Plug Go pode simplificar sua rotina financeira com
            uma experiência mais prática, segura e conectada para pessoas e
            empresas.
          </p>
        </div>

        <div className="contact-form-card">
          <h3 className="contact-form-title">Vamos Conversar?</h3>

          <form className="contact-form">
            <div className="contact-form-row">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
            </div>

            <div className="contact-form-group">
              <select defaultValue="">
                <option value="" disabled>
                  Selecione uma solução
                </option>
                <option>Conta digital</option>
                <option>Cobranças integradas</option>
                <option>Segurança financeira</option>
                <option>Soluções para empresas</option>
              </select>
            </div>

            <div className="contact-form-group">
              <textarea placeholder="Sua mensagem" />
            </div>

            <button type="submit" className="contact-submit">
              Fale Com A Plug Go
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}