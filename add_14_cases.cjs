const fs = require('fs');

const cases = `
    case 'r-v-pittwood':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="rails">
            <path d="M 0 120 L 90 60 L 110 60 L 200 120 Z" fill="rgba(0,0,0,0.2)" />
            <line x1="80" y1="120" x2="95" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="120" y1="120" x2="105" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="75" y1="100" x2="125" y2="100" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
            <line x1="85" y1="80" x2="115" y2="80" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="90" y1="70" x2="110" y2="70" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
          </g>
          <g data-name="distant-train">
            <rect x="96" y="55" width="8" height="5" fill="rgba(0,0,0,0.8)" />
            <path d="M 100 55 Q 90 40 105 30 T 90 10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" filter="url(#soft-glow)" />
          </g>
          <g data-name="crossing-gate">
            <rect x="0" y="40" width="10" height="80" fill="rgba(0,0,0,0.8)" />
            <polygon points="10,60 80,60 80,50 10,50" fill="rgba(0,0,0,0.8)" />
            <polygon points="10,80 70,80 70,70 10,70" fill="rgba(0,0,0,0.8)" />
            <polygon points="10,50 70,80 65,80 10,55" fill="rgba(0,0,0,0.6)" />
            <circle cx="75" cy="55" r="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-stone-dobinson':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="window">
            <rect x="140" y="10" width="40" height="70" fill="rgba(255,255,255,0.05)" />
            <rect x="145" y="15" width="12" height="30" fill="rgba(255,255,255,0.08)" />
            <rect x="163" y="15" width="12" height="30" fill="rgba(255,255,255,0.08)" />
            <rect x="145" y="50" width="12" height="25" fill="rgba(255,255,255,0.08)" />
            <rect x="163" y="50" width="12" height="25" fill="rgba(255,255,255,0.08)" />
            <path d="M 130 10 L 150 10 L 150 80 L 140 80 Z" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="bed">
            <path d="M 0 110 L 110 110 L 120 80 L 0 80 Z" fill="rgba(0,0,0,0.4)" />
            <path d="M 0 95 C 40 95 60 85 100 85 L 115 85 L 105 110 L 0 110 Z" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="side-table">
            <rect x="110" y="90" width="30" height="5" fill="rgba(0,0,0,0.6)" />
            <rect x="115" y="95" width="4" height="25" fill="rgba(0,0,0,0.6)" />
            <rect x="131" y="95" width="4" height="25" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="broth-bowl">
            <ellipse cx="125" cy="88" rx="10" ry="4" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="125" cy="87" rx="8" ry="3" fill="#e8b34a" opacity="0.6" />
            <path d="M 125 85 Q 120 75 130 65 T 125 55" fill="none" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-dytham':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="street-perspective">
            <polygon points="0,120 100,50 120,50 200,120" fill="rgba(0,0,0,0.3)" />
            <polygon points="0,120 100,50 80,50 0,90" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="streetlamp">
            <line x1="60" y1="10" x2="60" y2="80" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <path d="M 50 10 L 70 10 L 65 5 L 55 5 Z" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="60" cy="12" rx="15" ry="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <polygon points="45,12 75,12 120,100 0,100" fill="rgba(232,179,74,0.15)" />
            <ellipse cx="60" cy="95" rx="40" ry="10" fill="rgba(232,179,74,0.15)" filter="url(#soft-glow)" />
          </g>
          <g data-name="constable-back">
            <path d="M 50 110 C 50 80 60 70 70 70 C 80 70 85 80 85 110 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 60 70 C 60 60 75 60 75 70 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 62 60 C 60 50 75 50 73 60 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 58 55 C 65 52 70 52 77 55" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="67.5" cy="53" r="2" fill="#f4e9d8" opacity="0.3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'collins-v-wilcock':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="doorway-behind">
            <rect x="80" y="10" width="80" height="110" fill="rgba(255,255,255,0.05)" />
            <line x1="80" y1="10" x2="80" y2="120" stroke="rgba(0,0,0,0.5)" strokeWidth="4" />
            <line x1="160" y1="10" x2="160" y2="120" stroke="rgba(0,0,0,0.5)" strokeWidth="4" />
            <line x1="80" y1="10" x2="160" y2="10" stroke="rgba(0,0,0,0.5)" strokeWidth="4" />
          </g>
          <g data-name="forearm">
            <path d="M 120 120 C 130 90 125 60 120 40 L 90 40 C 95 60 100 90 90 120 Z" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="gripping-hand">
            <path d="M -10 90 Q 50 90 80 70 L 105 60 L 105 80 L 80 90 L 50 110 L -10 110 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 105 60 Q 115 55 125 60 Q 120 70 105 70 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 105 65 Q 120 60 128 68 Q 120 75 105 75 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 105 72 Q 115 70 125 78 Q 115 85 105 80 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 90 55 Q 100 45 110 50 Q 105 60 90 65 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 80 70 Q 110 60 125 68" fill="none" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-chan-fook':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="window-frame">
            <rect x="40" y="20" width="120" height="80" fill="rgba(255,255,255,0.05)" />
            <rect x="35" y="15" width="130" height="90" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="10" />
            <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(0,0,0,0.8)" strokeWidth="6" />
            <line x1="40" y1="60" x2="160" y2="60" stroke="rgba(0,0,0,0.8)" strokeWidth="6" />
          </g>
          <g data-name="curtains-stirring">
            <path d="M 40 20 Q 70 50 30 100 L 40 100 Q 80 60 50 20 Z" fill="rgba(255,255,255,0.15)" />
            <path d="M 160 20 Q 130 60 170 100 L 160 100 Q 120 50 150 20 Z" fill="rgba(255,255,255,0.15)" />
          </g>
          <g data-name="lock-and-key">
            <rect x="94" y="50" width="12" height="20" rx="2" fill="rgba(0,0,0,0.9)" />
            <circle cx="100" cy="56" r="3" fill="#e8b34a" opacity="0.8" />
            <path d="M 100 56 L 115 56 L 115 62 L 110 62 L 110 59 L 105 59 L 105 62 L 100 62 Z" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <circle cx="115" cy="56" r="4" fill="none" stroke="#e8b34a" strokeWidth="2" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'jcc-v-eisenhower':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="target">
            <circle cx="100" cy="60" r="50" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="8" />
            <circle cx="100" cy="60" r="35" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="6" />
            <circle cx="100" cy="60" r="20" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="4" />
            <circle cx="100" cy="60" r="8" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="pellet">
            <circle cx="92" cy="52" r="3" fill="rgba(0,0,0,0.9)" />
            <circle cx="91" cy="51" r="1" fill="#f4e9d8" opacity="0.8" />
            <path d="M 92 52 L 100 60 L 98 62 L 90 54 Z" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="fracture-lines">
            <line x1="92" y1="52" x2="80" y2="40" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="92" y1="52" x2="105" y2="40" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="92" y1="52" x2="80" y2="60" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-burstow':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="half-open-door">
            <rect x="0" y="0" width="80" height="120" fill="rgba(0,0,0,0.8)" />
            <polygon points="80,0 130,20 130,100 80,120" fill="rgba(0,0,0,0.6)" />
            <polygon points="130,20 200,0 200,120 130,100" fill="rgba(255,255,255,0.05)" />
            <rect x="110" y="55" width="8" height="2" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="doormat">
            <polygon points="30,100 170,80 190,110 10,120" fill="rgba(0,0,0,0.3)" />
          </g>
          <g data-name="envelopes">
            <polygon points="90,90 120,85 115,95 85,100" fill="#f4e9d8" opacity="0.8" />
            <polygon points="70,95 100,98 95,108 65,105" fill="#f4e9d8" opacity="0.9" />
            <polygon points="105,100 135,105 130,115 100,110" fill="#f4e9d8" opacity="0.85" />
            <polygon points="130,90 160,82 165,92 135,100" fill="#f4e9d8" opacity="0.7" />
            <polygon points="50,110 80,108 85,118 55,120" fill="#f4e9d8" opacity="0.8" />
            <line x1="70" y1="95" x2="95" y2="108" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="105" y1="100" x2="130" y2="115" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-belfon':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="counter-surface">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.5)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="straight-razor">
            <path d="M 40 95 C 40 90 80 90 90 95 C 100 100 80 105 40 105 Z" fill="rgba(0,0,0,0.8)" />
            <circle cx="85" cy="97" r="2" fill="rgba(255,255,255,0.2)" />
            <path d="M 85 97 C 120 90 150 85 160 85 C 160 95 120 100 85 97 Z" fill="rgba(255,255,255,0.15)" />
            <path d="M 85 97 C 120 90 150 85 160 85" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-clinton':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="mantelpiece">
            <rect x="0" y="90" width="200" height="15" fill="rgba(0,0,0,0.7)" />
            <rect x="10" y="105" width="180" height="15" fill="rgba(0,0,0,0.8)" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="facedown-frame">
            <polygon points="40,85 120,75 130,90 50,100" fill="rgba(0,0,0,0.5)" />
            <polygon points="40,85 120,75 130,90 50,100" fill="none" stroke="#f4e9d8" strokeWidth="2" opacity="0.6" strokeLinejoin="round" />
            <polygon points="45,86 115,78 122,88 52,96" fill="none" stroke="#e8b34a" strokeWidth="1" opacity="0.5" />
            <path d="M 85 85 L 95 65 L 105 82" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="candlestick">
            <rect x="150" y="85" width="20" height="5" fill="rgba(0,0,0,0.8)" />
            <rect x="155" y="70" width="10" height="15" fill="rgba(0,0,0,0.8)" />
            <rect x="158" y="40" width="4" height="30" fill="#f4e9d8" opacity="0.8" />
            <path d="M 160 40 Q 155 30 160 20 Q 165 30 160 40 Z" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-golds':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="desk">
            <rect x="0" y="100" width="200" height="20" fill="rgba(0,0,0,0.6)" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="scales-base">
            <path d="M 80 100 L 100 20 L 120 100 Z" fill="rgba(0,0,0,0.8)" />
            <circle cx="100" cy="20" r="6" fill="#e8b34a" opacity="0.8" />
          </g>
          <g data-name="scales-beam" transform="rotate(-15 100 30)">
            <line x1="40" y1="30" x2="160" y2="30" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
            <circle cx="100" cy="30" r="4" fill="rgba(0,0,0,0.9)" />
            <g data-name="left-pan">
              <line x1="40" y1="30" x2="25" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              <line x1="40" y1="30" x2="55" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              <path d="M 15 70 C 15 80 65 80 65 70 Z" fill="#e8b34a" opacity="0.7" />
            </g>
            <g data-name="right-pan">
              <line x1="160" y1="30" x2="145" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              <line x1="160" y1="30" x2="175" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              <path d="M 135 70 C 135 80 185 80 185 70 Z" fill="#e8b34a" opacity="0.7" />
            </g>
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-williams-gladstone':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="pavement">
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="20" y1="100" x2="0" y2="120" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="100" y1="100" x2="80" y2="120" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
            <line x1="180" y1="100" x2="160" y2="120" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          </g>
          <g data-name="grappling-figures">
            <path d="M 70 80 C 60 70 60 40 75 40 C 90 40 80 60 85 80 C 75 85 70 80 70 80 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 90 80 C 100 70 100 40 85 40 C 70 40 80 60 75 80 C 85 85 90 80 90 80 Z" fill="rgba(0,0,0,0.6)" />
            <path d="M 75 40 C 80 30 90 30 85 40 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 85 40 C 80 30 70 30 75 40 Z" fill="rgba(0,0,0,0.6)" />
            <path d="M 70 80 L 60 110 M 85 80 L 95 110" stroke="rgba(0,0,0,0.8)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 90 80 L 100 110 M 75 80 L 65 110" stroke="rgba(0,0,0,0.6)" strokeWidth="8" strokeLinecap="round" />
          </g>
          <g data-name="approaching-figure">
            <path d="M 150 70 C 140 50 145 30 160 30 C 175 30 170 50 160 70 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 160 30 C 165 20 175 20 170 30 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 150 70 L 130 105 M 160 70 L 150 110" stroke="rgba(0,0,0,0.9)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 160 40 L 130 50" stroke="rgba(0,0,0,0.9)" strokeWidth="6" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-wilson':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="fireplace-hearth">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.6)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <polygon points="160,0 200,0 200,80 160,80" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="coal-fire">
            <path d="M 170 80 Q 180 60 190 80 Z" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.6" />
            <path d="M 165 80 Q 175 65 185 80 Z" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.4" />
            <circle cx="180" cy="75" r="3" fill="rgba(0,0,0,0.8)" />
            <circle cx="175" cy="78" r="4" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="red-hot-blade">
            <path d="M 40 100 L 120 95 L 140 98 L 120 105 Z" fill="rgba(0,0,0,0.7)" />
            <path d="M 120 95 L 140 98 L 120 105 Z" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <path d="M 130 96 L 140 98 L 130 102 Z" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
            <rect x="30" y="96" width="30" height="8" rx="2" fill="rgba(0,0,0,0.9)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-sullivan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="skull-profile">
            <path d="M 100 20 C 140 20 160 50 160 80 C 160 100 140 110 120 110 L 110 110 L 110 90 L 90 90 L 80 110 L 60 110 C 50 90 40 70 60 50 C 70 30 80 20 100 20 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinejoin="round" />
            <path d="M 120 60 C 130 60 140 70 140 80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
            <circle cx="120" cy="70" r="10" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="electrical-lines">
            <polyline points="100,50 110,40 105,30 120,25" fill="none" stroke="#e8b34a" strokeWidth="2" filter="url(#soft-glow)" />
            <polyline points="90,60 70,50 80,40 60,35" fill="none" stroke="#f4e9d8" strokeWidth="2" filter="url(#soft-glow)" />
            <polyline points="105,75 115,85 100,95 110,105" fill="none" stroke="#e8b34a" strokeWidth="2" filter="url(#soft-glow)" />
            <polyline points="95,65 80,75 90,85 75,95" fill="none" stroke="#f4e9d8" strokeWidth="2" filter="url(#soft-glow)" />
            <circle cx="100" cy="60" r="5" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-kingston':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="table">
            <ellipse cx="100" cy="100" rx="80" ry="15" fill="rgba(255,255,255,0.05)" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
          </g>
          <g data-name="saucer-and-cup">
            <ellipse cx="80" cy="95" rx="30" ry="6" fill="rgba(0,0,0,0.6)" />
            <path d="M 60 92 L 60 70 C 60 65 100 65 100 70 L 100 92 Z" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="80" cy="70" rx="20" ry="4" fill="rgba(0,0,0,0.9)" />
            <path d="M 100 75 C 110 75 110 85 100 85" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g data-name="coffee-steam">
            <path d="M 75 60 Q 70 40 85 20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" filter="url(#soft-glow)" />
            <path d="M 85 62 Q 95 45 80 30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" filter="url(#soft-glow)" />
          </g>
          <g data-name="glass-vial" transform="translate(130, 92) rotate(15)">
            <rect x="-6" y="-20" width="12" height="20" rx="2" fill="rgba(0,0,0,0.5)" />
            <path d="M -4 -20 L -4 -25 L 4 -25 L 4 -20 Z" fill="rgba(0,0,0,0.8)" />
            <rect x="-8" y="-26" width="16" height="2" fill="rgba(0,0,0,0.9)" />
            <line x1="-3" y1="-15" x2="-3" y2="-5" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" filter="url(#soft-glow)" opacity="0.8" />
            <ellipse cx="0" cy="-5" rx="4" ry="2" fill="#e8b34a" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );
`;

const fileStr = fs.readFileSync('/home/victor/omo/revision/src/components/CaseScene.tsx', 'utf8');
const replaceTarget = "    default:";
const newFileStr = fileStr.replace(replaceTarget, cases + "\n" + replaceTarget);
fs.writeFileSync('/home/victor/omo/revision/src/components/CaseScene.tsx', newFileStr);
