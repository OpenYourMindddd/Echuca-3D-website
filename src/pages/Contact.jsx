import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
const BUSINESS_EMAIL = 'echuca3d@gmail.com';

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="container contact-page__grid">
        <header className="contact-page__intro">
          <span className="logo-wrap logo-wrap--center">
            <Logo variant="page" className="contact-page__logo" />
          </span>
          <p className="label">Get in touch</p>
          <h1 className="page-title">Contact</h1>
          <p className="page-lead">
            Questions, custom requests, or early product enquiries — we would love
            to hear from you.
          </p>
          <div className="contact-page__details">
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
            </p>
            <p>
              <strong>Location</strong>
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
