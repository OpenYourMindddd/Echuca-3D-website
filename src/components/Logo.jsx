const LOGO_SRC = '/logo.png';
const LOGO_ALT =
  'Echuca 3D — custom products, practical designs, and local solutions';

export default function Logo({ variant = 'nav', className = '' }) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className={`logo logo--${variant}${className ? ` ${className}` : ''}`}
      width={variant === 'nav' ? 160 : undefined}
      height={variant === 'nav' ? 48 : undefined}
      decoding="async"
    />
  );
}
