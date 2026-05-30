import ContactForm from '../components/ContactForm';

const BUSINESS_EMAIL = 'echuca3d@gmail.com';

export default function Contact() {
  return (
    <section className="section page-header contact-page">
      <div className="container contact-page__grid">
        <header className="contact-page__intro">
          <h1 className="page-header__title">Contact</h1>
          <p className="page-header__lead">
            Questions, custom requests, or product enquiries — we would love to
            hear from you.
          </p>
          <div className="contact-page__details">
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
            </p>
            <p>
              <strong>Based in</strong>
              <br />
              Echuca, Victoria
            </p>
          </div>
        </header>

        <div className="contact-page__form-wrap">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
