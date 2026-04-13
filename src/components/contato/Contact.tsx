import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="contact-banner__bg" aria-hidden="true" />

      <div className="contact-banner__container">
        <div className="contact-banner__content">
          <h2 className="contact-banner__title">Fale Com A Plug Go</h2>

          <p className="contact-banner__description">
            Descubra como a Plug Go pode simplificar sua rotina financeira com
            uma experiência mais prática, segura e conectada para pessoas e
            empresas.
          </p>

          <Link href="/contato" className="contact-banner__button">
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}