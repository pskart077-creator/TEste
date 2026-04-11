import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo" aria-label="PlugGo Início">
            <span>Plug</span>Go
          </a>

          <p className="footer-description">
            A Plug Go conecta solucoes financeiras para pessoas e empresas em
            uma experiencia mais simples, segura e funcional.
          </p>

          <div className="footer-socials" aria-label="Redes sociais">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="YouTube">yt</a>
          </div>
        </div>

        <nav className="footer-column" aria-label="Solucoes">
          <h4>Solucoes</h4>
          <a href="#solucoes">Conta digital</a>
          <a href="#solucoes">Cobrancas</a>
          <a href="#solucoes">Seguros</a>
          <a href="#solucoes">Cripto</a>
        </nav>

        <nav className="footer-column" aria-label="Empresa">
          <h4>Empresa</h4>
          <a href="#sobre">Sobre</a>
          <a href="#sobre">Para Voce</a>
          <a href="#sobre">Para Empresas</a>
          <a href="#contato">Contato</a>
        </nav>

        <nav className="footer-column" aria-label="Suporte">
          <h4>Suporte</h4>
          <a href="#faq">Central de ajuda</a>
          <a href="#faq">Seguranca</a>
          <a href="#faq">Politica de privacidade</a>
          <a href="#faq">Termos de uso</a>
        </nav>

        <div className="footer-contact">
          <h4>Atendimento em dias uteis das 8h as 20h (Horario de Brasilia)</h4>

          <div className="footer-contact-item">
            <Phone size={18} strokeWidth={2} />
            <p>(11) 91533-3965</p>
          </div>

          <div className="footer-contact-item">
            <Mail size={18} strokeWidth={2} />
            <a href="mailto:contato@pluggocapital.com">contato@pluggocapital.com</a>
          </div>

          <div className="footer-contact-item footer-contact-item-address">
            <MapPin size={18} strokeWidth={2} />
            <div>
              <p>Av. Alameda Mamore, 503 - Alphaville</p>
              <p>Barueri - SP, CEP 06454-040</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          A PLUGGO CAPITAL - SYFRA PAYMENTS SOLUCOES EM PAGAMENTOS LTDA, inscrita
          no CNPJ n. 22.605.209/0001-11, atua na intermediacao de servicos
          financeiros, nos termos da regulamentacao do Banco Central do Brasil.
          Todos os produtos e servicos financeiros sao fornecidos por instituicoes
          financeiras parceiras autorizadas pelo Banco Central.
        </p>
      </div>

      <div className="site-footer-content">
        <p>&copy; Plug Go - Todos os direitos reservados</p>

        <div className="site-footer-links">
          <a href="#faq">Terms Of Services</a>
          <a href="#faq">Privacy Policy</a>
          <a href="#faq">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
