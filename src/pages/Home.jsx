import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <>
      <section className="hero hero--brand">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="container hero__inner">
          <h1 className="visually-hidden">echuca.3d</h1>
          <Logo variant="hero" className="hero__logo" />
          <p className="hero__tagline">
            Custom products · Practical designs · Local solutions
          </p>
          <p className="hero__lead">
            Locally made in Echuca — useful custom parts, accessories, and
            practical solutions for everyday life.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary">
              Products
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="section pillars">
        <div className="container pillars__grid">
          <article className="pillar">
            <span className="pillar__index">01</span>
            <h2 className="pillar__title">Local</h2>
            <p>Based in Echuca with small-batch, hands-on production.</p>
          </article>
          <article className="pillar">
            <span className="pillar__index">02</span>
            <h2 className="pillar__title">Practical</h2>
            <p>Custom parts and accessories built for real-world use.</p>
          </article>
          <article className="pillar">
            <span className="pillar__index">03</span>
            <h2 className="pillar__title">Custom</h2>
            <p>
              Workshops, vehicles, homes, hobbies, and outdoor gear — tailored to
              you.
            </p>
          </article>
        </div>
      </section>

      <section className="section coming-soon-teaser">
        <div className="container coming-soon-teaser__card">
          <p className="label">Online catalogue</p>
          <h2 className="coming-soon-teaser__title">Coming soon to the website</h2>
          <p className="coming-soon-teaser__text">
            Our product listings are on the way. Need something now? Get in touch
            for custom requests and early enquiries.
          </p>
          <Link to="/products" className="btn btn--secondary">
            View products page
          </Link>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner">
          <Logo variant="cta" onDark className="cta-band__logo" />
          <h2 className="cta-band__title">Have something in mind?</h2>
          <p className="cta-band__text">
            Custom sizes, one-offs, and small batches welcome.
          </p>
          <Link to="/contact" className="btn btn--primary btn--invert">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
