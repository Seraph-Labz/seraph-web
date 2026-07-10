/**
 * Shared SVG defs for the Seraph six-wing sigil and the eight protocol marks.
 * Render once per page; reference elsewhere via <svg><use href="#sigil" /></svg>
 * or <use href="#p-layerzero" />, etc. Geometry/gradients per .claude/CLAUDE.md.
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

        {/* Protocol marks */}
        <symbol id="p-layerzero" viewBox="-32 -32 64 64">
          <circle r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.85" />
          <circle r="20" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.65" />
          <circle r="12" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.45" />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="Space Grotesk,sans-serif"
            fontWeight="700"
            fontSize="14"
            fill="#FFFFFF"
          >
            L0
          </text>
        </symbol>
        <symbol id="p-wormhole" viewBox="-32 -32 64 64">
          <path
            d="M 0 -24 A 24 24 0 1 1 -18 -16 A 16 16 0 1 0 -4 -12 A 8 8 0 1 1 0 -8"
            fill="none"
            stroke="#9E77ED"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle r="3" fill="#C4B5FD" />
        </symbol>
        <symbol id="p-across" viewBox="-32 -32 64 64">
          <path
            d="M -22 -10 L 18 -10 L 12 -16 M 18 -10 L 12 -4"
            fill="none"
            stroke="#6CF9D8"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 22 10 L -18 10 L -12 4 M -18 10 L -12 16"
            fill="none"
            stroke="#6CF9D8"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="p-hop" viewBox="-32 -32 64 64">
          <path d="M -22 14 Q 0 -26, 22 14" fill="none" stroke="#B32EAD" strokeWidth="3" strokeLinecap="round" />
          <circle cx="-22" cy="14" r="3.5" fill="#B32EAD" />
          <circle cx="22" cy="14" r="3.5" fill="#B32EAD" />
          <circle cx="0" cy="-14" r="2.5" fill="#F472D5" />
        </symbol>
        <symbol id="p-circle" viewBox="-32 -32 64 64">
          <circle r="22" fill="none" stroke="#3F7BE4" strokeWidth="2.6" />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontFamily="Space Grotesk,sans-serif"
            fontWeight="700"
            fontSize="22"
            fill="#3F7BE4"
          >
            $
          </text>
        </symbol>
        <symbol id="p-axelar" viewBox="-32 -32 64 64">
          <polygon
            points="-18,-10 0,-22 18,-10 18,10 0,22 -18,10"
            fill="none"
            stroke="#E84142"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M 2 -10 L -6 2 L 2 2 L -2 10"
            fill="none"
            stroke="#E84142"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="p-stargate" viewBox="-32 -32 64 64">
          <g stroke="#00D1FF" strokeWidth="1.8" strokeLinecap="round">
            <line x1="0" y1="-24" x2="0" y2="24" />
            <line x1="-24" y1="0" x2="24" y2="0" />
            <line x1="-17" y1="-17" x2="17" y2="17" />
            <line x1="-17" y1="17" x2="17" y2="-17" />
          </g>
          <circle r="6" fill="#00D1FF" />
          <circle r="3" fill="#E0F7FF" />
        </symbol>
        <symbol id="p-connext" viewBox="-32 -32 64 64">
          <circle cx="-9" cy="0" r="12" fill="none" stroke="#9F62FF" strokeWidth="2.6" />
          <circle cx="9" cy="0" r="12" fill="none" stroke="#9F62FF" strokeWidth="2.6" />
        </symbol>

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
