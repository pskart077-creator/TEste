import { Clock3, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-request-section">
      <div className="contact-request-container">
        <div className="contact-request-grid">
          <aside className="contact-request-info">
            <h2 className="contact-request-info__title">Entre em Contato</h2>
            <p className="contact-request-info__description">
              Retornaremos em até 24 horas, ou fale com nosso time pelos canais abaixo.
            </p>

            <div className="contact-request-socials">
              <a href="#" aria-label="Facebook" className="contact-request-socials__item">
                <FaFacebookF size={16} />
              </a>

              <a href="#" aria-label="LinkedIn" className="contact-request-socials__item">
                <FaLinkedinIn size={16} />
              </a>

              <a href="#" aria-label="Twitter" className="contact-request-socials__item">
                <FaTwitter size={16} />
              </a>

              <a href="#" aria-label="YouTube" className="contact-request-socials__item">
                <FaYoutube size={16} />
              </a>
            </div>

            <div className="contact-request-list">
              <div className="contact-request-item">
                <span className="contact-request-item__icon">
                  <Clock3 size={18} />
                </span>
                <div className="contact-request-item__content">
                  <strong>Horário de atendimento</strong>
                  <p>08h às 18h, segunda a domingo</p>
                </div>
              </div>

              <div className="contact-request-item">
                <span className="contact-request-item__icon">
                  <Phone size={18} />
                </span>
                <div className="contact-request-item__content">
                  <strong>Telefone</strong>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className="contact-request-item">
                <span className="contact-request-item__icon">
                  <Mail size={18} />
                </span>
                <div className="contact-request-item__content">
                  <strong>E-mail</strong>
                  <p>contato@pluggo.com.br</p>
                </div>
              </div>

              <div className="contact-request-item">
                <span className="contact-request-item__icon">
                  <MapPin size={18} />
                </span>
                <div className="contact-request-item__content">
                  <strong>Endereço</strong>
                  <p>Av. Exemplo, 1234, São Paulo, SP</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="contact-request-form-wrap">
            <div className="contact-request-form-head">
              <h2 className="contact-request-form__title">Solicite um Orçamento</h2>
              <p className="contact-request-form__description">
                Preencha o formulário e nosso time entrará em contato para entender o seu momento.
              </p>
            </div>

            <form className="contact-request-form">
              <div className="contact-request-form__row contact-request-form__row--two">
                <input type="text" placeholder="Seu nome" />
                <input type="text" placeholder="Assunto" />
              </div>

              <div className="contact-request-form__row">
                <input type="email" placeholder="Seu e-mail" />
              </div>

              <div className="contact-request-form__row">
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione uma solução
                  </option>
                  <option value="para-voce">Para você</option>
                  <option value="para-empresas">Para empresas</option>
                  <option value="seguranca">Segurança</option>
                  <option value="consultoria">Consultoria</option>
                </select>
              </div>

              <div className="contact-request-form__row">
                <textarea placeholder="Escreva sua mensagem..." />
              </div>

              <div className="contact-request-form__actions">
                <button type="submit" className="contact-request-form__button">
                  Enviar solicitação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}