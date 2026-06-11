import "../style/avatarring.css";
import Image from "./ui/Image";
/* ─── Config par défaut ────────────────────────────────────── */
const DEFAULT_BADGES = [
  { label: 'React',  sublabel: '⚛',  color: '#61DAFB', bg: 'rgba(97,218,251,0.10)'  },
  { label: 'Python', sublabel: 'Py', color: '#4FACFE', bg: 'rgba(79,172,254,0.10)'  },
  { label: 'Node',   sublabel: 'N',  color: '#00F2C3', bg: 'rgba(0,242,195,0.10)'   },
  { label: 'TS',     sublabel: 'TS', color: '#A78BFA', bg: 'rgba(167,139,250,0.10)' },
  { label: 'Flask',  sublabel: '🌶', color: '#8898B3', bg: 'rgba(136,152,179,0.10)' },
]

/* ─── Composant ─────────────────────────────────────────────── */
export default function AvatarRing({
  src,
  alt          = 'Photo de profil',
  initials     = 'DS',
  badges       = DEFAULT_BADGES,
  size         = 220,
  orbitRadius  = 88,
  badgeSize    = 38,
  duration     = 16,     // secondes pour un tour complet
  available    = true,   // affiche le dot "disponible"
}) {
  const center = size / 2

  /* Calcul de la position (x, y) de chaque badge sur l'orbite */
  const positions = badges.map((badge, i) => {
    const angleDeg  = (360 / badges.length) * i - 90  // -90 = partir du haut
    const angleRad  = (angleDeg * Math.PI) / 180
    return {
      ...badge,
      x: center + orbitRadius * Math.cos(angleRad) - badgeSize / 2,
      y: center + orbitRadius * Math.sin(angleRad) - badgeSize / 2,
    }
  })

  /* Taille de la photo : 42% du container */
  const photoSize = Math.round(size * 0.42)

  return (
    <div
      className="ar-root"
      style={{ '--ar-size': `${size}px`, '--ar-duration': `${duration}s` }}
    >

      {/* ── Halos de fond ──────────────────────────────────── */}
      <div className="ar-glow-outer" style={{ width: size * 0.85, height: size * 0.85 }} />
      <div className="ar-glow-inner" style={{ width: photoSize * 1.4, height: photoSize * 1.4 }} />

      {/* ── SVG : anneaux décoratifs (contre-rotation lente) ─ */}
      <div className="ar-rings">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
        >
          {/* Anneau principal pointillé */}
          <circle
            cx={center} cy={center} r={orbitRadius}
            fill="none"
            stroke="rgba(79,172,254,0.22)"
            strokeWidth="1"
            strokeDasharray="5 9"
          />
          {/* Anneau secondaire interne */}
          <circle
            cx={center} cy={center} r={orbitRadius * 0.68}
            fill="none"
            stroke="rgba(0,242,195,0.10)"
            strokeWidth="0.75"
            strokeDasharray="2 14"
          />
          {/* Marqueur de départ sur l'anneau */}
          <circle
            cx={center} cy={center - orbitRadius}
            r="2.5"
            fill="rgba(79,172,254,0.5)"
          />
        </svg>
      </div>

      {/* ── Container orbital (tourne) + badges (counter-tournent) ─ */}
      <div className="ar-orbit">
        {positions.map((badge) => (
          <div
            key={badge.label}
            className="ar-badge-wrap"
            style={{
              left  : badge.x,
              top   : badge.y,
              width : badgeSize,
              height: badgeSize,
            }}
          >
            <div
              className="ar-badge"
              style={{
                color     : badge.color,
                background: badge.bg,
                border    : `1px solid ${badge.color}35`,
                width     : badgeSize,
                height    : badgeSize,
              }}
              title={badge.label}
            >
              <span className="ar-badge-sub">{badge.sublabel}</span>
              <span className="ar-badge-label">{badge.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Photo centrale ───────────────────────────────────── */}
      <div
        className="ar-photo"
        style={{ width: photoSize, height: photoSize }}
      >
        {src ? (
          <Image source={src} alt={alt} width={photoSize} height={photoSize} />
        ) : (
          <span className="ar-initials">{initials}</span>
        )}
      </div>

      {/* ── Dot disponibilité ────────────────────────────────── */}
      {available && (
        <div
          className="ar-dot"
          style={{
            bottom: center - photoSize / 2 + 4,
            right : center - photoSize / 2 + 4,
          }}
          title="Disponible"
          aria-label="Disponible"
        />
      )}

    </div>
  )
}