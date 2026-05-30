import { Link } from 'react-router-dom';

/**
 * Reusable product card for grids on Home and Products pages.
 *
 * Future store: replace Enquire with Add to cart when price + checkout exist.
 */
export default function ProductCard({ product, compact = false }) {
  const enquireHref = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <article className={`product-card${compact ? ' product-card--compact' : ''}`}>
      <div className="product-card__image" aria-hidden="true">
        {product.image ? (
          <img src={product.image} alt="" loading="lazy" />
        ) : (
          <span className="product-card__placeholder">
            {/* Replace with <img src={product.image} alt={product.name} /> when assets are ready */}
            Image coming soon
          </span>
        )}
      </div>
      <div className="product-card__body">
        {product.category && (
          <span className="product-card__category">{product.category}</span>
        )}
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        {/* Future: product.price && <p className="product-card__price">${product.price}</p> */}
        <Link to={enquireHref} className="btn btn--secondary product-card__cta">
          Enquire
        </Link>
      </div>
    </article>
  );
}
