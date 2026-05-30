import Logo from './Logo';

const BUSINESS_EMAIL = 'echuca3d@gmail.com';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <Logo variant="footer" link className="footer__logo" />
        <a className="footer__email" href={`mailto:${BUSINESS_EMAIL}`}>
          {BUSINESS_EMAIL}
        </a>
        <p className="footer__copy">&copy; {year} echuca.3d. All rights reserved.</p>
      </div>
    </footer>
  );
}
