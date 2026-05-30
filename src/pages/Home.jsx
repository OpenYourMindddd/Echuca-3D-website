import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content container">
          <p className="hero__eyebrow">Locally made in Echuca</p>
          <h1 className="hero__title">
            Echuca <span className="hero__title-divider">|</span> 3D
          </h1>
          <p className="hero__subtitle">
            Custom products, practical designs, and locally made solutions
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary">
              View Products
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true" />
      </section>

      <section className="section about">
        <div className="container about__grid">
          <div className="about__intro">
            <h2 className="section__title">Built for real use</h2>
            <p className="section__lead">
              We design and make useful things — custom parts, accessories, and
              practical solutions you can actually rely on.
            </p>
          </div>
          <ul className="about__list">
            <li>
              <strong>Locally based in Echuca</strong>
              <span>Small-batch, hands-on production with a personal touch.</span>
            </li>
            <li>
              <strong>Useful products & custom parts</strong>
              <span>
                Custom parts, accessories, and practical solutions tailored to
                what you need.
              </span>
            </li>
            <li>
              <strong>Made for everyday life</strong>
              <span>
                Hobbies, workshops, vehicles, homes, and outdoor gear — designed
                to fit how you work and play.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Featured products</h2>
            <p className="section__lead">
              A few examples of what we make. More coming as the range grows.
            </p>
            <Link to="/products" className="section__link">
              View all products →
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner">
          <h2 className="cta-band__title">Have something in mind?</h2>
          <p className="cta-band__text">
            Tell us what you need — custom sizes, one-offs, or small batches welcome.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
