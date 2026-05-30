import logoLight from '../assets/logo.png';
import logoDark from '../assets/button-mark.png';

const LOGO_ALT = 'echuca.3d — custom products and practical designs, locally made';

const sizes = {
  nav: { width: 120, height: 36 },
  hero: undefined,
  page: undefined,
  cta: undefined,
  footer: undefined,
};

/** Default logo tone per placement — override with `tone` prop if needed. */
const variantTone = {
  nav: 'dark',
  hero: 'light',
  page: 'dark',
  footer: 'light',
  cta: 'light',
};

export default function Logo({ variant = 'nav', tone, className = '' }) {
  const dims = sizes[variant];
  const resolvedTone = tone ?? variantTone[variant] ?? 'light';
  const src = resolvedTone === 'dark' ? logoDark : logoLight;

  return (
    <img
      src={src}
      alt={LOGO_ALT}
      className={`logo logo--${variant} logo--${resolvedTone}${
        className ? ` ${className}` : ''
      }`}
      width={dims?.width}
      height={dims?.height}
      decoding="async"
    />
  );
}
