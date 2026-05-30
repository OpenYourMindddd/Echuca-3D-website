import { Link } from 'react-router-dom';
import Logo from './Logo';

/**
 * Catalogue placeholder — swap for ProductCard grid when products launch.
 */
export default function ComingSoon({ compact = false }) {
  return (
    <div className={`coming-soon${compact ? ' coming-soon--compact' : ''}`}>
      {!compact && <Logo variant="page" link className="coming-soon__logo" />}
      <p className="coming-soon__badge">Coming soon to the website</p>
      <h1 className="coming-soon__title">
        {compact ? 'Product catalogue on the way' : 'Products'}
      </h1>
      <p className="coming-soon__text">
        {compact
          ? 'We are getting our range ready to list online. In the meantime, reach out for custom work or early enquiries.'
          : 'Our full product range is being prepared for the site. Custom parts, practical accessories, and everyday solutions — check back soon or contact us today.'}
      </p>
      <div className="coming-soon__actions">
        <Link to="/contact" className="btn btn--primary">
          Contact us
        </Link>
        {!compact && (
          <Link to="/" className="btn btn--outline">
            Back to home
          </Link>
        )}
      </div>
    </div>
  );
}
