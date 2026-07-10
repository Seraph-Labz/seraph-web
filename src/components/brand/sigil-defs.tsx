/**
 * Shared SVG defs for the Seraph six-wing sigil.
 * Render once per page; reference elsewhere via <svg><use href="#sigil" /></svg>.
 * Geometry/gradients per .claude/CLAUDE.md.
 */
export function SigilDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <radialGradient id="wg" cx="50%" cy="0%" r="110%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="18%" stopColor="#FEE2E2" />
          <stop offset="45%" stopColor="#DC2626" />
          <stop offset="78%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.7" />
        </radialGradient>
        <radialGradient id="wgm" cx="50%" cy="0%" r="110%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="15%" stopColor="#FEE2E2" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="75%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="diamondGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(220,38,38,0.10)" />
        </radialGradient>
        <filter id="sglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <symbol id="wingShort" overflow="visible">
          <path
            d="M 0 -4 C -6 -10, -11 -26, -7 -48 C -4 -58, 0 -60, 0 -60 C 0 -60, 4 -58, 7 -48 C 11 -26, 6 -10, 0 -4 Z"
            fill="url(#wg)"
            filter="url(#sglow)"
          />
          <line x1="0" y1="-5" x2="0" y2="-56" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
        </symbol>
        <symbol id="wingLong" overflow="visible">
          <path
            d="M 0 -4 C -5 -9, -10 -24, -6 -50 C -3 -62, 0 -64, 0 -64 C 0 -64, 3 -62, 6 -50 C 10 -24, 5 -9, 0 -4 Z"
            fill="url(#wgm)"
            filter="url(#sglow)"
          />
          <line x1="0" y1="-5" x2="0" y2="-60" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
        </symbol>
        <g id="sigil">
          <circle r="74" fill="url(#halo)" opacity="0.5" />
          <circle r="72" fill="none" stroke="rgba(220,38,38,0.12)" strokeWidth="0.5" />
          <g transform="rotate(-38)">
            <use href="#wingShort" />
          </g>
          <g transform="rotate(38)">
            <use href="#wingShort" />
          </g>
          <g transform="rotate(-90)">
            <use href="#wingLong" />
          </g>
          <g transform="rotate(90)">
            <use href="#wingLong" />
          </g>
          <g transform="rotate(-142)">
            <use href="#wingShort" />
          </g>
          <g transform="rotate(142)">
            <use href="#wingShort" />
          </g>
          <polygon points="0,-7 5,0 0,7 -5,0" fill="url(#diamondGrad)" filter="url(#sglow)" />
        </g>

        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path
            d="M5 12 L19 12 M13 6 L19 12 L13 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}
