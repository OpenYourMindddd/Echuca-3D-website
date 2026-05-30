import Logo from './Logo';

const BUSINESS_EMAIL = 'echuca3d@gmail.com';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__logo-wrap">
          <Logo variant="footer" />
        </div>
        <a className="footer__email" href={`mailto:${BUSINESS_EMAIL}`}>
          {BUSINESS_EMAIL}
        </a>
        <p className="footer__copy">&copy; {year} Echuca | 3D. All rights reserved.</p>
      </div>
    </footer>
  );
}
