import logoSrc from '../assets/logo.png';

const LOGO_ALT = 'echuca.3d — custom products and practical designs, locally made';

const sizes = {
  nav: { width: 120, height: 36 },
  hero: undefined,
  page: undefined,
  cta: undefined,
  footer: undefined,
};

export default function Logo({ variant = 'nav', className = '' }) {
  const dims = sizes[variant];

  return (
    <img
      src={logoSrc}
      alt={LOGO_ALT}
      className={`logo logo--${variant}${className ? ` ${className}` : ''}`}
      width={dims?.width}
      height={dims?.height}
      decoding="async"
    />
  );
}
