import React from 'react';

interface CaseSceneProps {
  caseId: string;
  className?: string;
}

export const CaseScene: React.FC<CaseSceneProps> = ({ caseId, className }) => {
  const commonProps = {
    viewBox: '0 0 200 120',
    width: '100%',
    height: 'auto',
    preserveAspectRatio: 'xMidYMid slice',
    className,
    xmlns: 'http://www.w3.org/2000/svg',
  };

  const defs = (
    <defs>
      <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
        <stop offset="60%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
      </radialGradient>
      <filter id="soft-glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  );

  const vignetteLayer = <rect width="200" height="120" fill="url(#vignette)" pointerEvents="none" />;

  switch (caseId) {
    case 'r-v-cunningham':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="brick-wall">
            <path d="M 0 20 L 200 20 M 0 40 L 200 40 M 0 60 L 200 60 M 0 80 L 200 80 M 0 100 L 200 100" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
            <path d="M 20 20 L 20 40 M 60 20 L 60 40 M 100 20 L 100 40 M 140 20 L 140 40 M 180 20 L 180 40" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
            <path d="M 40 40 L 40 60 M 80 40 L 80 60 M 120 40 L 120 60 M 160 40 L 160 60" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
            <path d="M 20 60 L 20 80 M 60 60 L 60 80 M 100 60 L 100 80 M 140 60 L 140 80 M 180 60 L 180 80" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          </g>
          <rect data-name="meter-box" x="30" y="30" width="50" height="60" rx="4" fill="rgba(0,0,0,0.4)" />
          <g data-name="torn-pipe">
            <path d="M 80 50 L 100 50 L 110 40" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <path d="M 108 38 L 113 41 L 109 44" fill="none" stroke="#f4e9d8" strokeWidth="1.5" />
          </g>
          <g data-name="gas-wisps">
            <path d="M 115 35 Q 130 10 160 20 T 190 10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="4 6" strokeLinecap="round" />
            <path d="M 112 45 Q 140 30 150 50 T 180 40" fill="none" stroke="#e8b34a" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-mohan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="headlight-beams">
            <polygon points="60,80 140,80 180,120 20,120" fill="rgba(255,255,255,0.08)" />
            <polygon points="60,80 100,120 20,120" fill="rgba(255,255,255,0.05)" />
            <polygon points="140,80 180,120 100,120" fill="rgba(255,255,255,0.05)" />
          </g>
          <g data-name="car">
            <path d="M -20 120 L 20 60 L 180 60 L 220 120 Z" fill="rgba(0,0,0,0.35)" />
            <rect x="40" y="60" width="120" height="20" fill="rgba(0,0,0,0.2)" />
          </g>
          <g data-name="headlights">
            <ellipse cx="60" cy="80" rx="12" ry="8" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
            <ellipse cx="140" cy="80" rx="12" ry="8" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          <g data-name="police-constable">
            <path d="M 95 120 L 95 90 C 95 85 105 85 105 90 L 105 120 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 96 82 C 96 72 104 72 104 82 L 106 82 L 106 85 L 94 85 L 94 82 Z" fill="rgba(0,0,0,0.8)" />
            <circle cx="100" cy="78" r="1.5" fill="#e8b34a" opacity="0.7" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-woollin':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="empty-cot">
            <path d="M 50 40 L 50 100 M 150 40 L 150 100 M 50 90 L 150 90" stroke="rgba(0,0,0,0.4)" strokeWidth="6" strokeLinecap="round" />
            <path d="M 70 50 L 70 90 M 90 50 L 90 90 M 110 50 L 110 90 M 130 50 L 130 90" stroke="rgba(0,0,0,0.3)" strokeWidth="3" strokeLinecap="round" />
            <rect x="53" y="80" width="94" height="10" fill="rgba(0,0,0,0.2)" />
          </g>
          <g data-name="dropped-bottle" transform="translate(115, 108) rotate(60)">
            <rect x="-8" y="-12" width="16" height="24" rx="4" fill="#f4e9d8" opacity="0.8" />
            <rect x="-4" y="-16" width="8" height="4" fill="#e8b34a" opacity="0.9" />
            <circle cx="0" cy="-18" r="3" fill="#e8b34a" opacity="0.8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-white':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="armchair">
            <path d="M 50 20 C 50 10 90 10 90 20 L 90 70 L 110 70 L 110 100 L 30 100 L 30 70 L 50 70 Z" fill="rgba(0,0,0,0.4)" />
            <circle cx="60" cy="35" r="2" fill="rgba(0,0,0,0.2)" />
            <circle cx="80" cy="35" r="2" fill="rgba(0,0,0,0.2)" />
            <circle cx="70" cy="50" r="2" fill="rgba(0,0,0,0.2)" />
          </g>
          <path data-name="drinks-table" d="M 120 80 L 160 80 M 140 80 L 140 100" stroke="rgba(0,0,0,0.5)" strokeWidth="4" strokeLinecap="round" />
          <g data-name="untouched-glass">
            <path d="M 135 68 L 137 80 L 143 80 L 145 68 Z" fill="#f4e9d8" opacity="0.7" />
            <path d="M 136 72 L 144 72 L 142 80 L 138 80 Z" fill="#e8b34a" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-pagett':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="stairwell">
            <path d="M 0 100 L 40 100 L 40 80 L 80 80 L 80 60 L 120 60 L 120 40 L 160 40 L 160 20 L 200 20" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="4" />
            <path d="M 0 120 L 40 120 L 40 100 L 80 100 L 80 80 L 120 80 L 120 60 L 160 60 L 160 40 L 200 40 L 200 120 Z" fill="rgba(0,0,0,0.2)" />
          </g>
          <g data-name="human-shield">
            <path d="M 50 80 C 50 60 60 50 70 50 C 80 50 80 65 80 80 Z" fill="rgba(0,0,0,0.5)" />
            <path d="M 60 80 C 60 45 75 35 85 40 C 95 45 95 60 95 80 Z" fill="rgba(0,0,0,0.7)" />
            <path d="M 85 55 L 110 50" stroke="rgba(0,0,0,0.7)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g data-name="muzzle-flash">
            <polygon points="180,10 160,25 170,35 140,40 165,45 160,60 185,50 190,70 200,50 220,60 210,40 220,20 195,30" fill="#e8b34a" opacity="0.8" filter="url(#soft-glow)" />
            <polygon points="180,20 165,30 170,38 150,40 170,42 165,50 185,45 190,55 200,45 210,50 205,38 215,25 195,33" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-smith':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tent-flap">
            <path d="M 100 0 L -20 120 L 220 120 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M 100 0 L 80 120 L 120 120 Z" fill="rgba(0,0,0,0.15)" />
          </g>
          <g data-name="stretcher">
            <rect x="20" y="80" width="160" height="8" rx="2" fill="rgba(0,0,0,0.4)" />
            <rect x="5" y="81" width="20" height="6" rx="2" fill="rgba(0,0,0,0.6)" />
            <rect x="175" y="81" width="20" height="6" rx="2" fill="rgba(0,0,0,0.6)" />
            <path d="M 40 88 L 40 120 M 160 88 L 160 120" stroke="rgba(0,0,0,0.4)" strokeWidth="4" />
          </g>
          <g data-name="military-tunic">
            <path d="M 50 80 C 60 55 100 50 120 55 C 140 60 150 80 150 80 Z" fill="#f4e9d8" opacity="0.85" />
            <rect x="65" y="65" width="8" height="2" transform="rotate(20 65 65)" fill="rgba(0,0,0,0.3)" />
            <circle cx="100" cy="65" r="1.5" fill="rgba(0,0,0,0.3)" />
            <circle cx="100" cy="72" r="1.5" fill="rgba(0,0,0,0.3)" />
          </g>
          <path data-name="spreading-dark-stain" d="M 85 62 C 80 57 95 52 100 59 C 105 57 110 62 105 67 C 100 72 90 67 85 62 Z" fill="rgba(0,0,0,0.6)" />
          {vignetteLayer}
        </svg>
      );

    case 'r-v-jordan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="hospital-chart" transform="translate(135, 45) rotate(15)">
            <rect x="-25" y="-35" width="50" height="70" rx="3" fill="rgba(0,0,0,0.3)" />
            <path d="M -10 -10 L 10 10 M 10 -10 L -10 10" stroke="#e8b34a" strokeWidth="6" strokeLinecap="round" />
            <path d="M -15 20 L 15 20 M -15 25 L 10 25" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <rect data-name="hospital-tray" x="30" y="90" width="140" height="8" rx="3" fill="rgba(0,0,0,0.4)" />
          <g data-name="tipped-bottle" transform="translate(55, 87) rotate(-65)">
            <rect x="-8" y="-20" width="16" height="24" rx="2" fill="#f4e9d8" opacity="0.8" />
            <path d="M -8 -10 L 8 -10" stroke="#e8b34a" strokeWidth="4" />
            <rect x="-4" y="-24" width="8" height="4" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="syringe">
            <rect x="75" y="82" width="40" height="6" fill="rgba(255,255,255,0.4)" />
            <rect x="115" y="80" width="4" height="10" rx="1" fill="#f4e9d8" opacity="0.9" />
            <rect x="65" y="84" width="10" height="2" fill="#e8b34a" />
            <line x1="55" y1="85" x2="65" y2="85" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-blaue':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="dove">
            <path d="M 160 30 Q 150 20 140 25 Q 150 30 145 40 Q 155 35 160 40 Q 165 30 175 25 Q 165 20 160 30 Z" fill="#f4e9d8" opacity="0.7" />
            <path d="M 145 40 Q 135 50 120 45 Q 135 35 145 40 Z" fill="#f4e9d8" opacity="0.5" />
          </g>
          <g data-name="hospital-bed">
            <path d="M 20 100 L 20 60 L 50 60 M 20 80 L 180 80 L 180 100 M 180 60 L 150 60" stroke="rgba(0,0,0,0.5)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 50 60 C 50 45 80 45 90 60 L 150 60 Z" fill="rgba(0,0,0,0.3)" />
            <path d="M 50 80 L 180 80" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="clipboard" transform="translate(110, 75) rotate(70)">
            <rect x="-12" y="-18" width="24" height="36" rx="2" fill="#f4e9d8" opacity="0.9" />
            <rect x="-5" y="-20" width="10" height="4" rx="1" fill="rgba(0,0,0,0.6)" />
            <path d="M -6 -4 L 6 8 M 6 -4 L -6 8" stroke="#e8b34a" strokeWidth="3" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-roberts':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="motion-lines">
            <line x1="20" y1="45" x2="60" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="65" x2="80" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="90" x2="70" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="car-front">
            <path d="M 60 80 L 80 40 L 160 40 L 190 80 Z" fill="rgba(0,0,0,0.4)" />
            <path d="M 80 40 L 160 40" stroke="#f4e9d8" strokeWidth="2" opacity="0.3" />
            <path d="M 120 40 L 160 40 L 180 90 L 140 90 Z" fill="rgba(0,0,0,0.5)" transform="rotate(-25 120 40)" />
          </g>
          <g data-name="tumbling-figure">
            <path d="M 110 80 C 105 70 95 75 90 85 C 85 95 95 105 105 100 C 115 95 115 90 110 80 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M 100 80 L 90 70 M 110 90 L 120 100 M 95 95 L 85 105 M 105 85 L 115 75" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'dpp-v-smith':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="road">
            <path d="M 0 120 L 90 40 L 110 40 L 200 120 Z" fill="rgba(0,0,0,0.2)" />
            <polygon points="98,45 102,45 101,55 99,55" fill="rgba(255,255,255,0.2)" />
            <polygon points="97,65 103,65 101,80 99,80" fill="rgba(255,255,255,0.2)" />
            <polygon points="95,95 105,95 102,120 98,120" fill="rgba(255,255,255,0.2)" />
          </g>
          <g data-name="police-cap" transform="translate(130, 80) rotate(-35) scale(1.3)">
            <path d="M -15 0 C -15 -12 15 -12 15 0 Z" fill="#f4e9d8" opacity="0.9" />
            <rect x="-15" y="-1" width="30" height="4" fill="#e8b34a" opacity="0.9" />
            <path d="M -18 3 C -8 10 8 10 18 3 C 8 6 -8 6 -18 3 Z" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="tumble-arcs">
            <path d="M 115 65 Q 125 55 140 65" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
            <path d="M 135 65 Q 145 75 140 85" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-ireland':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="shaft-of-light">
            <polygon points="120,0 180,0 200,120 100,120" fill="rgba(255,255,255,0.08)" />
            <polygon points="135,0 165,0 180,120 120,120" fill="rgba(255,255,255,0.05)" />
          </g>
          <rect data-name="table-edge" x="20" y="80" width="90" height="5" rx="2" fill="rgba(0,0,0,0.4)" />
          <g data-name="rotary-phone">
            <path d="M 30 80 L 45 50 L 75 50 L 90 80 Z" fill="rgba(0,0,0,0.5)" />
            <circle cx="60" cy="65" r="12" fill="rgba(0,0,0,0.3)" />
            <circle cx="60" cy="65" r="4" fill="rgba(255,255,255,0.1)" />
          </g>
          <g data-name="receiver-off-hook">
            <path d="M 65 105 C 65 90 85 90 85 105" fill="none" stroke="#f4e9d8" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
            <circle cx="65" cy="105" r="4" fill="rgba(0,0,0,0.4)" />
            <circle cx="85" cy="105" r="4" fill="rgba(0,0,0,0.4)" />
          </g>
          <path data-name="dangling-cord" d="M 85 80 Q 95 90 85 100 Q 75 110 85 120" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" />
          {vignetteLayer}
        </svg>
      );

    case 'r-v-miller':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="door-silhouette">
            <rect x="150" y="10" width="50" height="110" fill="rgba(0,0,0,0.4)" />
            <rect x="160" y="20" width="20" height="40" fill="rgba(0,0,0,0.2)" />
            <rect x="160" y="70" width="20" height="30" fill="rgba(0,0,0,0.2)" />
          </g>
          <g data-name="mattress">
            <path d="M 20 90 L 130 85 L 140 100 L 10 110 Z" fill="rgba(0,0,0,0.3)" />
            <path d="M 20 90 L 10 110" stroke="#f4e9d8" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          </g>
          <g data-name="smoke-and-flames">
            <path d="M 35 70 Q 20 50 40 30 T 30 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" filter="url(#soft-glow)" />
            <path d="M 45 65 Q 60 45 45 25 T 55 5" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="8" strokeLinecap="round" filter="url(#soft-glow)" />
            <path d="M 15 95 Q 20 70 30 85 Q 40 60 45 80 Q 55 70 50 95 Z" fill="#e8b34a" opacity="0.9" />
            <path d="M 25 90 Q 30 75 35 85 Q 40 70 42 90 Z" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );


    case 'r-v-vickers':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="shop-counter">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.5)" />
            <rect x="0" y="75" width="200" height="5" fill="rgba(0,0,0,0.7)" />
          </g>
          <g data-name="fallen-lamp">
            <path d="M 80 100 L 100 105 L 110 95 L 90 90 Z" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="115" cy="100" rx="15" ry="5" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.6" />
            <path d="M 105 100 Q 115 100 120 95" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="coins">
            <ellipse cx="60" cy="105" rx="3" ry="1.5" fill="#f4e9d8" opacity="0.8" />
            <ellipse cx="70" cy="110" rx="3" ry="1.5" fill="#f4e9d8" opacity="0.7" />
            <ellipse cx="65" cy="115" rx="3" ry="1.5" fill="#f4e9d8" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-byrne':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="head-silhouette">
            <path d="M 120 20 C 140 20 150 40 150 60 C 150 80 140 100 120 120 L 70 120 C 60 100 60 80 60 60 C 60 40 70 20 90 20 Z" fill="rgba(0,0,0,0.4)" />
            <path d="M 115 15 C 135 15 145 35 145 55 C 145 75 135 95 115 115 L 65 115 C 55 95 55 75 55 55 C 55 35 65 15 85 15 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          </g>
          <g data-name="crack">
            <path d="M 100 10 L 110 30 L 95 50 L 115 70 L 100 90 L 110 115" fill="none" stroke="#e8b34a" strokeWidth="3" filter="url(#soft-glow)" strokeLinejoin="round" />
            <path d="M 100 10 L 110 30 L 95 50 L 115 70 L 100 90 L 110 115" fill="none" stroke="#f4e9d8" strokeWidth="1" strokeLinejoin="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-ahluwalia':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="doorway">
            <rect x="0" y="0" width="80" height="120" fill="rgba(0,0,0,0.6)" />
            <rect x="110" y="0" width="90" height="120" fill="rgba(0,0,0,0.6)" />
            <polygon points="80,0 110,10 110,120 80,120" fill="rgba(255,255,255,0.1)" />
          </g>
          <g data-name="match">
            <line x1="140" y1="100" x2="160" y2="70" stroke="rgba(0,0,0,0.8)" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="160" cy="70" rx="6" ry="10" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <path d="M 157 75 Q 160 60 163 75 Z" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-church':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="river">
            <rect x="0" y="80" width="200" height="40" fill="rgba(255,255,255,0.05)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          <g data-name="ripples" transform="translate(130, 95) scale(1, 0.3)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#f4e9d8" strokeWidth="2" opacity="0.6" />
            <circle cx="0" cy="0" r="25" fill="none" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.4" />
            <circle cx="0" cy="0" r="45" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.2" />
          </g>
          <g data-name="reeds">
            <path d="M 20 120 Q 25 100 20 80 M 30 120 Q 35 90 40 70 M 10 120 Q 5 100 10 85 M 40 120 Q 45 95 50 80" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-mitchell':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="counter">
            <rect x="160" y="40" width="40" height="80" fill="rgba(0,0,0,0.3)" />
            <line x1="160" y1="40" x2="160" y2="120" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          <g data-name="queue">
            <rect x="20" y="50" width="15" height="70" rx="5" fill="rgba(0,0,0,0.4)" />
            <circle cx="27" cy="40" r="8" fill="rgba(0,0,0,0.4)" />
            <rect x="55" y="50" width="15" height="70" rx="5" fill="rgba(0,0,0,0.5)" />
            <circle cx="62" cy="40" r="8" fill="rgba(0,0,0,0.5)" />
            <rect x="90" y="50" width="15" height="70" rx="5" fill="rgba(0,0,0,0.6)" />
            <circle cx="97" cy="40" r="8" fill="rgba(0,0,0,0.6)" />
            <g transform="translate(130, 120) rotate(25) translate(-130, -120)">
              <rect x="125" y="50" width="15" height="70" rx="5" fill="rgba(0,0,0,0.8)" />
              <circle cx="132" cy="40" r="8" fill="rgba(0,0,0,0.8)" />
            </g>
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-adomako':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="lamp-dome">
            <path d="M 60 -10 C 60 30 140 30 140 -10 Z" fill="rgba(0,0,0,0.6)" />
            <ellipse cx="100" cy="15" rx="30" ry="10" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
          </g>
          <g data-name="hanging-instruments">
            <line x1="85" y1="20" x2="85" y2="50" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
            <line x1="100" y1="25" x2="100" y2="60" stroke="rgba(0,0,0,0.7)" strokeWidth="3" />
            <line x1="115" y1="20" x2="115" y2="45" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
            <circle cx="100" cy="62" r="2" fill="#f4e9d8" opacity="0.6" />
          </g>
          <g data-name="heart-monitor">
            <rect x="150" y="70" width="40" height="30" rx="3" fill="rgba(0,0,0,0.5)" />
            <rect x="155" y="75" width="30" height="20" rx="1" fill="rgba(0,0,0,0.8)" />
            <polyline points="155,85 185,85" fill="none" stroke="#e8b34a" strokeWidth="1.5" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-martin':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="horizon">
            <path d="M 0 100 Q 50 95 100 100 T 200 95 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="farmhouse">
            <polygon points="50,100 50,60 80,40 130,40 130,100" fill="rgba(0,0,0,0.8)" />
            <polygon points="80,40 105,20 130,40" fill="rgba(0,0,0,0.8)" />
            <rect x="95" y="60" width="15" height="20" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <line x1="102.5" y1="60" x2="102.5" y2="80" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
            <line x1="95" y1="70" x2="110" y2="70" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
          </g>
          <g data-name="shotgun-barrel">
            <line x1="105" y1="75" x2="135" y2="85" stroke="rgba(0,0,0,0.9)" strokeWidth="3" strokeLinecap="square" />
            <line x1="105" y1="73" x2="135" y2="83" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="square" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'dpp-v-majewski':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bar-surface">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.4)" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="spilled-wine">
            <ellipse cx="100" cy="95" rx="40" ry="10" fill="#f4e9d8" opacity="0.6" filter="url(#soft-glow)" />
            <path d="M 70 95 Q 60 105 80 110" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          </g>
          <g data-name="tipped-glass" transform="translate(100, 90) rotate(75)">
            <path d="M -15 -30 L 15 -30 L 5 10 L -5 10 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="0" y1="10" x2="0" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
            <ellipse cx="0" cy="40" rx="15" ry="3" fill="rgba(255,255,255,0.2)" />
          </g>
          <g data-name="pills">
            <ellipse cx="150" cy="98" rx="4" ry="2" fill="#e8b34a" transform="rotate(30 150 98)" opacity="0.9" />
            <ellipse cx="160" cy="95" rx="4" ry="2" fill="#e8b34a" transform="rotate(-20 160 95)" opacity="0.9" />
            <circle cx="145" cy="105" r="2.5" fill="#f4e9d8" opacity="0.9" />
            <circle cx="155" cy="102" r="2.5" fill="#f4e9d8" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'mnaghten':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bench">
            <rect x="20" y="60" width="120" height="60" fill="rgba(0,0,0,0.6)" />
            <rect x="15" y="55" width="130" height="10" fill="rgba(0,0,0,0.8)" />
            <rect x="30" y="65" width="100" height="10" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="witness-stand">
            <rect x="150" y="70" width="40" height="50" fill="rgba(0,0,0,0.5)" />
            <rect x="145" y="65" width="50" height="8" fill="rgba(0,0,0,0.7)" />
          </g>
          <g data-name="hanging-lamp">
            <line x1="80" y1="0" x2="80" y2="25" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <path d="M 65 25 L 95 25 L 105 40 L 55 40 Z" fill="rgba(0,0,0,0.7)" />
            <ellipse cx="80" cy="40" rx="25" ry="5" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <polygon points="55,40 105,40 130,80 30,80" fill="rgba(232, 179, 74, 0.1)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'hill-v-baxter':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="windscreen-frame">
            <path d="M 10 10 L 190 10 L 170 110 L 30 110 Z" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="15" strokeLinejoin="round" />
            <line x1="20" y1="20" x2="180" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="drivers-seat">
            <path d="M 120 110 L 120 70 C 120 50 160 50 160 70 L 160 110 Z" fill="rgba(0,0,0,0.4)" />
            <path d="M 130 70 C 130 60 150 60 150 70" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="4" />
          </g>
          <g data-name="steering-wheel">
            <ellipse cx="140" cy="95" rx="25" ry="8" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="5" />
            <line x1="140" y1="95" x2="140" y2="110" stroke="rgba(0,0,0,0.7)" strokeWidth="5" />
          </g>
          <g data-name="bees">
            <circle cx="80" cy="50" r="1.5" fill="#f4e9d8" opacity="0.8" />
            <circle cx="85" cy="45" r="1" fill="#f4e9d8" opacity="0.6" />
            <circle cx="75" cy="55" r="2" fill="#f4e9d8" opacity="0.9" />
            <circle cx="90" cy="52" r="1.5" fill="#f4e9d8" opacity="0.7" />
            <circle cx="82" cy="58" r="1" fill="#f4e9d8" opacity="0.5" />
            <circle cx="70" cy="48" r="1.5" fill="#e8b34a" opacity="0.8" />
            <circle cx="88" cy="40" r="2" fill="#e8b34a" opacity="0.9" />
            <circle cx="95" cy="48" r="1" fill="#e8b34a" opacity="0.7" />
            <circle cx="78" cy="62" r="1.5" fill="#f4e9d8" opacity="0.8" />
            <circle cx="86" cy="60" r="2" fill="#f4e9d8" opacity="0.9" />
            <circle cx="100" cy="55" r="1" fill="#f4e9d8" opacity="0.6" />
            <circle cx="65" cy="55" r="1.5" fill="#e8b34a" opacity="0.8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-brown':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="heavy-door">
            <rect x="40" y="0" width="120" height="120" fill="rgba(0,0,0,0.4)" />
            <rect x="50" y="10" width="100" height="100" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="4" />
            <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          </g>
          <g data-name="keyhole">
            <circle cx="100" cy="60" r="6" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
            <polygon points="96,62 104,62 106,75 94,75" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
          </g>
          <g data-name="coiled-chain">
            <path d="M 80 110 Q 90 100 100 110 Q 110 115 120 105 Q 110 95 100 105 Q 90 115 80 110 Z" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 85 105 Q 95 95 105 105" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 80 110 Q 90 100 100 110 Q 110 115 120 105 Q 110 95 100 105 Q 90 115 80 110 Z" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.4" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-gullefer':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="track-curve">
            <path d="M 0 80 Q 100 80 200 40 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.2)" />
            <path d="M 0 80 Q 100 80 200 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
            <path d="M 0 90 Q 100 90 200 50" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="4" />
          </g>
          <g data-name="track-posts">
            <line x1="20" y1="80" x2="20" y2="95" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
            <line x1="60" y1="78" x2="60" y2="92" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
            <line x1="100" y1="74" x2="100" y2="88" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
            <line x1="140" y1="67" x2="140" y2="80" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
            <line x1="180" y1="56" x2="180" y2="68" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
          </g>
          <g data-name="leaping-figure">
            <path d="M 90 60 C 90 50 100 45 105 55 C 110 45 120 50 110 65 L 90 60 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 95 65 L 85 85 M 105 60 L 115 80" stroke="rgba(0,0,0,0.8)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 95 50 L 80 55 M 110 55 L 125 50" stroke="rgba(0,0,0,0.8)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="102" cy="45" r="6" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="dogs-distance">
            <path d="M 160 48 Q 165 45 170 48 Q 175 45 180 48" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 170 45 Q 175 42 180 45 Q 185 42 190 45" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-geddes':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="corridor-perspective">
            <polygon points="0,0 80,40 120,40 200,0 200,120 120,80 80,80 0,120" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
            <polygon points="0,120 80,80 120,80 200,120" fill="rgba(0,0,0,0.3)" />
            <polygon points="0,0 80,40 120,40 200,0" fill="rgba(0,0,0,0.5)" />
            <polygon points="0,0 80,40 80,80 0,120" fill="rgba(0,0,0,0.4)" />
            <polygon points="200,0 120,40 120,80 200,120" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="lockers">
            <line x1="20" y1="10" x2="20" y2="110" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="40" y1="20" x2="40" y2="100" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="60" y1="30" x2="60" y2="90" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="0" y1="60" x2="80" y2="60" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
          </g>
          <g data-name="cubicle-door">
            <rect x="90" y="45" width="20" height="35" fill="rgba(0,0,0,0.8)" />
            <line x1="90" y1="45" x2="90" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
          <g data-name="rucksack">
            <path d="M 110 75 Q 115 65 120 75 L 120 85 L 105 85 Z" fill="#f4e9d8" opacity="0.85" />
            <path d="M 112 70 Q 115 60 118 70" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" />
            <rect x="108" y="78" width="10" height="5" rx="1" fill="#e8b34a" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );


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

    default:
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="fallback-motif">
            <path d="M 100 20 L 100 100 M 60 50 L 140 50" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M 60 50 L 40 80 L 80 80 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M 140 50 L 120 80 L 160 80 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="100" cy="20" r="4" fill="#e8b34a" opacity="0.9" />
            <circle cx="100" cy="100" r="15" fill="rgba(0,0,0,0.3)" />
            <circle cx="100" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );
  }
};
