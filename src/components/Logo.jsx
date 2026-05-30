import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoVideo from '../assets/trimmed.mp4';
import logoLight from '../assets/logo.png';
import logoDark from '../assets/button-mark.png';

const LOGO_ALT = 'echuca.3d — custom products and practical designs, locally made';

/** 1 = normal speed. Lower = slower loop (0.75 ≈ 25% slower). */
const LOGO_PLAYBACK_RATE = 0.6;

/** Static fallback when video cannot load or play. */
const variantTone = {
  nav: 'dark',
  hero: 'light',
  page: 'dark',
  footer: 'light',
  cta: 'light',
};

export default function Logo({
  variant = 'nav',
  tone,
  className = '',
  link = false,
}) {
  const [useFallback, setUseFallback] = useState(false);
  const videoRef = useRef(null);
  const resolvedTone = tone ?? variantTone[variant] ?? 'light';
  const fallbackSrc = resolvedTone === 'dark' ? logoDark : logoLight;

  useEffect(() => {
    const video = videoRef.current;
    if (useFallback || !video) return;

    video.playbackRate = LOGO_PLAYBACK_RATE;
    video.play().catch(() => {
      /* Autoplay blocked — poster remains visible; keep video for manual contexts */
    });
  }, [useFallback]);

  const handleVideoReady = (event) => {
    event.currentTarget.playbackRate = LOGO_PLAYBACK_RATE;
  };

  const mediaClassName = `logo logo--${variant} logo--${resolvedTone}${
    useFallback ? ' logo--fallback' : ' logo--video'
  }${className ? ` ${className}` : ''}`;

  const media = useFallback ? (
    <img
      src={fallbackSrc}
      alt={LOGO_ALT}
      className={mediaClassName}
      decoding="async"
      loading="eager"
    />
  ) : (
    <video
      ref={videoRef}
      className={mediaClassName}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={fallbackSrc}
      aria-label={LOGO_ALT}
      onLoadedMetadata={handleVideoReady}
      onError={() => setUseFallback(true)}
    >
      <source src={logoVideo} type="video/mp4" />
    </video>
  );

  if (link) {
    return (
      <Link to="/" className="logo-link" aria-label="echuca.3d home">
        {media}
      </Link>
    );
  }

  return media;
}
