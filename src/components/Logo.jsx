const LOGO_SRC = '/logo.png';
const LOGO_ALT =
  'Echuca 3D — custom products, practical designs, and local solutions';

const sizes = {
  nav: { width: 180, height: 52 },
  hero: undefined,
  page: undefined,
  cta: undefined,
  footer: undefined,
};

export default function Logo({ variant = 'nav', className = '' }) {
  const dims = sizes[variant];

  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className={`logo logo--${variant}${className ? ` ${className}` : ''}`}
      width={dims?.width}
      height={dims?.height}
      decoding="async"
    />
  );
}
