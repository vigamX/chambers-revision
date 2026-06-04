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

    case 'r-v-g':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="alley-ground">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.3)" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          <g data-name="wheelie-bin">
            <path d="M 40 90 L 110 95 L 110 50 L 40 45 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 40 45 L 110 50 L 120 40 L 50 35 Z" fill="rgba(0,0,0,0.6)" />
            <path d="M 110 95 L 120 85 L 120 40 L 110 50 Z" fill="rgba(0,0,0,0.5)" />
            <path d="M 110 95 L 140 105 L 150 95 L 120 85 Z" fill="rgba(0,0,0,0.7)" />
            <circle cx="45" cy="90" r="10" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="newspapers">
            <polygon points="100,80 130,75 140,90 110,95" fill="#f4e9d8" opacity="0.6" />
            <polygon points="110,85 145,80 150,95 115,100" fill="#f4e9d8" opacity="0.7" />
            <polygon points="120,95 155,90 160,105 125,110" fill="#f4e9d8" opacity="0.8" />
            <polygon points="115,70 140,65 150,85 125,90" fill="#f4e9d8" opacity="0.7" />
          </g>
          <g data-name="flames-and-sparks">
            <path d="M 130 90 Q 125 70 135 60 Q 145 75 140 90 Z" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
            <path d="M 138 85 Q 135 65 145 55 Q 155 70 148 85 Z" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
            <path d="M 122 88 Q 118 75 125 65 Q 132 75 128 88 Z" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.6" />
            <circle cx="140" cy="45" r="1.5" fill="#f4e9d8" opacity="0.9" />
            <circle cx="148" cy="40" r="1" fill="#f4e9d8" opacity="0.8" />
            <circle cx="132" cy="50" r="1.5" fill="#f4e9d8" opacity="0.7" />
            <circle cx="155" cy="55" r="1" fill="#f4e9d8" opacity="0.6" />
            <circle cx="142" cy="30" r="1" fill="#f4e9d8" opacity="0.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-cheshire':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="light-beam">
            <polygon points="100,20 60,110 140,110" fill="rgba(255,255,255,0.05)" />
            <polygon points="100,20 70,110 130,110" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="surgical-light-dome">
            <path d="M 70 -10 C 70 20 130 20 130 -10 Z" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="100" cy="10" rx="25" ry="8" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
            <ellipse cx="100" cy="10" rx="15" ry="4" fill="#ffffff" filter="url(#soft-glow)" opacity="0.8" />
          </g>
          <g data-name="operating-table">
            <rect x="50" y="90" width="100" height="8" rx="2" fill="rgba(0,0,0,0.6)" />
            <rect x="55" y="98" width="90" height="4" fill="rgba(0,0,0,0.8)" />
            <rect x="90" y="102" width="20" height="18" fill="rgba(0,0,0,0.9)" />
            <ellipse cx="100" cy="90" rx="40" ry="8" fill="#f4e9d8" opacity="0.3" filter="url(#soft-glow)" />
          </g>
          <g data-name="suspended-instruments">
            <line x1="40" y1="0" x2="40" y2="50" stroke="rgba(0,0,0,0.7)" strokeWidth="2" strokeDasharray="2 2" />
            <line x1="160" y1="0" x2="160" y2="60" stroke="rgba(0,0,0,0.7)" strokeWidth="2" strokeDasharray="2 2" />
            <rect x="35" y="50" width="10" height="15" fill="rgba(0,0,0,0.6)" />
            <rect x="155" y="60" width="10" height="20" fill="rgba(0,0,0,0.6)" />
            <circle cx="40" cy="62" r="1.5" fill="#f4e9d8" opacity="0.5" />
            <circle cx="160" cy="75" r="1.5" fill="#f4e9d8" opacity="0.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-kennedy-no-2':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="floorboards">
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="40" y1="80" x2="20" y2="120" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
            <line x1="80" y1="80" x2="70" y2="120" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
            <line x1="120" y1="80" x2="130" y2="120" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
            <line x1="160" y1="80" x2="180" y2="120" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
          </g>
          <g data-name="doorway-light">
            <polygon points="120,0 200,0 200,80 120,80" fill="rgba(0,0,0,0.7)" />
            <polygon points="120,80 160,80 200,120 100,120" fill="#e8b34a" opacity="0.15" filter="url(#soft-glow)" />
            <polygon points="120,80 140,80 180,120 110,120" fill="#e8b34a" opacity="0.1" />
            <line x1="120" y1="0" x2="120" y2="80" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
          </g>
          <g data-name="door-edge">
            <rect x="120" y="0" width="10" height="80" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="syringe" transform="translate(130, 95) rotate(-20)">
            <rect x="-15" y="-3" width="30" height="6" rx="1" fill="#f4e9d8" opacity="0.6" />
            <rect x="-18" y="-4" width="3" height="8" rx="1" fill="rgba(0,0,0,0.6)" />
            <rect x="15" y="-1" width="10" height="2" fill="rgba(0,0,0,0.7)" />
            <line x1="25" y1="0" x2="35" y2="0" stroke="#f4e9d8" strokeWidth="1" opacity="0.8" filter="url(#soft-glow)" />
            <circle cx="35" cy="0" r="1.5" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'fagan-v-mpc':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tarmac">
            <rect x="0" y="100" width="200" height="20" fill="rgba(0,0,0,0.4)" />
            <circle cx="40" cy="110" r="1" fill="rgba(255,255,255,0.1)" />
            <circle cx="60" cy="115" r="1" fill="rgba(255,255,255,0.1)" />
            <circle cx="140" cy="105" r="1.5" fill="rgba(255,255,255,0.1)" />
            <circle cx="160" cy="112" r="1" fill="rgba(255,255,255,0.1)" />
            <circle cx="90" cy="118" r="1.5" fill="rgba(255,255,255,0.1)" />
          </g>
          <g data-name="police-boot">
            <path d="M 20 50 L 50 50 C 60 70 80 80 130 80 C 150 80 150 100 130 100 L 20 100 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 120 80 C 135 80 145 85 145 95 C 145 100 135 100 120 100 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 120 82 C 130 82 138 85 138 90" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" filter="url(#soft-glow)" opacity="0.8" />
            <line x1="20" y1="100" x2="130" y2="100" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
          </g>
          <g data-name="car-tyre">
            <path d="M 80 -20 C 140 -20 180 30 180 90 C 180 95 170 100 160 100 C 120 100 100 95 100 90 C 100 40 80 10 50 10 Z" fill="rgba(0,0,0,0.7)" />
            <path d="M 90 0 C 130 10 160 40 160 85" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="6" strokeDasharray="8 4" />
            <path d="M 70 -10 C 110 0 140 30 140 85" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="6" strokeDasharray="8 4" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'dpp-v-santa-bermudez':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="trouser-pocket">
            <path d="M 120 120 L 120 40 C 140 40 180 60 200 60 L 200 120 Z" fill="rgba(0,0,0,0.6)" />
            <path d="M 130 45 C 140 55 145 70 145 90" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <path d="M 135 45 C 145 55 150 70 150 90" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
          </g>
          <g data-name="withdrawing-gloved-hand">
            <path d="M 60 20 C 80 10 100 20 110 40 C 120 60 115 70 100 75 C 80 80 60 70 50 50 L 20 40 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 100 40 C 110 45 115 55 105 65" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 90 35 C 100 40 105 50 95 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 80 30 C 90 35 95 45 85 55" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="needle-tip">
            <line x1="140" y1="65" x2="125" y2="55" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <line x1="125" y1="55" x2="115" y2="48" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.9" />
            <circle cx="115" cy="48" r="2.5" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-gibbins-proctor':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="wooden-table">
            <rect x="0" y="0" width="200" height="120" fill="rgba(0,0,0,0.3)" />
            <line x1="0" y1="20" x2="200" y2="30" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
            <line x1="0" y1="60" x2="200" y2="70" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
            <line x1="0" y1="100" x2="200" y2="110" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
          </g>
          <g data-name="left-plate-full">
            <ellipse cx="60" cy="50" rx="35" ry="15" fill="rgba(0,0,0,0.5)" />
            <ellipse cx="60" cy="48" rx="30" ry="12" fill="rgba(0,0,0,0.6)" />
            <ellipse cx="60" cy="48" rx="20" ry="8" fill="rgba(0,0,0,0.7)" />
            <path d="M 45 45 C 55 40 70 40 75 48 C 80 55 60 55 45 45 Z" fill="#f4e9d8" opacity="0.8" />
            <ellipse cx="50" cy="50" rx="10" ry="4" fill="#f4e9d8" opacity="0.7" transform="rotate(-20 50 50)" />
            <path d="M 65 42 C 75 42 80 48 70 52 C 60 55 55 48 65 42 Z" fill="#f4e9d8" opacity="0.9" />
          </g>
          <g data-name="right-plate-empty">
            <ellipse cx="140" cy="80" rx="25" ry="10" fill="rgba(0,0,0,0.6)" />
            <ellipse cx="140" cy="78" rx="20" ry="8" fill="rgba(0,0,0,0.7)" />
            <ellipse cx="140" cy="78" rx="12" ry="4" fill="rgba(0,0,0,0.8)" />
            <path d="M 125 80 C 135 75 145 75 155 80" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-matthews-alleyne':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="water-far-below">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.2)" />
            <ellipse cx="130" cy="100" rx="20" ry="4" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
            <ellipse cx="130" cy="100" rx="30" ry="6" fill="none" stroke="#f4e9d8" strokeWidth="0.8" opacity="0.2" />
            <ellipse cx="130" cy="100" rx="40" ry="8" fill="none" stroke="#f4e9d8" strokeWidth="0.5" opacity="0.1" />
          </g>
          <g data-name="bridge-railing">
            <line x1="0" y1="60" x2="200" y2="20" stroke="rgba(0,0,0,0.8)" strokeWidth="6" />
            <line x1="0" y1="70" x2="200" y2="30" stroke="rgba(0,0,0,0.6)" strokeWidth="4" />
            <line x1="0" y1="100" x2="200" y2="40" stroke="rgba(0,0,0,0.8)" strokeWidth="10" />
            <line x1="30" y1="60" x2="30" y2="100" stroke="rgba(0,0,0,0.7)" strokeWidth="4" />
            <line x1="80" y1="50" x2="80" y2="80" stroke="rgba(0,0,0,0.7)" strokeWidth="3" />
            <line x1="130" y1="40" x2="130" y2="65" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
            <line x1="180" y1="30" x2="180" y2="50" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
          </g>
          <g data-name="figures-leaning">
            <path d="M 40 40 C 40 20 60 20 60 40 C 70 50 60 65 50 65 C 40 65 30 50 40 40 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="55" cy="25" r="8" fill="rgba(0,0,0,0.9)" />
            <path d="M 90 35 C 90 15 110 15 110 35 C 120 45 110 58 100 58 C 90 58 80 45 90 35 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="105" cy="20" r="7" fill="rgba(0,0,0,0.9)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-latimer':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="motion-lines">
            <path d="M 30 100 Q 80 80 120 30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 40 110 Q 90 90 130 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 50 120 Q 100 100 140 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeLinecap="round" />
          </g>
          <g data-name="belt-strap">
            <path d="M 20 120 Q 80 90 130 35" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 20 120 Q 80 90 130 35" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 25 120 Q 85 90 128 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
          <g data-name="belt-buckle" transform="translate(130, 35) rotate(-45)">
            <rect x="-5" y="-10" width="10" height="20" fill="none" stroke="#f4e9d8" strokeWidth="3" opacity="0.9" filter="url(#soft-glow)" />
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#f4e9d8" strokeWidth="2" opacity="0.9" />
            <circle cx="5" cy="-10" r="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <polygon points="2,-13 8,-13 5,-7" fill="#ffffff" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-moloney':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="kitchen-table">
            <rect x="0" y="70" width="200" height="50" fill="rgba(0,0,0,0.4)" />
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="broken-shotgun">
            <path d="M 20 60 L 80 65 L 85 75 L 25 70 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 80 65 L 180 50 L 180 55 L 85 75 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 80 65 L 180 50" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
            <circle cx="82" cy="70" r="3" fill="rgba(255,255,255,0.1)" />
          </g>
          <g data-name="whisky-tumbler-upright">
            <path d="M 60 80 L 70 80 L 68 100 L 62 100 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <path d="M 61 90 L 69 90 L 68 100 L 62 100 Z" fill="#e8b34a" opacity="0.5" />
          </g>
          <g data-name="whisky-tumbler-spilled">
            <path d="M 120 100 L 140 105 L 135 115 L 115 110 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <ellipse cx="145" cy="110" rx="15" ry="5" fill="#f4e9d8" opacity="0.6" filter="url(#soft-glow)" />
            <path d="M 130 108 C 135 110 140 112 145 110" fill="none" stroke="#e8b34a" strokeWidth="2" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-evans':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bedroom-door">
            <rect x="20" y="0" width="80" height="90" fill="rgba(0,0,0,0.6)" />
            <rect x="30" y="10" width="60" height="70" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <circle cx="85" cy="50" r="3" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="floor">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="light-under-door">
            <polygon points="20,90 100,90 110,105 10,105" fill="#e8b34a" opacity="0.3" filter="url(#soft-glow)" />
            <line x1="20" y1="90" x2="100" y2="90" stroke="#f4e9d8" strokeWidth="2" filter="url(#soft-glow)" opacity="0.8" />
          </g>
          <g data-name="telephone-on-floor">
            <path d="M 130 100 L 160 100 L 165 115 L 125 115 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 135 95 C 135 90 155 90 155 95" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="145" cy="108" r="4" fill="rgba(255,255,255,0.05)" />
            <path d="M 125 115 Q 110 115 115 105 Q 120 95 110 95" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-jewell':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="car-interior">
            <polygon points="0,0 80,0 60,60 0,60" fill="rgba(255,255,255,0.05)" />
            <line x1="60" y1="60" x2="200" y2="60" stroke="rgba(0,0,0,0.5)" strokeWidth="4" />
            <path d="M 140 60 L 160 20 L 200 20 L 200 120 L 140 120 Z" fill="rgba(0,0,0,0.3)" />
          </g>
          <g data-name="passenger-seat">
            <rect x="20" y="60" width="120" height="60" rx="10" fill="rgba(0,0,0,0.4)" />
            <path d="M 30 70 L 130 70 L 140 120 L 20 120 Z" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="duffel-bag">
            <path d="M 40 80 C 40 60 120 60 120 80 L 130 110 L 30 110 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 50 70 Q 80 80 110 70" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <path d="M 50 70 Q 80 90 110 70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="3 2" />
          </g>
          <g data-name="weapons-inside">
            <path d="M 60 75 L 90 75 L 95 85 L 55 85 Z" fill="rgba(0,0,0,0.95)" />
            <path d="M 70 70 L 100 80 L 95 85 L 65 75 Z" fill="rgba(0,0,0,0.95)" />
            <path d="M 60 75 L 90 75" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
            <path d="M 70 70 L 100 80" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
          </g>
          <g data-name="bag-strap">
            <path d="M 125 90 Q 140 100 130 115" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 125 90 Q 140 100 130 115" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'dpp-v-newbury-jones':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="railway-tracks-far-below">
            <polygon points="80,120 120,120 105,0 95,0" fill="rgba(255,255,255,0.05)" />
            <line x1="95" y1="0" x2="80" y2="120" stroke="rgba(0,0,0,0.6)" strokeWidth="3" />
            <line x1="105" y1="0" x2="120" y2="120" stroke="rgba(0,0,0,0.6)" strokeWidth="3" />
            <line x1="93" y1="20" x2="107" y2="20" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <line x1="90" y1="40" x2="110" y2="40" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" />
            <line x1="87" y1="60" x2="113" y2="60" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="83" y1="80" x2="117" y2="80" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" />
            <line x1="79" y1="100" x2="121" y2="100" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
          </g>
          <g data-name="motion-lines">
            <line x1="80" y1="10" x2="80" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="100" y1="20" x2="100" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeDasharray="6 6" />
            <line x1="120" y1="15" x2="120" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
          </g>
          <g data-name="falling-paving-stone">
            <polygon points="70,60 120,55 130,75 80,85" fill="rgba(0,0,0,0.9)" />
            <polygon points="70,60 120,55 125,50 75,55" fill="rgba(0,0,0,0.7)" />
            <polygon points="120,55 130,75 135,70 125,50" fill="rgba(0,0,0,0.6)" />
            <polygon points="70,60 120,55 125,50 75,55" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.4" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-lamb':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="background-figures" filter="url(#soft-glow)" opacity="0.6">
            <path d="M 40 80 C 40 40 70 40 70 80 Z" fill="rgba(0,0,0,0.7)" />
            <circle cx="55" cy="45" r="12" fill="rgba(0,0,0,0.7)" />
            <path d="M 50 48 Q 55 52 60 48" fill="none" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 140 90 C 140 50 170 50 170 90 Z" fill="rgba(0,0,0,0.7)" />
            <circle cx="155" cy="55" r="14" fill="rgba(0,0,0,0.7)" />
            <path d="M 148 58 Q 155 63 162 58" fill="none" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g data-name="revolver-hand" transform="translate(0, 10)">
            <path d="M 130 110 L 110 70 L 80 70 L 80 65 L 120 65 L 130 80 Z" fill="rgba(0,0,0,0.9)" />
            <rect x="95" y="60" width="15" height="20" rx="2" fill="rgba(0,0,0,0.95)" />
            <line x1="95" y1="65" x2="110" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="95" y1="70" x2="110" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="95" y1="75" x2="110" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 80 65 L 60 65 L 60 68 L 80 68 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 130 110 C 140 90 150 80 120 70" fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth="15" strokeLinecap="round" />
            <path d="M 105 85 C 95 85 90 75 100 70" fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth="6" strokeLinecap="round" />
            <path d="M 120 65 L 60 65" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-dawson':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="window-background">
            <rect x="20" y="10" width="160" height="60" fill="rgba(255,255,255,0.05)" />
            <rect x="90" y="20" width="20" height="50" rx="2" fill="rgba(0,0,0,0.5)" />
            <rect x="95" y="30" width="10" height="15" fill="rgba(255,255,255,0.1)" />
            <path d="M 110 35 Q 120 35 115 50" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
          </g>
          <g data-name="counter">
            <rect x="0" y="70" width="200" height="10" fill="rgba(0,0,0,0.7)" />
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="fallen-cash-drawer" transform="translate(100, 95) rotate(15)">
            <rect x="-30" y="-15" width="60" height="30" fill="rgba(0,0,0,0.8)" />
            <rect x="-25" y="-10" width="10" height="20" fill="rgba(0,0,0,0.9)" />
            <rect x="-10" y="-10" width="10" height="20" fill="rgba(0,0,0,0.9)" />
            <rect x="5" y="-10" width="10" height="20" fill="rgba(0,0,0,0.9)" />
            <rect x="20" y="-10" width="5" height="20" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="scattered-coins">
            <ellipse cx="60" cy="100" rx="4" ry="2" fill="#e8b34a" opacity="0.8" filter="url(#soft-glow)" />
            <ellipse cx="70" cy="110" rx="3" ry="1.5" fill="#f4e9d8" opacity="0.7" />
            <ellipse cx="140" cy="90" rx="4" ry="2" fill="#e8b34a" opacity="0.9" />
            <ellipse cx="150" cy="105" rx="3" ry="1.5" fill="#f4e9d8" opacity="0.8" />
            <ellipse cx="85" cy="105" rx="3" ry="1.5" fill="#e8b34a" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-dietschmann':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tabletop">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.3)" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="whisky-bottle">
            <path d="M 130 90 L 130 40 Q 130 30 140 20 L 140 10 L 150 10 L 150 20 Q 160 30 160 40 L 160 90 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
            <path d="M 131 90 L 131 60 L 159 60 L 159 90 Z" fill="#e8b34a" opacity="0.4" />
            <rect x="135" y="45" width="20" height="25" fill="#f4e9d8" opacity="0.7" />
            <line x1="135" y1="50" x2="155" y2="50" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
          </g>
          <g data-name="tumbler-and-flower">
            <path d="M 90 90 L 85 60 L 105 60 L 100 90 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
            <path d="M 95 65 Q 100 45 80 35" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <path d="M 80 35 C 75 30 70 35 75 40 C 80 45 85 40 80 35 Z" fill="#f4e9d8" opacity="0.6" filter="url(#soft-glow)" />
            <circle cx="78" cy="38" r="1.5" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="handkerchief-and-frame">
            <polygon points="40,95 70,90 80,100 50,105" fill="#f4e9d8" opacity="0.8" />
            <polygon points="45,96 75,91 65,102 35,106" fill="#f4e9d8" opacity="0.5" />
            <polygon points="50,90 80,85 90,95 60,100" fill="rgba(0,0,0,0.6)" />
            <polygon points="50,90 80,85 90,95 60,100" fill="none" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.5" strokeLinejoin="round" />
            <line x1="55" y1="91" x2="82" y2="87" stroke="rgba(0,0,0,0.8)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'tuberville-v-savage':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="period-clothing">
            <path d="M 20 0 L 180 0 L 160 120 L 40 120 Z" fill="rgba(0,0,0,0.4)" />
            <rect x="30" y="40" width="140" height="15" fill="rgba(0,0,0,0.8)" />
            <rect x="90" y="38" width="20" height="19" fill="rgba(0,0,0,0.9)" />
            <rect x="92" y="40" width="16" height="15" fill="none" stroke="#e8b34a" strokeWidth="2" opacity="0.7" />
          </g>
          <g data-name="sheathed-sword" transform="translate(60, 50) rotate(45)">
            <rect x="-8" y="10" width="16" height="90" rx="4" fill="rgba(0,0,0,0.9)" />
            <rect x="-15" y="5" width="30" height="6" rx="2" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.8" />
            <rect x="-4" y="-20" width="8" height="25" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="0" cy="-22" rx="6" ry="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          <g data-name="resting-hand">
            <path d="M 120 -10 C 110 5 95 10 85 15 C 75 20 65 25 60 20 C 50 15 55 5 65 0 C 80 -5 100 -10 120 -10 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 65 20 C 60 25 50 30 45 25 C 40 20 45 10 50 5 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 85 15 Q 75 25 60 20" fill="none" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.5" />
            <path d="M 100 10 Q 90 20 75 15" fill="none" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.5" />
            <path d="M 115 0 Q 105 10 90 5" fill="none" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.5" />
            <path d="M 110 -10 C 120 0 130 5 125 15 C 115 25 105 20 95 15" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-constanza':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="doormat">
            <polygon points="20,110 160,80 200,90 40,120" fill="rgba(0,0,0,0.4)" />
            <line x1="30" y1="110" x2="160" y2="85" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <line x1="35" y1="113" x2="165" y2="88" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <line x1="40" y1="116" x2="170" y2="91" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
          </g>
          <g data-name="scattered-envelopes">
            <polygon points="120,85 150,90 145,100 115,95" fill="#f4e9d8" opacity="0.6" />
            <polygon points="100,95 130,90 135,100 105,105" fill="#f4e9d8" opacity="0.7" />
            <polygon points="135,95 165,100 160,110 130,105" fill="#f4e9d8" opacity="0.5" />
            <line x1="100" y1="95" x2="125" y2="97" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          </g>
          <g data-name="unfolded-letter">
            <polygon points="60,110 110,95 125,115 75,120" fill="#f4e9d8" opacity="0.9" />
            <path d="M 75 105 L 105 98 M 80 110 L 110 102 M 70 100 L 95 93 M 85 115 L 115 107" stroke="rgba(0,0,0,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2 5 1" />
            <path d="M 78 102 Q 85 100 90 102 T 102 96" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1" strokeLinecap="round" />
            <path d="M 83 112 Q 90 110 95 112 T 107 106" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1" strokeLinecap="round" />
          </g>
          <g data-name="curtain-edge">
            <path d="M 0 0 Q 30 50 10 120 L 0 120 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 5 0 Q 35 50 15 120 L 0 120 Z" fill="rgba(0,0,0,0.6)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-parmenter':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="changing-mat">
            <rect x="40" y="80" width="120" height="30" rx="5" fill="rgba(0,0,0,0.3)" />
            <rect x="42" y="82" width="116" height="26" rx="4" fill="rgba(255,255,255,0.05)" />
            <line x1="45" y1="85" x2="155" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
          <g data-name="folded-blanket">
            <path d="M 120 90 L 150 90 L 145 105 L 115 105 Z" fill="rgba(0,0,0,0.5)" />
            <path d="M 120 95 L 148 95 L 146 100 L 118 100 Z" fill="rgba(255,255,255,0.05)" />
          </g>
          <g data-name="teddy-bear">
            <circle cx="80" cy="85" r="10" fill="rgba(0,0,0,0.7)" />
            <circle cx="73" cy="78" r="4" fill="rgba(0,0,0,0.7)" />
            <circle cx="87" cy="78" r="4" fill="rgba(0,0,0,0.7)" />
            <ellipse cx="80" cy="100" rx="12" ry="10" fill="rgba(0,0,0,0.7)" />
            <circle cx="68" cy="105" r="5" fill="rgba(0,0,0,0.8)" />
            <circle cx="92" cy="105" r="5" fill="rgba(0,0,0,0.8)" />
            <circle cx="68" cy="95" r="4" fill="rgba(0,0,0,0.6)" />
            <circle cx="92" cy="95" r="4" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="nursery-mobile">
            <line x1="160" y1="0" x2="160" y2="30" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
            <path d="M 130 30 Q 160 40 190 30" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
            <line x1="130" y1="30" x2="130" y2="50" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <line x1="190" y1="30" x2="190" y2="45" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <polygon points="130,50 135,55 130,60 125,55" fill="rgba(0,0,0,0.7)" />
            <polygon points="190,45 195,50 190,55 185,50" fill="rgba(0,0,0,0.7)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-mowatt':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="streetlamp-cone">
            <polygon points="100,-20 0,120 200,120" fill="rgba(255,255,255,0.05)" />
            <polygon points="100,0 40,120 160,120" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="motion-lines">
            <path d="M 180 50 Q 150 45 130 55" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 5" />
            <path d="M 170 70 Q 140 65 120 75" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6" />
            <path d="M 190 60 Q 160 55 140 65" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g data-name="swinging-fist">
            <path d="M 140 40 C 130 45 110 50 100 55 C 90 60 80 80 90 90 C 100 100 120 90 130 85 C 140 80 150 70 140 40 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 110 50 C 100 55 90 70 95 80" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 100 55 C 90 60 85 75 90 85" fill="none" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <path d="M 140 40 C 160 40 180 60 180 80 L 140 80 Z" fill="rgba(0,0,0,0.7)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'smith-v-cs-woking':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="window-frame">
            <rect x="50" y="20" width="100" height="80" fill="rgba(255,255,255,0.05)" />
            <rect x="45" y="15" width="110" height="90" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="10" />
            <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
          </g>
          <g data-name="face-in-gap">
            <ellipse cx="100" cy="50" rx="15" ry="25" fill="#f4e9d8" opacity="0.3" filter="url(#soft-glow)" />
            <path d="M 92 45 C 95 43 98 43 100 45" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 108 45 C 105 43 102 43 100 45" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="95" cy="48" r="1.5" fill="rgba(0,0,0,0.9)" />
            <circle cx="105" cy="48" r="1.5" fill="rgba(0,0,0,0.9)" />
            <path d="M 100 48 L 100 58" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="heavy-curtains">
            <path d="M 0 0 L 90 0 C 85 40 90 80 85 120 L 0 120 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 200 0 L 110 0 C 115 40 110 80 115 120 L 200 120 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 80 0 C 75 40 80 80 75 120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M 120 0 C 125 40 120 80 125 120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-quick':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="stainless-tray">
            <rect x="30" y="50" width="140" height="50" rx="10" fill="rgba(0,0,0,0.6)" />
            <rect x="32" y="52" width="136" height="46" rx="8" fill="rgba(255,255,255,0.1)" />
            <path d="M 40 55 L 160 55" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 40 95 L 160 95" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="insulin-vial" transform="translate(60, 65)">
            <rect x="-8" y="-15" width="16" height="25" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <rect x="-6" y="-18" width="12" height="3" fill="rgba(0,0,0,0.8)" />
            <circle cx="0" cy="-18" r="4" fill="#e8b34a" opacity="0.8" />
            <rect x="-6" y="-5" width="12" height="12" fill="#f4e9d8" opacity="0.7" />
          </g>
          <g data-name="syringe-neat" transform="translate(110, 75) rotate(-15)">
            <rect x="-25" y="-3" width="40" height="6" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <rect x="15" y="-1" width="15" height="2" fill="rgba(255,255,255,0.4)" />
            <path d="M 30 0 L 40 0" stroke="#f4e9d8" strokeWidth="1" opacity="0.9" filter="url(#soft-glow)" />
            <rect x="-30" y="-4" width="5" height="8" rx="1" fill="rgba(0,0,0,0.8)" />
            <line x1="-15" y1="-3" x2="-15" y2="3" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <line x1="-5" y1="-3" x2="-5" y2="3" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <line x1="5" y1="-3" x2="5" y2="3" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
          </g>
          <g data-name="single-drop">
            <ellipse cx="140" cy="85" rx="3" ry="1.5" fill="rgba(255,255,255,0.3)" />
            <ellipse cx="139" cy="84" rx="1" ry="0.5" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hennessy':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bedside-table">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.4)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="alarm-clock">
            <circle cx="150" cy="65" r="15" fill="rgba(0,0,0,0.8)" />
            <circle cx="150" cy="65" r="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <path d="M 140 50 C 145 45 155 45 160 50" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="143" cy="50" r="3" fill="#e8b34a" opacity="0.8" />
            <circle cx="157" cy="50" r="3" fill="#e8b34a" opacity="0.8" />
            <line x1="150" y1="65" x2="150" y2="55" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="150" y1="65" x2="158" y2="65" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g data-name="glass-of-water">
            <path d="M 90 55 L 95 80 L 115 80 L 120 55 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <path d="M 92 65 L 118 65 L 115 80 L 95 80 Z" fill="#f4e9d8" opacity="0.15" />
            <ellipse cx="105" cy="65" rx="13" ry="2" fill="rgba(255,255,255,0.2)" />
            <ellipse cx="105" cy="55" rx="15" ry="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </g>
          <g data-name="insulin-pen" transform="translate(60, 85) rotate(10)">
            <rect x="-25" y="-3" width="40" height="6" rx="2" fill="rgba(0,0,0,0.9)" />
            <rect x="-25" y="-3" width="10" height="6" rx="1" fill="#e8b34a" opacity="0.7" />
            <rect x="15" y="-4" width="15" height="8" rx="2" fill="rgba(0,0,0,0.8)" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="-10" y1="-3" x2="-10" y2="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <path d="M -15 0 L 25 0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hardie':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="kitchen-counter">
            <rect x="0" y="70" width="200" height="50" fill="rgba(0,0,0,0.5)" />
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="half-drunk-glass">
            <path d="M 140 50 L 145 85 L 165 85 L 170 50 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <path d="M 142 65 L 168 65 L 165 85 L 145 85 Z" fill="#f4e9d8" opacity="0.2" />
            <ellipse cx="155" cy="65" rx="13" ry="2" fill="rgba(255,255,255,0.3)" />
          </g>
          <g data-name="blister-pack" transform="translate(80, 85) rotate(-20)">
            <rect x="-30" y="-15" width="60" height="30" rx="2" fill="#f4e9d8" opacity="0.8" />
            <rect x="-28" y="-13" width="56" height="26" fill="rgba(0,0,0,0.1)" />
            <circle cx="-15" cy="-5" r="4" fill="rgba(0,0,0,0.4)" stroke="#f4e9d8" strokeWidth="1" />
            <circle cx="0" cy="-5" r="4" fill="rgba(0,0,0,0.5)" />
            <circle cx="15" cy="-5" r="4" fill="rgba(0,0,0,0.4)" stroke="#f4e9d8" strokeWidth="1" />
            <circle cx="-15" cy="8" r="4" fill="#e8b34a" opacity="0.9" />
            <circle cx="0" cy="8" r="4" fill="rgba(0,0,0,0.5)" />
            <circle cx="15" cy="8" r="4" fill="rgba(0,0,0,0.4)" stroke="#f4e9d8" strokeWidth="1" />
          </g>
          <g data-name="loose-pill">
            <ellipse cx="40" cy="95" rx="4" ry="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-lipman':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="vague-figures">
            <path d="M 50 120 C 40 80 70 50 100 60 C 120 70 110 100 130 120 Z" fill="rgba(0,0,0,0.6)" />
            <circle cx="85" cy="45" r="15" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="psychedelic-swirls" fill="none" strokeWidth="3" opacity="0.4" filter="url(#soft-glow)">
            <path d="M 100 60 Q 120 40 140 60 T 100 100 T 60 60 T 100 20" stroke="#f4e9d8" />
            <path d="M 100 60 Q 140 20 170 60 T 100 130 T 30 60 T 100 -10" stroke="#e8b34a" />
            <path d="M 100 60 Q 160 0 200 60 T 100 160 T 0 60 T 100 -40" stroke="#f4e9d8" />
            <path d="M 100 60 Q 180 -20 230 60 T 100 190 T -30 60 T 100 -70" stroke="#e8b34a" />
            <path d="M 100 60 Q 110 50 120 60 T 100 80 T 80 60 T 100 40" stroke="#f4e9d8" />
          </g>
          <g data-name="distorted-stars">
            <circle cx="40" cy="30" r="3" fill="#e8b34a" opacity="0.6" filter="url(#soft-glow)" />
            <circle cx="160" cy="90" r="2" fill="#f4e9d8" opacity="0.8" filter="url(#soft-glow)" />
            <circle cx="150" cy="20" r="4" fill="#e8b34a" opacity="0.5" filter="url(#soft-glow)" />
            <circle cx="30" cy="100" r="2" fill="#f4e9d8" opacity="0.7" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'bratty-v-ag-ni':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="dissolving-silhouette">
            <path d="M 85 30 C 85 20 115 20 115 30 C 115 40 105 45 100 45 C 95 45 85 40 85 30 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 80 50 C 90 45 110 45 120 50 C 130 70 125 120 125 120 L 75 120 C 75 120 70 70 80 50 Z" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="fragmentation-particles">
            <circle cx="120" cy="30" r="1.5" fill="#f4e9d8" opacity="0.8" />
            <circle cx="125" cy="25" r="1" fill="#f4e9d8" opacity="0.6" />
            <circle cx="135" cy="35" r="2" fill="#e8b34a" opacity="0.7" filter="url(#soft-glow)" />
            <circle cx="115" cy="15" r="1.5" fill="#f4e9d8" opacity="0.9" />
            
            <circle cx="125" cy="55" r="2" fill="#f4e9d8" opacity="0.7" />
            <circle cx="130" cy="50" r="1" fill="#f4e9d8" opacity="0.5" />
            <circle cx="145" cy="60" r="1.5" fill="#e8b34a" opacity="0.8" filter="url(#soft-glow)" />
            <circle cx="140" cy="45" r="2" fill="#f4e9d8" opacity="0.6" />
            
            <circle cx="130" cy="80" r="1.5" fill="#f4e9d8" opacity="0.8" />
            <circle cx="135" cy="75" r="2" fill="#e8b34a" opacity="0.7" />
            <circle cx="145" cy="90" r="1" fill="#f4e9d8" opacity="0.5" />
            <circle cx="155" cy="85" r="1.5" fill="#f4e9d8" opacity="0.6" />
            
            <circle cx="75" cy="35" r="1" fill="#f4e9d8" opacity="0.7" />
            <circle cx="70" cy="45" r="1.5" fill="#f4e9d8" opacity="0.5" />
            <circle cx="65" cy="65" r="2" fill="#e8b34a" opacity="0.8" filter="url(#soft-glow)" />
            <circle cx="60" cy="85" r="1.5" fill="#f4e9d8" opacity="0.6" />
            
            <circle cx="85" cy="15" r="1" fill="#f4e9d8" opacity="0.8" />
            <circle cx="95" cy="10" r="1.5" fill="#f4e9d8" opacity="0.7" />
            <circle cx="105" cy="5" r="2" fill="#e8b34a" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'ag-ref-no-6-1980':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="street-light">
            <polygon points="100,0 20,120 180,120" fill="rgba(255,255,255,0.05)" />
            <ellipse cx="100" cy="110" rx="80" ry="10" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="tarmac">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.3)" />
            <line x1="80" y1="105" x2="120" y2="105" stroke="#f4e9d8" strokeWidth="2" strokeDasharray="15 10" opacity="0.5" />
          </g>
          <g data-name="fighter-left">
            <path d="M 60 40 C 70 40 75 55 70 70 L 60 110 L 50 110 L 55 80 L 40 110 L 30 110 L 50 70 C 45 60 50 40 60 40 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="60" cy="30" r="8" fill="rgba(0,0,0,0.9)" />
            <path d="M 65 45 L 85 45 L 85 50 L 65 50 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 65 55 L 75 55 L 75 60 L 65 60 Z" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="fighter-right">
            <path d="M 140 40 C 130 40 125 55 130 70 L 140 110 L 150 110 L 145 80 L 160 110 L 170 110 L 150 70 C 155 60 150 40 140 40 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="140" cy="30" r="8" fill="rgba(0,0,0,0.9)" />
            <path d="M 135 45 L 115 45 L 115 50 L 135 50 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 135 55 L 125 55 L 125 60 L 135 60 Z" fill="rgba(0,0,0,0.9)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-bird':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tiled-floor">
            <polygon points="0,60 100,50 200,60 100,70" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
            <polygon points="0,80 100,60 200,80 100,100" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
            <polygon points="0,100 100,70 200,100 100,130" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
            <line x1="50" y1="55" x2="150" y2="115" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
            <line x1="150" y1="55" x2="50" y2="115" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
          </g>
          <g data-name="shattered-glass">
            <path d="M 90 90 L 110 85 L 115 95 L 95 98 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <polygon points="80,85 85,75 95,80" fill="rgba(255,255,255,0.2)" />
            <polygon points="120,95 130,90 125,100" fill="rgba(255,255,255,0.2)" />
            <polygon points="105,105 115,110 100,115" fill="rgba(255,255,255,0.2)" />
            <polygon points="70,100 75,95 85,105" fill="rgba(255,255,255,0.2)" />
            <line x1="100" y1="90" x2="130" y2="75" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          <g data-name="deflated-balloon">
            <path d="M 160 110 C 150 110 145 105 155 100 C 165 95 175 105 160 110 Z" fill="#e8b34a" opacity="0.7" filter="url(#soft-glow)" />
            <path d="M 155 100 Q 140 90 150 70 Q 160 50 145 30" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
          </g>
          <g data-name="puddle">
            <path d="M 85 95 Q 100 80 115 90 Q 130 100 105 110 Q 80 115 85 95 Z" fill="#f4e9d8" opacity="0.1" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-dudley-stephens':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="sky">
            <rect x="0" y="0" width="200" height="60" fill="rgba(255,255,255,0.02)" />
          </g>
          <g data-name="ocean">
            <rect x="0" y="60" width="200" height="60" fill="rgba(0,0,0,0.6)" />
            <line x1="0" y1="60" x2="200" y2="60" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
            <line x1="20" y1="70" x2="50" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="140" y1="80" x2="180" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="60" y1="90" x2="90" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </g>
          <g data-name="small-lifeboat">
            <path d="M 85 65 Q 100 70 115 65 Q 100 72 85 65 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M 85 65 Q 100 68 115 65 Q 100 65 85 65 Z" fill="rgba(0,0,0,0.8)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-jones-1990':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="vehicle-interior">
            <path d="M 0 0 L 80 0 L 60 50 L 0 50 Z" fill="rgba(255,255,255,0.05)" />
            <rect x="140" y="20" width="60" height="100" fill="rgba(0,0,0,0.6)" />
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.8)" />
            <path d="M 20 90 L 160 90 L 180 120 L 0 120 Z" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="crash-helmet">
            <path d="M 50 90 C 50 50 110 50 110 90 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 60 65 C 60 55 100 55 100 65 L 105 85 L 55 85 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M 60 65 C 60 55 100 55 100 65 L 105 85 L 55 85 Z" fill="none" stroke="#f4e9d8" strokeWidth="1.5" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          <g data-name="sawn-off-barrel">
            <rect x="120" y="85" width="50" height="8" rx="1" fill="rgba(0,0,0,0.95)" transform="rotate(-10 120 85)" />
            <rect x="120" y="85" width="50" height="2" fill="rgba(255,255,255,0.2)" transform="rotate(-10 120 85)" />
            <ellipse cx="120" cy="89" rx="3" ry="5" fill="#f4e9d8" opacity="0.4" transform="rotate(-10 120 85)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-tosti':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="barn-doors">
            <rect x="0" y="0" width="100" height="120" fill="rgba(0,0,0,0.7)" />
            <rect x="100" y="0" width="100" height="120" fill="rgba(0,0,0,0.8)" />
            <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <line x1="40" y1="0" x2="40" y2="120" stroke="rgba(0,0,0,0.9)" strokeWidth="2" />
            <line x1="160" y1="0" x2="160" y2="120" stroke="rgba(0,0,0,0.9)" strokeWidth="2" />
            <rect x="70" y="55" width="60" height="10" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="torch-beam">
            <polygon points="10,80 80,40 120,100" fill="#e8b34a" opacity="0.15" filter="url(#soft-glow)" />
            <polygon points="10,80 90,50 110,90" fill="#f4e9d8" opacity="0.1" />
          </g>
          <g data-name="padlock">
            <rect x="90" y="65" width="20" height="25" rx="3" fill="rgba(0,0,0,0.9)" />
            <path d="M 94 65 L 94 55 C 94 45 106 45 106 55 L 106 65" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" opacity="0.8" filter="url(#soft-glow)" />
            <circle cx="100" cy="75" r="3" fill="rgba(0,0,0,0.6)" />
            <polygon points="98,75 102,75 103,82 97,82" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="hand-and-torch">
            <rect x="-10" y="70" width="30" height="20" rx="2" fill="rgba(0,0,0,0.95)" transform="rotate(-15 0 80)" />
            <path d="M 0 95 C 10 95 20 85 20 75 C 20 65 10 55 0 55 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 15 75 L 22 70 L 22 80 Z" fill="#f4e9d8" opacity="0.9" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'sweet-v-parsley':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="mist-layers">
            <path d="M 0 80 Q 50 70 100 85 T 200 80 L 200 120 L 0 120 Z" fill="rgba(255,255,255,0.05)" filter="url(#soft-glow)" />
            <path d="M 0 90 Q 60 95 120 85 T 200 95 L 200 120 L 0 120 Z" fill="rgba(255,255,255,0.08)" filter="url(#soft-glow)" />
          </g>
          <g data-name="farmhouse">
            <polygon points="120,85 120,60 145,45 170,60 170,85" fill="rgba(0,0,0,0.8)" />
            <polygon points="145,45 170,60 160,60 145,50 130,60 120,60" fill="rgba(0,0,0,0.9)" />
            <rect x="130" y="40" width="8" height="15" fill="rgba(0,0,0,0.9)" />
            <rect x="150" y="65" width="10" height="10" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          <g data-name="chimney-smoke">
            <path d="M 134 40 Q 130 25 145 15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" filter="url(#soft-glow)" />
            <path d="M 135 35 Q 140 20 155 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" strokeLinecap="round" filter="url(#soft-glow)" />
          </g>
          <g data-name="ground-line">
            <path d="M 0 100 Q 100 90 200 100 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.6)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'gammon-v-ag-hk':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="skyline">
            <polygon points="0,120 0,60 20,60 20,40 50,40 50,70 70,70 70,30 110,30 110,80 140,80 140,50 180,50 180,120" fill="rgba(0,0,0,0.4)" />
            <polygon points="10,120 10,70 30,70 30,45 60,45 60,80 90,80 90,40 130,40 130,90 160,90 160,60 190,60 190,120" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="scaffolding">
            <line x1="140" y1="120" x2="140" y2="10" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <line x1="160" y1="120" x2="160" y2="10" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <line x1="180" y1="120" x2="180" y2="10" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <line x1="130" y1="100" x2="190" y2="100" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <line x1="130" y1="70" x2="190" y2="70" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <line x1="130" y1="40" x2="190" y2="40" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <line x1="130" y1="10" x2="190" y2="10" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <line x1="140" y1="100" x2="160" y2="70" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="160" y1="100" x2="140" y2="70" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="160" y1="100" x2="180" y2="70" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="180" y1="100" x2="160" y2="70" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="140" y1="70" x2="160" y2="40" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="160" y1="70" x2="140" y2="40" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="160" y1="70" x2="180" y2="40" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="180" y1="70" x2="160" y2="40" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="140" y1="40" x2="160" y2="10" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="160" y1="40" x2="140" y2="10" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="160" y1="40" x2="180" y2="10" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
            <line x1="180" y1="40" x2="160" y2="10" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'alphacell-v-woodward':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="river-and-bank">
            <rect x="0" y="80" width="200" height="40" fill="rgba(255,255,255,0.05)" />
            <path d="M 0 80 Q 50 75 100 80 T 200 80 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.4)" />
            <path d="M 0 90 Q 50 85 100 90 T 200 90 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.6)" />
          </g>
          <g data-name="reeds">
            <path d="M 20 90 Q 15 70 25 55 M 25 90 Q 35 65 30 50 M 35 90 Q 40 75 45 60" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 180 90 Q 175 70 185 55 M 185 90 Q 195 65 190 50 M 170 90 Q 165 75 160 60" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="factory-chimney">
            <rect x="150" y="0" width="20" height="50" fill="rgba(0,0,0,0.5)" />
            <polygon points="145,0 175,0 170,10 150,10" fill="rgba(0,0,0,0.6)" />
            <path d="M 160 0 Q 170 -10 180 -5 T 200 -10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" filter="url(#soft-glow)" />
          </g>
          <g data-name="outflow-pipe">
            <path d="M -10 40 L 60 40 L 60 60 L -10 60 Z" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="60" cy="50" rx="8" ry="10" fill="rgba(0,0,0,0.9)" />
            <path d="M 60 42 C 60 42 65 42 65 50 C 65 58 60 58 60 58 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </g>
          <g data-name="pollution-stream">
            <path d="M 55 58 Q 65 80 80 90" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="6" strokeLinecap="round" />
            <path d="M 60 55 Q 70 85 90 95" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="8" strokeLinecap="round" />
            <ellipse cx="85" cy="95" rx="20" ry="5" fill="rgba(0,0,0,0.7)" filter="url(#soft-glow)" />
            <ellipse cx="90" cy="98" rx="30" ry="6" fill="rgba(0,0,0,0.6)" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'callow-v-tillstone':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="shop-interior">
            <rect x="0" y="0" width="200" height="120" fill="rgba(255,255,255,0.02)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,0,0,0.2)" strokeWidth="4" />
            <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(0,0,0,0.2)" strokeWidth="8" />
          </g>
          <g data-name="hanging-rail">
            <rect x="0" y="20" width="200" height="8" fill="rgba(0,0,0,0.8)" />
            <line x1="0" y1="24" x2="200" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </g>
          <g data-name="s-hook">
            <path d="M 100 24 C 110 24 115 15 105 10 C 95 5 85 15 90 30 C 95 45 110 50 115 65 C 120 80 100 90 90 80 C 85 75 85 70 90 65" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" filter="url(#soft-glow)" opacity="0.8" />
            <path d="M 100 24 C 110 24 115 15 105 10 C 95 5 85 15 90 30 C 95 45 110 50 115 65 C 120 80 100 90 90 80 C 85 75 85 70 90 65" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="pin-board">
            <rect x="30" y="60" width="40" height="50" fill="rgba(0,0,0,0.5)" />
            <rect x="32" y="62" width="36" height="46" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="certificate">
            <rect x="35" y="70" width="20" height="25" fill="#f4e9d8" opacity="0.9" />
            <line x1="40" y1="75" x2="50" y2="75" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="40" y1="80" x2="50" y2="80" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <line x1="40" y1="85" x2="45" y2="85" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <circle cx="50" cy="85" r="3" fill="#e8b34a" opacity="0.9" filter="url(#soft-glow)" />
            <circle cx="45" cy="65" r="1.5" fill="rgba(0,0,0,0.8)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'cundy-v-le-cocq':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bar-counter">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.5)" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <line x1="0" y1="95" x2="200" y2="95" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
          </g>
          <g data-name="pint-glass">
            <path d="M 125 40 L 130 90 L 150 90 L 155 40 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <path d="M 126 50 L 129 88 L 151 88 L 154 50 Z" fill="#e8b34a" opacity="0.5" filter="url(#soft-glow)" />
            <path d="M 155 50 C 165 50 165 80 152 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
          </g>
          <g data-name="foam">
            <path d="M 120 40 Q 125 30 135 35 Q 140 25 150 35 Q 160 35 155 45 Q 140 50 120 45 Z" fill="#f4e9d8" opacity="0.9" filter="url(#soft-glow)" />
            <ellipse cx="130" cy="35" rx="5" ry="3" fill="#ffffff" opacity="0.8" />
            <ellipse cx="145" cy="38" rx="4" ry="2" fill="#ffffff" opacity="0.6" />
          </g>
          <g data-name="reaching-hand">
            <path d="M -10 60 C 20 55 40 60 60 65 C 75 70 85 75 105 75 C 115 75 110 85 100 85 C 80 85 50 80 20 80 L -10 80 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 105 75 C 115 75 120 80 115 85 C 110 90 100 85 100 85" fill="rgba(0,0,0,0.9)" />
            <path d="M 95 72 C 105 70 115 75 110 82" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 90 68 C 100 65 110 70 105 78" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 60 65 C 80 50 90 50 100 55" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="6" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'harrow-v-shah':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="shop-counter">
            <rect x="0" y="70" width="200" height="50" fill="rgba(0,0,0,0.3)" />
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          </g>
          <g data-name="till-background">
            <rect x="130" y="20" width="50" height="50" rx="4" fill="rgba(0,0,0,0.6)" />
            <rect x="135" y="30" width="40" height="15" fill="rgba(0,0,0,0.8)" />
            <line x1="140" y1="37" x2="170" y2="37" stroke="#e8b34a" strokeWidth="2" opacity="0.3" filter="url(#soft-glow)" />
            <rect x="125" y="65" width="60" height="5" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="scratch-ticket" transform="translate(60, 90) rotate(-15)">
            <rect x="-25" y="-15" width="50" height="30" rx="2" fill="#f4e9d8" opacity="0.85" />
            <rect x="-20" y="-10" width="40" height="20" fill="rgba(0,0,0,0.1)" />
            <circle cx="-10" cy="0" r="6" fill="#e8b34a" opacity="0.8" />
            <circle cx="10" cy="0" r="6" fill="#e8b34a" opacity="0.8" />
            <path d="M -15 -5 L -5 5 M -5 -5 L -15 5" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
            <path d="M 5 -5 L 15 5 M 15 -5 L 5 5" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
          </g>
          <g data-name="id-wallet" transform="translate(120, 100) rotate(20)">
            <rect x="-15" y="-10" width="30" height="20" rx="3" fill="rgba(0,0,0,0.8)" />
            <rect x="-13" y="-8" width="26" height="16" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="-15" y1="0" x2="-20" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'pharm-soc-v-storkwain':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="pharmacy-bottles" filter="url(#soft-glow)" opacity="0.4">
            <rect x="30" y="30" width="20" height="30" rx="4" fill="rgba(0,0,0,0.7)" />
            <rect x="35" y="20" width="10" height="10" rx="2" fill="rgba(0,0,0,0.8)" />
            <rect x="60" y="25" width="25" height="35" rx="5" fill="rgba(0,0,0,0.6)" />
            <rect x="65" y="15" width="15" height="10" rx="2" fill="rgba(0,0,0,0.8)" />
            <rect x="95" y="35" width="15" height="25" rx="3" fill="rgba(0,0,0,0.7)" />
            <rect x="97" y="25" width="11" height="10" rx="2" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="counter">
            <rect x="0" y="60" width="200" height="60" fill="rgba(0,0,0,0.5)" />
            <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          </g>
          <g data-name="prescription-pad" transform="translate(80, 85) rotate(-10)">
            <rect x="-30" y="-20" width="60" height="40" fill="#f4e9d8" opacity="0.9" />
            <rect x="-28" y="-18" width="56" height="36" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            <line x1="-20" y1="-10" x2="10" y2="-10" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
            <line x1="-20" y1="-2" x2="20" y2="-2" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="-20" y1="6" x2="20" y2="6" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="-20" y1="14" x2="0" y2="14" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <path d="M 10 10 Q 15 5 20 15 T 25 10" fill="none" stroke="#e8b34a" strokeWidth="1" opacity="0.8" />
          </g>
          <g data-name="rubber-stamp" transform="translate(140, 95) rotate(15)">
            <rect x="-8" y="-15" width="16" height="15" fill="rgba(0,0,0,0.9)" />
            <path d="M -4 -15 L -4 -25 C -4 -30 4 -30 4 -25 L 4 -15 Z" fill="rgba(0,0,0,0.8)" />
            <rect x="-10" y="0" width="20" height="5" rx="1" fill="rgba(0,0,0,0.95)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hasan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="doorway-frame">
            <rect x="0" y="0" width="200" height="120" fill="rgba(0,0,0,0.95)" />
            <polygon points="50,10 150,10 130,120 70,120" fill="rgba(255,255,255,0.05)" />
            <line x1="50" y1="10" x2="70" y2="120" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <line x1="150" y1="10" x2="130" y2="120" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <line x1="50" y1="10" x2="150" y2="10" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
          </g>
          <g data-name="menacing-figure">
            <path d="M 85 25 C 85 15 115 15 115 25 C 115 40 85 40 85 25 Z" fill="rgba(0,0,0,0.95)" />
            <path d="M 70 50 C 80 45 120 45 130 50 L 140 90 L 120 90 L 120 120 L 80 120 L 80 90 L 60 90 Z" fill="rgba(0,0,0,0.95)" />
            <path d="M 130 50 L 145 80" stroke="rgba(0,0,0,0.95)" strokeWidth="15" strokeLinecap="round" />
            <path d="M 70 50 L 55 80" stroke="rgba(0,0,0,0.95)" strokeWidth="15" strokeLinecap="round" />
          </g>
          <g data-name="thin-blade">
            <path d="M 50 85 L 60 115 L 55 115 Z" fill="#f4e9d8" opacity="0.6" filter="url(#soft-glow)" />
            <path d="M 50 85 L 60 115 L 55 115 Z" fill="rgba(255,255,255,0.8)" opacity="0.9" />
            <circle cx="52" cy="95" r="2" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-graham':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="kitchen-floor-and-wall">
            <rect x="0" y="0" width="200" height="70" fill="rgba(0,0,0,0.7)" />
            <rect x="0" y="70" width="200" height="50" fill="rgba(0,0,0,0.5)" />
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
          </g>
          <g data-name="floor-tiles">
            <line x1="40" y1="70" x2="0" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="80" y1="70" x2="50" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="120" y1="70" x2="100" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="160" y1="70" x2="150" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="200" y1="70" x2="200" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="0" y1="110" x2="200" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          </g>
          <g data-name="shadows-on-wall">
            <path d="M 60 70 C 60 40 50 30 40 20 C 30 30 20 40 20 70 Z" fill="rgba(0,0,0,0.9)" filter="url(#soft-glow)" />
            <path d="M 140 70 C 140 20 120 0 100 0 C 80 0 80 30 90 70 Z" fill="rgba(0,0,0,0.9)" filter="url(#soft-glow)" />
            <path d="M 120 30 C 100 30 80 50 70 70" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="20" strokeLinecap="round" filter="url(#soft-glow)" />
          </g>
          <g data-name="taut-cord">
            <line x1="0" y1="80" x2="200" y2="120" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <line x1="0" y1="80" x2="200" y2="120" stroke="#f4e9d8" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-howe':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="threshold-and-floor">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.3)" />
            <rect x="0" y="70" width="200" height="10" fill="rgba(0,0,0,0.5)" />
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
          </g>
          <g data-name="sharp-shadow">
            <polygon points="120,70 180,70 80,120 40,120" fill="rgba(0,0,0,0.8)" />
            <polygon points="130,70 170,70 90,120 70,120" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="coiled-chains">
            <path d="M 60 90 Q 70 80 80 90 T 100 90 T 120 95 T 140 90" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 55 95 Q 75 85 95 95 T 135 100 T 150 95" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 65 105 Q 85 95 105 105 T 145 105" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 60 90 Q 70 80 80 90 T 100 90 T 120 95 T 140 90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 55 95 Q 75 85 95 95 T 135 100 T 150 95" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 65 105 Q 85 95 105 105 T 145 105" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="3 3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hudson-taylor':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="overhead-light">
            <polygon points="100,0 40,100 160,100" fill="rgba(255,255,255,0.05)" />
            <polygon points="100,0 60,100 140,100" fill="#e8b34a" opacity="0.05" />
            <ellipse cx="100" cy="100" rx="60" ry="15" fill="rgba(255,255,255,0.05)" />
          </g>
          <g data-name="witness-stand">
            <rect x="50" y="80" width="100" height="40" fill="rgba(0,0,0,0.6)" />
            <rect x="45" y="70" width="110" height="10" fill="rgba(0,0,0,0.8)" />
            <line x1="45" y1="70" x2="155" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <rect x="60" y="80" width="10" height="40" fill="rgba(0,0,0,0.5)" />
            <rect x="130" y="80" width="10" height="40" fill="rgba(0,0,0,0.5)" />
            <rect x="70" y="40" width="10" height="30" fill="rgba(0,0,0,0.7)" />
            <rect x="120" y="40" width="10" height="30" fill="rgba(0,0,0,0.7)" />
            <rect x="65" y="30" width="70" height="10" fill="rgba(0,0,0,0.9)" />
            <line x1="65" y1="30" x2="135" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </g>
          <g data-name="folded-oath-card" transform="translate(100, 25)">
            <polygon points="-10,5 0,0 15,5 0,10" fill="#f4e9d8" opacity="0.9" />
            <polygon points="-10,5 0,0 0,5 -10,10" fill="rgba(0,0,0,0.2)" />
            <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-bowen':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="terraced-house">
            <rect x="80" y="10" width="120" height="110" fill="rgba(0,0,0,0.7)" />
            <polygon points="80,10 140,-10 200,10" fill="rgba(0,0,0,0.8)" />
            <rect x="90" y="80" width="30" height="40" fill="rgba(0,0,0,0.9)" />
            <rect x="150" y="30" width="30" height="40" fill="rgba(0,0,0,0.9)" />
            <rect x="90" y="30" width="30" height="40" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.8" />
            <line x1="105" y1="30" x2="105" y2="70" stroke="rgba(0,0,0,0.8)" strokeWidth="3" />
            <line x1="90" y1="50" x2="120" y2="50" stroke="rgba(0,0,0,0.8)" strokeWidth="3" />
          </g>
          <g data-name="delivery-cart">
            <rect x="20" y="100" width="50" height="5" fill="rgba(0,0,0,0.9)" />
            <circle cx="30" cy="110" r="5" fill="rgba(0,0,0,0.9)" />
            <circle cx="60" cy="110" r="5" fill="rgba(0,0,0,0.9)" />
            <line x1="70" y1="100" x2="80" y2="80" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <rect x="25" y="70" width="35" height="30" fill="rgba(0,0,0,0.85)" />
            <rect x="25" y="40" width="30" height="30" fill="rgba(0,0,0,0.85)" />
            <rect x="35" y="20" width="20" height="20" fill="rgba(0,0,0,0.85)" />
            <line x1="25" y1="70" x2="60" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="25" y1="40" x2="55" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="35" y1="20" x2="55" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-valderrama-vega':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="customs-lighting">
            <polygon points="100,-20 0,120 200,120" fill="rgba(255,255,255,0.05)" />
          </g>
          <g data-name="luggage-table">
            <rect x="40" y="100" width="120" height="5" fill="rgba(0,0,0,0.6)" />
            <line x1="50" y1="105" x2="40" y2="120" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <line x1="150" y1="105" x2="160" y2="120" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
          </g>
          <g data-name="open-suitcase">
            <path d="M 30 100 L 170 100 L 160 80 L 40 80 Z" fill="rgba(0,0,0,0.5)" />
            <path d="M 40 80 L 160 80 L 150 40 L 50 40 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 50 40 L 150 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </g>
          <g data-name="clothes-and-packets">
            <rect x="60" y="85" width="40" height="10" rx="2" fill="rgba(0,0,0,0.7)" />
            <rect x="100" y="82" width="50" height="15" rx="3" fill="rgba(0,0,0,0.6)" />
            <rect x="70" y="92" width="15" height="5" fill="#f4e9d8" opacity="0.9" />
            <rect x="120" y="88" width="15" height="8" fill="#f4e9d8" opacity="0.9" transform="rotate(-10 120 88)" />
            <rect x="85" y="85" width="12" height="6" fill="#f4e9d8" opacity="0.9" transform="rotate(15 85 85)" />
            <path d="M 70 92 L 85 92" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
            <path d="M 120 88 L 135 88" stroke="rgba(0,0,0,0.3)" strokeWidth="1" transform="rotate(-10 120 88)" />
          </g>
          <g data-name="luggage-label">
            <line x1="165" y1="90" x2="180" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <rect x="175" y="105" width="10" height="15" fill="#f4e9d8" opacity="0.8" transform="rotate(20 175 105)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-conway':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="rain-slicked-road">
            <polygon points="0,120 90,60 110,60 200,120" fill="rgba(0,0,0,0.6)" />
            <polygon points="80,120 98,60 102,60 120,120" fill="rgba(0,0,0,0.7)" />
          </g>
          <g data-name="lane-markings">
            <path d="M 100 115 L 100 100 M 100 85 L 100 75 M 100 68 L 100 64" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="10 5" />
          </g>
          <g data-name="tail-light-streaks">
            <path d="M 60 120 Q 80 80 92 62" fill="none" stroke="#e8b34a" strokeWidth="4" strokeLinecap="round" filter="url(#soft-glow)" opacity="0.9" />
            <path d="M 140 120 Q 120 80 108 62" fill="none" stroke="#e8b34a" strokeWidth="4" strokeLinecap="round" filter="url(#soft-glow)" opacity="0.9" />
            <path d="M 50 120 Q 75 80 90 62" fill="none" stroke="rgba(232,179,74,0.3)" strokeWidth="8" strokeLinecap="round" filter="url(#soft-glow)" />
            <path d="M 150 120 Q 125 80 110 62" fill="none" stroke="rgba(232,179,74,0.3)" strokeWidth="8" strokeLinecap="round" filter="url(#soft-glow)" />
          </g>
          <g data-name="distant-car">
            <rect x="92" y="58" width="16" height="6" rx="2" fill="rgba(0,0,0,0.9)" />
            <circle cx="93" cy="62" r="1.5" fill="#e8b34a" filter="url(#soft-glow)" />
            <circle cx="107" cy="62" r="1.5" fill="#e8b34a" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 're-a-conjoined-twins':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="intertwined-ribbons">
            <path d="M 40 10 C 60 40 140 30 110 60 C 80 90 160 80 160 110" fill="none" stroke="#f4e9d8" strokeWidth="12" strokeLinecap="round" opacity="0.7" />
            <path d="M 160 10 C 140 40 60 30 90 60 C 120 90 40 80 40 110" fill="none" stroke="#e8b34a" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
            <path d="M 40 10 C 60 40 140 30 110 60 C 80 90 160 80 160 110" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 160 10 C 140 40 60 30 90 60 C 120 90 40 80 40 110" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g data-name="dividing-light">
            <line x1="100" y1="0" x2="100" y2="120" stroke="#ffffff" strokeWidth="2" filter="url(#soft-glow)" opacity="0.9" />
            <line x1="100" y1="0" x2="100" y2="120" stroke="#f4e9d8" strokeWidth="6" filter="url(#soft-glow)" opacity="0.3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-gomez':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="shop-counter-bg">
            <path d="M0,70 L200,70 L200,120 L0,120 Z" fill="rgba(0,0,0,0.35)" />
            <rect x="140" y="25" width="40" height="45" rx="3" fill="rgba(0,0,0,0.35)" />
            <rect x="145" y="30" width="30" height="15" rx="1" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="cheques">
            <path d="M70,80 L120,75 L130,85 L80,90 Z" fill="#f4e9d8" />
            <path d="M75,83 L125,78 L135,88 L85,93 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M80,86 L130,81 L140,91 L90,96 Z" fill="#f4e9d8" filter="url(#soft-glow)" />
            <line x1="85" y1="88" x2="115" y2="85" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <line x1="86" y1="91" x2="110" y2="88" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          <g data-name="hands">
            <path d="M20,95 Q50,90 75,90" fill="none" stroke="#e8b34a" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
            <path d="M20,95 Q50,90 75,90" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" />
            <path d="M180,80 Q150,85 130,85" fill="none" stroke="#e8b34a" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
            <path d="M180,80 Q150,85 130,85" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hinks':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="domestic-table">
            <rect x="30" y="75" width="140" height="45" fill="rgba(0,0,0,0.35)" />
            <path d="M145,68 C145,85 165,85 165,68 Z" fill="#f4e9d8" />
            <path d="M165,71 C172,71 172,78 165,78" fill="none" stroke="#f4e9d8" strokeWidth="1.5" />
          </g>
          <g data-name="envelope-notes">
            <path d="M65,82 L115,77 L125,87 L75,92 Z" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M70,80 L110,76 L115,82 L75,86 Z" fill="#e8b34a" filter="url(#soft-glow)" />
          </g>
          <g data-name="hands-overlapping">
            <path d="M40,95 Q60,85 85,85 M50,105 Q70,95 90,92" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="8" strokeLinecap="round" />
            <path d="M40,95 Q60,85 85,85 M50,105 Q70,95 90,92" fill="none" stroke="#f4e9d8" strokeWidth="3" strokeLinecap="round" />
            <path d="M150,90 Q120,85 105,85 M160,100 Q130,95 110,92" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="8" strokeLinecap="round" />
            <path d="M150,90 Q120,85 105,85 M160,100 Q130,95 110,92" fill="none" stroke="#e8b34a" strokeWidth="3" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'oxford-v-moss':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="lamp-light">
            <polygon points="100,20 30,120 170,120" fill="rgba(255,255,255,0.08)" />
            <path d="M85,25 C85,5 115,5 115,25 Z" fill="#f4e9d8" />
            <ellipse cx="100" cy="25" rx="15" ry="3" fill="#e8b34a" filter="url(#soft-glow)" />
            <path d="M100,0 L100,10 M100,10 Q110,15 115,25" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
          </g>
          <g data-name="exam-paper">
            <path d="M60,90 L130,90 L140,115 L70,115 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M65,95 L125,95 L130,110 L70,110 Z" fill="#f4e9d8" filter="url(#soft-glow)" />
            <line x1="75" y1="100" x2="115" y2="100" stroke="rgba(0,0,0,0.35)" strokeWidth="1" opacity="0.5" />
            <line x1="73" y1="105" x2="110" y2="105" stroke="rgba(0,0,0,0.35)" strokeWidth="1" opacity="0.5" />
          </g>
          <g data-name="pencil">
            <line x1="140" y1="85" x2="155" y2="110" stroke="#e8b34a" strokeWidth="2" />
            <polygon points="155,110 157,113 153,113" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-turner-no-2':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="car-door">
            <path d="M10,20 L190,20 L190,65 L10,65 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M10,65 L190,65 L190,120 L10,120 Z" fill="#f4e9d8" opacity="0.2" />
            <line x1="10" y1="65" x2="190" y2="65" stroke="#f4e9d8" strokeWidth="2" />
            <circle cx="160" cy="85" r="4" fill="rgba(0,0,0,0.35)" />
            <circle cx="160" cy="85" r="2" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="garage-light">
            <line x1="20" y1="35" x2="180" y2="50" stroke="#e8b34a" strokeWidth="6" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          <g data-name="hand-key">
            <line x1="168" y1="85" x2="160" y2="85" stroke="#e8b34a" strokeWidth="2" />
            <path d="M200,95 Q180,85 168,85" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="6" strokeLinecap="round" />
            <path d="M200,95 Q180,85 168,85" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'ag-ref-no-1-1983':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="desk-surface">
            <polygon points="0,95 200,75 200,120 0,120" fill="rgba(0,0,0,0.35)" />
          </g>
          <g data-name="torn-envelope">
            <path d="M55,85 L105,80 L115,95 L65,100 Z" fill="rgba(255,255,255,0.08)" />
            <path d="M55,85 Q65,83 60,82 Q70,78 65,75 L105,80" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M65,100 L115,95 L105,80" fill="none" stroke="#f4e9d8" strokeWidth="1" />
          </g>
          <g data-name="banknotes-pen">
            <rect x="75" y="78" width="30" height="15" transform="rotate(-15 75 78)" fill="#f4e9d8" filter="url(#soft-glow)" />
            <rect x="80" y="80" width="30" height="15" transform="rotate(-5 80 80)" fill="#e8b34a" />
            <line x1="45" y1="105" x2="125" y2="110" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="125" y1="110" x2="130" y2="111" stroke="#e8b34a" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-ghosh':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="desk-bg">
            <rect x="0" y="55" width="200" height="65" fill="rgba(0,0,0,0.35)" />
          </g>
          <g data-name="invoice">
            <rect x="65" y="60" width="55" height="40" fill="#f4e9d8" />
            <line x1="70" y1="65" x2="105" y2="65" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" />
            <line x1="70" y1="70" x2="95" y2="70" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <line x1="70" y1="90" x2="115" y2="90" stroke="rgba(0,0,0,0.35)" strokeWidth="1" strokeDasharray="2,2" />
          </g>
          <g data-name="stethoscope-pen">
            <path d="M45,40 C30,70 70,110 100,75" fill="none" stroke="#e8b34a" strokeWidth="2" filter="url(#soft-glow)" />
            <path d="M45,40 C35,25 55,25 45,40" fill="none" stroke="#f4e9d8" strokeWidth="2" />
            <circle cx="100" cy="75" r="4" fill="#f4e9d8" />
            <line x1="130" y1="75" x2="155" y2="85" stroke="#e8b34a" strokeWidth="3" />
            <polygon points="155,85 160,87 155,89" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'ivey-v-genting':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="casino-baize">
            <path d="M0,120 C80,60 200,120 200,120 Z" fill="rgba(0,0,0,0.35)" />
          </g>
          <g data-name="cards">
            <rect x="50" y="75" width="22" height="32" rx="2" transform="rotate(-20 50 75)" fill="#f4e9d8" />
            <rect x="75" y="70" width="22" height="32" rx="2" transform="rotate(-10 75 70)" fill="#f4e9d8" />
            <rect x="130" y="75" width="22" height="32" rx="2" transform="rotate(15 130 75)" fill="#f4e9d8" />
            <rect x="100" y="70" width="22" height="32" rx="2" transform="rotate(25 100 70)" fill="#e8b34a" filter="url(#soft-glow)" />
            <circle cx="111" cy="85" r="3" fill="rgba(0,0,0,0.35)" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-lloyd':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="projection-bg">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.35)" />
            <path d="M140,20 L180,20 L180,90 L140,90 Z" fill="rgba(0,0,0,0.35)" opacity="0.8" />
            <circle cx="160" cy="40" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <polygon points="140,55 120,60 120,70 140,75" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="film-reel">
            <circle cx="60" cy="65" r="25" fill="none" stroke="#f4e9d8" strokeWidth="3" filter="url(#soft-glow)" />
            <circle cx="60" cy="65" r="8" fill="#f4e9d8" />
            <line x1="60" y1="40" x2="60" y2="57" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="60" y1="73" x2="60" y2="90" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="35" y1="65" x2="52" y2="65" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="68" y1="65" x2="85" y2="65" stroke="#f4e9d8" strokeWidth="2" />
            <path d="M60,90 C80,105 100,70 120,80 C140,90 120,110 160,105" fill="none" stroke="#e8b34a" strokeWidth="4" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-velumyl':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="safe-interior">
            <rect x="40" y="20" width="120" height="80" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="4" />
            <rect x="42" y="22" width="116" height="76" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
            <line x1="40" y1="60" x2="160" y2="60" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
          </g>
          <g data-name="open-door">
            <polygon points="20,10 40,20 40,100 20,110" fill="#f4e9d8" opacity="0.9" />
            <polygon points="25,45 35,50 35,70 25,65" fill="rgba(0,0,0,0.35)" />
          </g>
          <g data-name="money-and-hand">
            <rect x="60" y="70" width="35" height="15" fill="#e8b34a" filter="url(#soft-glow)" />
            <line x1="60" y1="75" x2="95" y2="75" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <path d="M200,60 Q150,60 100,72 L100,83 Q150,75 200,75 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M200,60 Q150,60 100,72 L100,83 Q150,75 200,75 Z" fill="none" stroke="#f4e9d8" strokeWidth="1.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hale':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="dresser">
            <rect x="0" y="85" width="200" height="35" fill="rgba(0,0,0,0.35)" />
            <line x1="0" y1="85" x2="200" y2="85" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
          </g>
          <g data-name="jewellery-box">
            <polygon points="60,85 120,75 140,90 80,100" fill="rgba(255,255,255,0.08)" />
            <polygon points="60,85 120,75 100,35 40,45" fill="#f4e9d8" opacity="0.9" />
            <polygon points="50,55 90,45 100,70 60,80" fill="rgba(0,0,0,0.35)" opacity="0.4" />
          </g>
          <g data-name="jewels-cord">
            <circle cx="95" cy="85" r="4" fill="#e8b34a" filter="url(#soft-glow)" />
            <polygon points="105,90 110,85 115,90 110,95" fill="#e8b34a" />
            <path d="M125,85 Q160,105 200,75" fill="none" stroke="#f4e9d8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M145,96 Q170,110 200,85" fill="none" stroke="#f4e9d8" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-dawson-james':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="streetlamp">
            <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="40" filter="url(#soft-glow)" />
            <ellipse cx="100" cy="115" rx="50" ry="10" fill="rgba(255,255,255,0.08)" />
          </g>
          <g data-name="figures">
            <path d="M25,120 C25,70 55,60 55,40 C55,20 35,20 35,40" fill="rgba(0,0,0,0.35)" />
            <path d="M175,120 C175,70 145,60 145,40 C145,20 165,20 165,40" fill="rgba(0,0,0,0.35)" />
            <path d="M85,120 L115,70 L105,40 C105,25 125,25 125,40" fill="#f4e9d8" filter="url(#soft-glow)" />
            <line x1="60" y1="60" x2="75" y2="55" stroke="#e8b34a" strokeWidth="2" strokeLinecap="round" />
            <line x1="140" y1="60" x2="125" y2="55" stroke="#e8b34a" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'corcoran-v-anderton':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="pavement">
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(0,0,0,0.35)" strokeWidth="4" />
            <line x1="0" y1="110" x2="200" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="handbag-falling">
            <rect x="70" y="45" width="60" height="35" rx="8" fill="#f4e9d8" />
            <path d="M80,45 C80,10 120,10 120,45" fill="none" stroke="#e8b34a" strokeWidth="4" filter="url(#soft-glow)" />
            <rect x="90" y="55" width="20" height="10" rx="2" fill="rgba(0,0,0,0.35)" />
            <line x1="65" y1="50" x2="55" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="50" x2="145" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g data-name="releasing-fingers">
            <path d="M100,-5 L100,15 M110,-5 L110,10 M120,-5 L120,5" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-collins':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="wall-window">
            <rect x="60" y="10" width="80" height="70" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="60" y1="45" x2="140" y2="45" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
          </g>
          <g data-name="curtains-blowing">
            <path d="M60,10 Q40,45 60,80 L70,80 Q50,45 70,10 Z" fill="#e8b34a" filter="url(#soft-glow)" />
            <path d="M140,10 Q160,45 140,80 L130,80 Q150,45 130,10 Z" fill="#e8b34a" filter="url(#soft-glow)" />
          </g>
          <g data-name="ladder">
            <line x1="90" y1="120" x2="100" y2="70" stroke="#f4e9d8" strokeWidth="3" />
            <line x1="110" y1="120" x2="120" y2="70" stroke="#f4e9d8" strokeWidth="3" />
            <line x1="94" y1="100" x2="114" y2="100" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="97" y1="80" x2="117" y2="80" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="91" y1="120" x2="111" y2="120" stroke="#f4e9d8" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-brown-1985':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="shop-window">
            <rect x="20" y="10" width="160" height="100" fill="rgba(255,255,255,0.08)" stroke="rgba(0,0,0,0.35)" strokeWidth="4" />
            <polygon points="60,40 80,20 110,35 140,25 150,60 120,80 80,75 50,60" fill="#f4e9d8" opacity="0.05" stroke="#f4e9d8" strokeWidth="1.5" />
            <line x1="80" y1="20" x2="50" y2="10" stroke="#f4e9d8" strokeWidth="1" opacity="0.8" />
            <line x1="140" y1="25" x2="170" y2="15" stroke="#f4e9d8" strokeWidth="1" opacity="0.8" />
            <line x1="120" y1="80" x2="130" y2="110" stroke="#f4e9d8" strokeWidth="1" opacity="0.8" />
          </g>
          <g data-name="goods-inner">
            <circle cx="100" cy="50" r="12" fill="#e8b34a" filter="url(#soft-glow)" />
            <rect x="95" y="65" width="20" height="20" fill="rgba(0,0,0,0.35)" />
          </g>
          <g data-name="arm-reaching">
            <path d="M0,90 C30,85 60,65 80,55 L90,55" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="10" strokeLinecap="round" />
            <path d="M0,90 C30,85 60,65 80,55 L90,55" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-ryan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="sash-window">
            <rect x="70" y="10" width="60" height="100" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="6" />
            <line x1="70" y1="65" x2="130" y2="65" stroke="#f4e9d8" strokeWidth="3" opacity="0.8" />
            <line x1="70" y1="50" x2="130" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          </g>
          <g data-name="stuck-body">
            <path d="M85,65 C85,35 115,35 115,65 Z" fill="#f4e9d8" filter="url(#soft-glow)" />
            <path d="M85,65 C85,35 115,35 115,65 Z" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          <g data-name="kicking-legs">
            <path d="M90,75 L65,115 M110,75 L135,115" fill="none" stroke="#e8b34a" strokeWidth="8" strokeLinecap="round" />
            <path d="M90,75 L65,115 M110,75 L135,115" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-walkington':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="counter-gate">
            <rect x="0" y="60" width="130" height="60" fill="rgba(0,0,0,0.35)" />
            <path d="M130,60 L180,85 L180,120 L130,120 Z" fill="rgba(255,255,255,0.08)" />
            <line x1="130" y1="60" x2="180" y2="85" stroke="#f4e9d8" strokeWidth="2" />
          </g>
          <g data-name="till-open">
            <rect x="40" y="40" width="50" height="20" rx="2" fill="#f4e9d8" />
            <rect x="50" y="50" width="40" height="15" fill="rgba(0,0,0,0.35)" />
            <rect x="55" y="55" width="10" height="5" fill="#e8b34a" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'roe-v-kingerlee':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="cell-shadows">
            <line x1="150" y1="0" x2="150" y2="120" stroke="rgba(0,0,0,0.35)" strokeWidth="30" opacity="0.6" />
            <line x1="20" y1="0" x2="20" y2="120" stroke="rgba(0,0,0,0.35)" strokeWidth="15" opacity="0.4" />
          </g>
          <g data-name="mud-smears">
            <path d="M60,40 Q70,30 80,50 T60,70 Z" fill="rgba(0,0,0,0.35)" filter="url(#soft-glow)" />
            <path d="M90,30 Q105,40 95,65 T80,45 Z" fill="rgba(0,0,0,0.35)" opacity="0.8" />
            <path d="M65,35 L68,25 M75,32 L80,22 M85,38 L92,28 M95,45 L105,40" stroke="rgba(0,0,0,0.35)" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g data-name="bucket-brush">
            <path d="M50,110 L60,90 L80,90 L90,110 Z" fill="#f4e9d8" />
            <line x1="70" y1="90" x2="100" y2="75" stroke="#e8b34a" strokeWidth="3" strokeLinecap="round" />
            <polygon points="95,78 105,73 102,70" fill="rgba(0,0,0,0.35)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-smith-1974':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="floorboards">
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
            <line x1="0" y1="110" x2="200" y2="110" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
          </g>
          <g data-name="ripped-gap">
            <rect x="60" y="70" width="70" height="20" fill="rgba(255,255,255,0.08)" />
            <path d="M65,75 Q90,85 125,75" fill="none" stroke="#e8b34a" strokeWidth="2" filter="url(#soft-glow)" />
            <path d="M70,85 Q100,75 120,85" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          <g data-name="pulled-board-hammer">
            <rect x="135" y="60" width="50" height="15" transform="rotate(-15 135 60)" fill="#f4e9d8" />
            <line x1="30" y1="100" x2="60" y2="85" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" />
            <path d="M55,88 Q65,80 70,90" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-steer':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="window-pane">
            <rect x="15" y="15" width="170" height="90" fill="rgba(255,255,255,0.08)" />
            <rect x="15" y="15" width="170" height="90" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="6" />
          </g>
          <g data-name="bullet-hole">
            <circle cx="100" cy="55" r="4" fill="#f4e9d8" filter="url(#soft-glow)" />
            <path d="M100,55 L80,25 M100,55 L130,35 M100,55 L145,75 M100,55 L90,95 M100,55 L55,65 M100,55 L115,15" fill="none" stroke="#e8b34a" strokeWidth="1" />
            <path d="M100,55 L70,40 M100,55 L115,80 M100,55 L85,75 M100,55 L125,50" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hill-hall':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="chain-link-fence" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5">
            <line x1="0" y1="0" x2="120" y2="120"/><line x1="40" y1="0" x2="160" y2="120"/><line x1="80" y1="0" x2="200" y2="120"/><line x1="120" y1="0" x2="240" y2="120"/><line x1="-40" y1="0" x2="80" y2="120"/>
            <line x1="120" y1="0" x2="0" y2="120"/><line x1="160" y1="0" x2="40" y2="120"/><line x1="200" y1="0" x2="80" y2="120"/><line x1="240" y1="0" x2="120" y2="120"/><line x1="80" y1="0" x2="-40" y2="120"/>
          </g>
          <g data-name="wire-cutters">
            <path d="M100,55 L85,95 M100,55 L115,95" fill="none" stroke="#f4e9d8" strokeWidth="5" strokeLinecap="round" />
            <circle cx="100" cy="55" r="3" fill="#e8b34a" />
            <polygon points="100,50 93,35 107,35" fill="#f4e9d8" filter="url(#soft-glow)" />
          </g>
          <g data-name="arm-sleeve">
            <path d="M70,120 L85,90 L115,90 L130,120 Z" fill="rgba(0,0,0,0.35)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-larsonneur':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="morning-mist">
            <rect x="0" y="0" width="200" height="80" fill="rgba(255,255,255,0.08)" />
            <path d="M0,60 Q50,40 100,50 T200,60 L200,80 L0,80 Z" fill="rgba(255,255,255,0.08)" />
            <line x1="0" y1="75" x2="200" y2="75" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
          </g>
          <g data-name="wooden-dock">
            <path d="M-20,120 L80,80 L200,80 L220,120 Z" fill="rgba(0,0,0,0.35)" />
            <line x1="20" y1="120" x2="90" y2="80" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="70" y1="120" x2="110" y2="80" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="120" y1="120" x2="130" y2="80" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="170" y1="120" x2="150" y2="80" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
          </g>
          <g data-name="passport-open">
            <path d="M80,105 L100,95 L130,100 L110,110 Z" fill="#f4e9d8" />
            <path d="M100,95 L120,90 L145,95 L130,100 Z" fill="#f4e9d8" opacity="0.8" />
            <line x1="100" y1="95" x2="130" y2="100" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" />
            <circle cx="125" cy="95" r="4" fill="none" stroke="#e8b34a" strokeWidth="1.5" />
            <line x1="90" y1="102" x2="110" y2="100" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <line x1="92" y1="105" x2="112" y2="103" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-williams-1992':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="country-road-verge">
            <path d="M0,80 L200,90 L200,120 L0,120 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M0,90 Q50,85 100,95 T200,100" fill="none" stroke="#f4e9d8" strokeWidth="1" opacity="0.4" />
            <path d="M140,110 L145,100 L150,110 M155,115 L160,105 L165,115" fill="none" stroke="#f4e9d8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </g>
          <g data-name="open-car-door">
            <path d="M-20,10 L40,30 L40,110 L-20,100 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M40,30 L80,20 L80,95 L40,110 Z" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="40" y1="65" x2="80" y2="55" stroke="#f4e9d8" strokeWidth="1" />
          </g>
          <g data-name="tumbling-figure">
            <path d="M95,45 C110,35 125,50 135,40" fill="none" stroke="#e8b34a" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
            <path d="M105,50 C120,60 110,80 130,70" fill="none" stroke="#f4e9d8" strokeWidth="8" strokeLinecap="round" />
            <circle cx="140" cy="35" r="7" fill="#f4e9d8" />
            <path d="M80,50 Q110,65 140,80" fill="none" stroke="#f4e9d8" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
            <path d="M70,40 Q100,55 130,70" fill="none" stroke="#f4e9d8" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-pembliton':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="brawling-silhouettes">
            <path d="M10,120 C10,70 30,50 40,60 C50,70 40,120 40,120 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M30,120 C30,65 50,45 60,55 C70,65 60,120 60,120 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M20,65 L50,50 L65,70" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="8" strokeLinecap="round" />
            <circle cx="35" cy="45" r="10" fill="rgba(0,0,0,0.35)" />
            <circle cx="55" cy="40" r="10" fill="rgba(0,0,0,0.35)" />
            <path d="M40,55 L80,35" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="6" strokeLinecap="round" />
          </g>
          <g data-name="window-pane">
            <rect x="170" y="10" width="30" height="90" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="170" y1="40" x2="200" y2="40" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
            <line x1="170" y1="70" x2="200" y2="70" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
          </g>
          <g data-name="stone-mid-air">
            <path d="M80,35 Q130,-10 160,30" fill="none" stroke="#e8b34a" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.8" />
            <circle cx="160" cy="30" r="4" fill="#f4e9d8" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-larkin':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tavern-table">
            <rect x="0" y="85" width="200" height="35" fill="rgba(0,0,0,0.35)" />
            <line x1="0" y1="85" x2="200" y2="85" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <path d="M0,100 L200,100 M0,115 L200,115" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          <g data-name="tipped-tumbler">
            <polygon points="120,85 130,70 160,80 150,95" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="1.5" />
            <ellipse cx="125" cy="77" rx="3" ry="8" transform="rotate(-30 125 77)" fill="none" stroke="#f4e9d8" strokeWidth="1.5" />
            <path d="M120,85 Q90,95 100,105 Q120,115 140,105 Q150,95 120,85 Z" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          <g data-name="cut-throat-razor">
            <path d="M40,90 L80,95 L85,92 L45,87 Z" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M80,95 L110,85 L115,80 L85,92 Z" fill="#e8b34a" filter="url(#soft-glow)" />
            <circle cx="83" cy="93" r="2" fill="#f4e9d8" />
            <polygon points="110,85 115,80 120,88" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-lowe':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="frosted-window">
            <rect x="20" y="10" width="160" height="80" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="3" />
            <path d="M20,90 L40,60 L50,80 L70,40 L90,70 L110,30 L130,60 L160,20 L180,90 Z" fill="rgba(255,255,255,0.08)" opacity="0.5" />
            <path d="M20,90 L35,70 L45,85 L60,50 L80,75 L100,45 L120,70 L145,35 L180,90 Z" fill="#f4e9d8" opacity="0.2" />
          </g>
          <g data-name="radiator">
            <rect x="40" y="90" width="120" height="30" fill="rgba(0,0,0,0.35)" />
            <line x1="40" y1="90" x2="160" y2="90" stroke="#f4e9d8" strokeWidth="4" />
            <line x1="50" y1="90" x2="50" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="70" y1="90" x2="70" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="90" y1="90" x2="90" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="110" y1="90" x2="110" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="130" y1="90" x2="130" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
            <line x1="150" y1="90" x2="150" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.5" />
          </g>
          <g data-name="baby-bottle">
            <rect x="90" y="65" width="16" height="25" rx="3" fill="#f4e9d8" opacity="0.8" />
            <rect x="88" y="60" width="20" height="5" rx="1" fill="#e8b34a" />
            <path d="M94,60 C94,50 102,50 102,60 Z" fill="#e8b34a" opacity="0.9" />
            <line x1="94" y1="70" x2="100" y2="70" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <line x1="94" y1="75" x2="102" y2="75" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
            <line x1="94" y1="80" x2="100" y2="80" stroke="rgba(0,0,0,0.35)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-goodfellow':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="fire-glow">
            <rect x="50" y="10" width="100" height="110" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.8" />
            <rect x="55" y="15" width="90" height="105" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.6" />
          </g>
          <g data-name="council-flat-door">
            <rect x="55" y="15" width="90" height="105" fill="rgba(0,0,0,0.35)" />
            <rect x="65" y="25" width="70" height="30" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <rect x="65" y="65" width="70" height="40" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <circle cx="125" cy="58" r="4" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </g>
          <g data-name="curling-doormat">
            <polygon points="40,120 160,120 140,105 60,105" fill="rgba(0,0,0,0.35)" />
            <path d="M40,120 L60,105 L140,105 L160,120 L150,110 L50,110 Z" fill="#f4e9d8" opacity="0.7" />
            <path d="M35,115 C45,115 50,105 60,105" fill="none" stroke="#e8b34a" strokeWidth="2" />
            <path d="M165,115 C155,115 150,105 140,105" fill="none" stroke="#e8b34a" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-wacker':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="port-shadow">
            <path d="M150,120 L150,40 L160,40 L160,60 L180,60 L180,120 Z" fill="rgba(255,255,255,0.08)" />
            <line x1="155" y1="50" x2="200" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          </g>
          <g data-name="lorry-container">
            <rect x="10" y="20" width="130" height="100" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="30" y1="20" x2="30" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="50" y1="20" x2="50" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="70" y1="20" x2="70" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="90" y1="20" x2="90" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="110" y1="20" x2="110" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="130" y1="20" x2="130" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="ventilation-grille">
            <rect x="100" y="30" width="30" height="20" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="1.5" />
            <line x1="100" y1="35" x2="130" y2="35" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="100" y1="40" x2="130" y2="40" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="100" y1="45" x2="130" y2="45" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="100" y1="30" x2="130" y2="50" stroke="#e8b34a" strokeWidth="2" opacity="0.6" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-tandy':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="upturned-chair">
            <line x1="140" y1="120" x2="160" y2="70" stroke="rgba(0,0,0,0.35)" strokeWidth="6" strokeLinecap="round" />
            <line x1="170" y1="120" x2="185" y2="80" stroke="rgba(0,0,0,0.35)" strokeWidth="6" strokeLinecap="round" />
            <line x1="145" y1="100" x2="180" y2="100" stroke="rgba(0,0,0,0.35)" strokeWidth="4" />
            <line x1="155" y1="80" x2="185" y2="80" stroke="rgba(0,0,0,0.35)" strokeWidth="4" />
          </g>
          <g data-name="draining-board">
            <polygon points="0,95 120,80 140,120 0,120" fill="rgba(0,0,0,0.35)" />
            <line x1="10" y1="100" x2="100" y2="85" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="20" y1="105" x2="110" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="30" y1="110" x2="120" y2="95" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="40" y1="115" x2="130" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="vodka-bottle">
            <path d="M70,85 L85,82 L85,35 C85,25 80,20 80,10 L75,10 C75,20 70,25 70,35 Z" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="2" />
            <path d="M71,75 L84,72 L84,82 L71,84 Z" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.8" />
            <rect x="74" y="10" width="7" height="4" fill="#f4e9d8" />
            <line x1="72" y1="45" x2="83" y2="45" stroke="#f4e9d8" strokeWidth="1" opacity="0.6" />
            <line x1="72" y1="65" x2="83" y2="65" stroke="#f4e9d8" strokeWidth="1" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'dpp-v-k':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tiled-wall">
            <rect x="0" y="0" width="200" height="120" fill="rgba(0,0,0,0.35)" />
            <line x1="40" y1="0" x2="40" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="80" y1="0" x2="80" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="120" y1="0" x2="120" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="160" y1="0" x2="160" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="hand-dryer">
            <rect x="60" y="20" width="80" height="60" rx="8" fill="#f4e9d8" opacity="0.9" />
            <rect x="65" y="25" width="70" height="50" rx="4" fill="rgba(0,0,0,0.35)" opacity="0.2" />
            <circle cx="100" cy="50" r="15" fill="rgba(255,255,255,0.08)" />
            <path d="M80,80 L120,80 L110,105 L90,105 Z" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="2" />
            <polygon points="90,105 110,105 125,120 75,120" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.3" />
          </g>
          <g data-name="vial-silhouette">
            <rect x="96" y="90" width="8" height="15" rx="2" fill="rgba(0,0,0,0.35)" />
            <rect x="97" y="87" width="6" height="3" fill="rgba(0,0,0,0.35)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-bollom':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="dark-nursery-cot">
            <rect x="20" y="30" width="160" height="90" fill="rgba(0,0,0,0.35)" opacity="0.8" />
            <line x1="20" y1="30" x2="180" y2="30" stroke="#f4e9d8" strokeWidth="4" />
            <line x1="20" y1="120" x2="180" y2="120" stroke="#f4e9d8" strokeWidth="4" />
            <line x1="40" y1="30" x2="40" y2="120" stroke="#f4e9d8" strokeWidth="3" opacity="0.6" />
            <line x1="70" y1="30" x2="70" y2="120" stroke="#f4e9d8" strokeWidth="3" opacity="0.6" />
            <line x1="100" y1="30" x2="100" y2="120" stroke="#f4e9d8" strokeWidth="3" opacity="0.6" />
            <line x1="130" y1="30" x2="130" y2="120" stroke="#f4e9d8" strokeWidth="3" opacity="0.6" />
            <line x1="160" y1="30" x2="160" y2="120" stroke="#f4e9d8" strokeWidth="3" opacity="0.6" />
          </g>
          <g data-name="rumpled-blanket">
            <path d="M20,115 Q60,85 100,105 T180,95 L180,120 L20,120 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M40,115 Q70,95 90,110 T150,105" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
          </g>
          <g data-name="cuddly-toy">
            <circle cx="150" cy="85" r="10" fill="rgba(0,0,0,0.35)" />
            <circle cx="142" cy="78" r="5" fill="rgba(0,0,0,0.35)" />
            <circle cx="158" cy="78" r="5" fill="rgba(0,0,0,0.35)" />
            <ellipse cx="150" cy="85" rx="6" ry="4" fill="rgba(255,255,255,0.08)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-dica':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bedside-table">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.35)" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
          </g>
          <g data-name="bedside-lamp">
            <path d="M30,90 L40,60 L20,60 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M20,60 L40,60 L50,20 L10,20 Z" fill="#f4e9d8" opacity="0.9" />
            <polygon points="45,60 180,90 200,90 200,60" fill="#e8b34a" opacity="0.2" filter="url(#soft-glow)" />
          </g>
          <g data-name="envelope">
            <rect x="90" y="80" width="40" height="25" fill="#f4e9d8" transform="rotate(-5 90 80)" />
            <path d="M90,80 L110,95 L130,77" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" transform="rotate(-5 90 80)" />
            <line x1="90" y1="105" x2="110" y2="95" stroke="rgba(0,0,0,0.35)" strokeWidth="1" transform="rotate(-5 90 80)" />
            <line x1="130" y1="102" x2="110" y2="95" stroke="rgba(0,0,0,0.35)" strokeWidth="1" transform="rotate(-5 90 80)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'pegram-v-dpp':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="sleeve">
            <path d="M120,0 C150,40 180,80 180,120 L200,120 L200,0 Z" fill="#f4e9d8" />
            <path d="M140,0 C170,40 190,80 190,120" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="3" opacity="0.4" />
          </g>
          <g data-name="gloved-hand-resting">
            <path d="M0,80 C40,75 80,65 110,60 C130,55 145,65 155,75 C160,80 165,95 160,105 C150,115 130,110 120,100 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M110,60 C125,50 145,55 155,75" fill="none" stroke="#e8b34a" strokeWidth="4" strokeLinecap="round" filter="url(#soft-glow)" />
            <path d="M130,60 C140,65 145,75 140,85 M120,65 C130,70 135,80 130,90" fill="none" stroke="#f4e9d8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'lawrence-v-mpc':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="taxi-back-seat">
            <path d="M0,40 Q100,50 200,40 L200,120 L0,120 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M0,40 Q100,50 200,40" fill="none" stroke="#f4e9d8" strokeWidth="3" opacity="0.4" />
            <path d="M50,45 Q50,80 30,120 M150,45 Q150,80 170,120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          </g>
          <g data-name="wallet">
            <rect x="90" y="80" width="50" height="30" rx="3" fill="#f4e9d8" transform="rotate(10 90 80)" />
            <path d="M90,80 L140,88 M95,110 L145,118" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
            <rect x="105" y="80" width="30" height="25" fill="#e8b34a" transform="rotate(5 105 80)" filter="url(#soft-glow)" opacity="0.8" />
          </g>
          <g data-name="hand-reaching">
            <path d="M-20,70 C30,70 60,65 90,80" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="15" strokeLinecap="round" />
            <path d="M-20,70 C30,70 60,65 90,80" fill="none" stroke="#f4e9d8" strokeWidth="4" strokeLinecap="round" />
            <path d="M85,75 C95,80 105,85 110,82 C105,90 95,95 85,90" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-morris':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="supermarket-shelf">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.35)" />
            <rect x="0" y="80" width="200" height="15" fill="rgba(255,255,255,0.08)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="#f4e9d8" strokeWidth="2" opacity="0.3" />
            <line x1="0" y1="95" x2="200" y2="95" stroke="#f4e9d8" strokeWidth="1" opacity="0.2" />
          </g>
          <g data-name="tin-silhouette">
            <rect x="30" y="30" width="50" height="50" rx="4" fill="rgba(0,0,0,0.35)" />
            <ellipse cx="55" cy="30" rx="25" ry="5" fill="rgba(0,0,0,0.35)" />
            <ellipse cx="55" cy="80" rx="25" ry="5" fill="rgba(0,0,0,0.35)" />
            <path d="M80,30 L80,80" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="swapped-labels">
            <rect x="100" y="70" width="30" height="20" rx="1" fill="#f4e9d8" transform="rotate(15 100 70)" opacity="0.9" />
            <rect x="110" y="65" width="30" height="20" rx="1" fill="#e8b34a" transform="rotate(-10 110 65)" filter="url(#soft-glow)" />
            <line x1="115" y1="72" x2="135" y2="70" stroke="rgba(0,0,0,0.35)" strokeWidth="2" transform="rotate(-10 110 65)" />
            <line x1="115" y1="78" x2="125" y2="76" stroke="rgba(0,0,0,0.35)" strokeWidth="2" transform="rotate(-10 110 65)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hall':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="travel-desk">
            <polygon points="0,95 200,70 200,120 0,120" fill="rgba(0,0,0,0.35)" />
          </g>
          <g data-name="empty-ledger">
            <rect x="50" y="60" width="100" height="40" fill="#f4e9d8" transform="rotate(-5 50 60)" />
            <line x1="100" y1="56" x2="100" y2="96" stroke="rgba(0,0,0,0.35)" strokeWidth="2" transform="rotate(-5 50 60)" />
            <line x1="55" y1="65" x2="95" y2="65" stroke="rgba(0,0,0,0.35)" strokeWidth="1" opacity="0.3" transform="rotate(-5 50 60)" />
            <line x1="105" y1="65" x2="145" y2="65" stroke="rgba(0,0,0,0.35)" strokeWidth="1" opacity="0.3" transform="rotate(-5 50 60)" />
          </g>
          <g data-name="brochures-bell">
            <rect x="15" y="70" width="30" height="40" fill="rgba(255,255,255,0.08)" transform="rotate(15 15 70)" stroke="#f4e9d8" strokeWidth="1" />
            <rect x="25" y="75" width="30" height="40" fill="#e8b34a" transform="rotate(30 25 75)" opacity="0.6" filter="url(#soft-glow)" />
            <path d="M160,80 Q170,70 180,80 L185,90 L155,90 Z" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="2" />
            <circle cx="170" cy="70" r="3" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-easom':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="cinema-rows">
            <path d="M0,60 L200,60 M0,80 L200,80 M0,100 L200,100" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
            <rect x="60" y="50" width="80" height="70" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="projector-glow">
            <polygon points="100,0 20,120 180,120" fill="rgba(255,255,255,0.08)" opacity="0.5" />
            <line x1="80" y1="0" x2="40" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.1" />
            <line x1="120" y1="0" x2="160" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.1" />
          </g>
          <g data-name="handbag-undisturbed">
            <path d="M75,90 C75,75 125,75 125,90 L130,120 L70,120 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M90,90 C90,70 110,70 110,90" fill="none" stroke="#e8b34a" strokeWidth="4" filter="url(#soft-glow)" />
            <rect x="95" y="85" width="10" height="5" fill="rgba(0,0,0,0.35)" />
            <path d="M85,90 L115,90" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-pitham-hehl':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="living-room-sofa">
            <rect x="20" y="50" width="120" height="50" rx="8" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <rect x="20" y="70" width="30" height="30" rx="5" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
            <rect x="110" y="70" width="30" height="30" rx="5" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
          </g>
          <g data-name="for-sale-tag">
            <rect x="120" y="80" width="20" height="15" fill="#f4e9d8" transform="rotate(10 120 80)" />
            <line x1="125" y1="85" x2="135" y2="86" stroke="rgba(0,0,0,0.35)" strokeWidth="1" transform="rotate(10 120 80)" />
            <circle cx="120" cy="80" r="2" fill="#e8b34a" />
          </g>
          <g data-name="side-table">
            <rect x="160" y="80" width="30" height="40" fill="rgba(0,0,0,0.35)" />
            <line x1="160" y1="80" x2="190" y2="80" stroke="#f4e9d8" strokeWidth="2" />
            <path d="M170,75 L180,75 L175,80 Z" fill="#e8b34a" filter="url(#soft-glow)" />
            <path d="M170,70 L180,70 L180,75 L170,75 Z" fill="#f4e9d8" opacity="0.8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-kemp':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="xray-light-box">
            <rect x="40" y="10" width="120" height="100" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="4" />
            <rect x="45" y="15" width="110" height="90" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.6" />
            <line x1="100" y1="15" x2="100" y2="105" stroke="rgba(0,0,0,0.35)" strokeWidth="1" opacity="0.3" />
          </g>
          <g data-name="skull-bone-silhouette">
            <path d="M70,50 C70,30 130,30 130,50 C130,70 110,90 100,90 C90,90 70,70 70,50 Z" fill="rgba(0,0,0,0.35)" opacity="0.8" />
            <ellipse cx="90" cy="50" rx="10" ry="12" fill="#f4e9d8" opacity="0.5" />
            <ellipse cx="110" cy="50" rx="10" ry="12" fill="#f4e9d8" opacity="0.5" />
            <path d="M95,75 Q100,80 105,75" fill="none" stroke="#f4e9d8" strokeWidth="3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-burgess':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tv-flicker">
            <polygon points="-20,-20 100,120 200,120 200,-20" fill="rgba(255,255,255,0.08)" opacity="0.6" filter="url(#soft-glow)" />
            <polygon points="0,0 80,120 200,120 200,0" fill="#e8b34a" opacity="0.1" />
          </g>
          <g data-name="sleeping-figure">
            <path d="M40,90 C40,75 160,75 160,90 L160,120 L40,120 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M50,85 C60,75 80,75 90,85 C90,95 70,105 50,95 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M85,85 C110,75 140,80 150,95 L150,120 L80,120 Z" fill="#e8b34a" opacity="0.4" />
            <path d="M85,85 C110,75 140,80 150,95 L150,120 L80,120 Z" fill="none" stroke="#f4e9d8" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-coley':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tv-glow-wall">
            <polygon points="200,20 0,60 0,120 200,120" fill="rgba(255,255,255,0.08)" filter="url(#soft-glow)" />
            <polygon points="200,40 40,70 40,120 200,120" fill="#e8b34a" opacity="0.1" />
          </g>
          <g data-name="patterned-rug">
            <path d="M-20,100 L220,90 L200,120 L0,120 Z" fill="rgba(0,0,0,0.35)" />
            <path d="M0,105 L200,95 M10,115 L210,105" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="5,5" />
          </g>
          <g data-name="controller">
            <path d="M80,105 Q100,95 120,105 Q125,115 115,115 Q100,110 85,115 Q75,115 80,105 Z" fill="#f4e9d8" transform="rotate(-15 100 110)" />
            <circle cx="90" cy="105" r="4" fill="rgba(0,0,0,0.35)" transform="rotate(-15 100 110)" />
            <circle cx="110" cy="105" r="4" fill="rgba(0,0,0,0.35)" transform="rotate(-15 100 110)" />
            <circle cx="110" cy="102" r="1.5" fill="#e8b34a" transform="rotate(-15 100 110)" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-hatton':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="dim-morning">
            <path d="M40,0 L60,120 L120,120 L80,0 Z" fill="rgba(255,255,255,0.08)" filter="url(#soft-glow)" />
            <line x1="50" y1="0" x2="80" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.4" />
          </g>
          <g data-name="table-pint-hammer">
            <rect x="90" y="80" width="80" height="40" fill="rgba(0,0,0,0.35)" />
            <line x1="90" y1="80" x2="170" y2="80" stroke="#f4e9d8" strokeWidth="2" />
            <path d="M110,50 L125,50 L120,80 L115,80 Z" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="1.5" />
            <ellipse cx="117.5" cy="50" rx="7.5" ry="2" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <rect x="140" y="70" width="25" height="10" rx="2" fill="#f4e9d8" opacity="0.9" />
            <line x1="165" y1="75" x2="190" y2="75" stroke="#e8b34a" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-donovan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="ajar-door">
            <rect x="80" y="10" width="90" height="110" fill="rgba(0,0,0,0.35)" />
            <rect x="85" y="15" width="30" height="40" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
            <rect x="85" y="65" width="30" height="40" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="10" x2="80" y2="120" stroke="#f4e9d8" strokeWidth="4" />
            <circle cx="160" cy="65" r="4" fill="#e8b34a" filter="url(#soft-glow)" />
          </g>
          <g data-name="cane">
            <line x1="60" y1="120" x2="75" y2="40" stroke="#f4e9d8" strokeWidth="3" strokeLinecap="round" />
            <line x1="62" y1="120" x2="77" y2="40" stroke="#e8b34a" strokeWidth="1" opacity="0.5" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-gotts':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tiled-floor">
            <polygon points="0,60 200,60 200,120 0,120" fill="rgba(0,0,0,0.35)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="40" y1="60" x2="20" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="100" y1="60" x2="100" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="160" y1="60" x2="180" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </g>
          <g data-name="looming-shadow">
            <polygon points="200,10 120,60 80,120 200,120" fill="rgba(0,0,0,0.35)" opacity="0.8" />
            <path d="M200,10 Q140,40 80,120" fill="none" stroke="#e8b34a" strokeWidth="2" opacity="0.3" filter="url(#soft-glow)" />
          </g>
          <g data-name="kitchen-knife">
            <path d="M80,85 L110,80 L115,82 L82,88 Z" fill="#f4e9d8" />
            <rect x="110" y="78" width="25" height="6" rx="1" fill="rgba(0,0,0,0.35)" transform="rotate(-10 110 78)" stroke="#f4e9d8" strokeWidth="1" />
            <circle cx="115" cy="80" r="1" fill="#f4e9d8" />
            <circle cx="125" cy="78" r="1" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-whybrow':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="bathtub">
            <path d="M20,70 L180,70 C180,110 160,120 100,120 C40,120 20,110 20,70 Z" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="3" />
            <ellipse cx="100" cy="70" rx="80" ry="15" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="2" />
            <path d="M30,75 C60,85 140,85 170,75" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          </g>
          <g data-name="bare-bulb">
            <line x1="100" y1="0" x2="100" y2="25" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
            <circle cx="100" cy="30" r="6" fill="#e8b34a" filter="url(#soft-glow)" />
            <polygon points="100,30 50,70 150,70" fill="#e8b34a" opacity="0.15" />
          </g>
          <g data-name="frayed-wire">
            <path d="M0,40 Q40,60 80,80 Q100,90 120,85" fill="none" stroke="#f4e9d8" strokeWidth="2" />
            <line x1="120" y1="85" x2="125" y2="82" stroke="#e8b34a" strokeWidth="1" />
            <line x1="120" y1="85" x2="126" y2="87" stroke="#e8b34a" strokeWidth="1" />
            <line x1="120" y1="85" x2="128" y2="85" stroke="#e8b34a" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'r-v-shivpuri':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="platform-pillar">
            <rect x="150" y="0" width="30" height="120" fill="rgba(0,0,0,0.35)" />
            <line x1="150" y1="0" x2="150" y2="120" stroke="#f4e9d8" strokeWidth="2" opacity="0.4" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </g>
          <g data-name="open-suitcase">
            <rect x="40" y="80" width="80" height="30" rx="4" fill="rgba(0,0,0,0.35)" stroke="#f4e9d8" strokeWidth="2" />
            <path d="M40,85 L120,85 L110,60 L50,60 Z" fill="rgba(255,255,255,0.08)" stroke="#f4e9d8" strokeWidth="1" />
            <line x1="75" y1="80" x2="85" y2="80" stroke="#e8b34a" strokeWidth="3" />
          </g>
          <g data-name="dried-leaves">
            <circle cx="70" cy="80" r="8" fill="#e8b34a" opacity="0.6" filter="url(#soft-glow)" />
            <path d="M60,82 Q65,78 70,82 T80,82" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M65,85 Q70,80 75,85 T85,85" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <circle cx="90" cy="78" r="6" fill="#e8b34a" opacity="0.4" />
          </g>
          {vignetteLayer}
        </svg>
      );


    /* Term 2 — Tort · Chapter 21 negligence */
    case 'donoghue-v-stevenson':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="cafe-table">
            <ellipse cx="100" cy="110" rx="80" ry="20" fill="rgba(0,0,0,0.35)" />
            <path d="M 20 110 L 20 120 L 180 120 L 180 110 Z" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="opaque-bottle">
            <path d="M 90 40 L 90 20 L 110 20 L 110 40 L 120 60 L 120 100 L 80 100 L 80 60 Z" fill="rgba(0,0,0,0.8)" />
            <rect x="90" y="10" width="20" height="10" rx="2" fill="rgba(0,0,0,0.9)" />
            <rect x="85" y="70" width="30" height="15" fill="#f4e9d8" opacity="0.8" />
            <line x1="85" y1="75" x2="115" y2="75" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
          </g>
          <g data-name="snail-silhouette">
            <path d="M 130 95 C 130 85 145 85 145 95 Z" fill="rgba(0,0,0,0.7)" />
            <path d="M 125 100 Q 140 90 150 100 L 155 98 L 155 100 L 125 100 Z" fill="rgba(0,0,0,0.8)" />
            <line x1="150" y1="98" x2="155" y2="92" stroke="rgba(0,0,0,0.8)" strokeWidth="1" />
            <line x1="152" y1="98" x2="158" y2="95" stroke="rgba(0,0,0,0.8)" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'caparo-v-dickman':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="boardroom-table">
            <polygon points="0,70 200,50 200,120 0,120" fill="rgba(0,0,0,0.35)" />
            <line x1="0" y1="70" x2="200" y2="50" stroke="#f4e9d8" strokeWidth="2" opacity="0.3" />
          </g>
          <g data-name="ledger-shadow">
            <polygon points="50,85 140,75 190,120 30,120" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="auditors-ledger" transform="translate(60, 65) rotate(-10)">
            <rect x="0" y="0" width="60" height="40" rx="2" fill="#f4e9d8" opacity="0.9" />
            <rect x="5" y="0" width="50" height="40" fill="rgba(255,255,255,0.8)" />
            <line x1="2" y1="5" x2="2" y2="35" stroke="#e8b34a" strokeWidth="1" />
            <path d="M 10 10 L 50 10 M 10 15 L 45 15 M 10 20 L 50 20 M 10 25 L 40 25 M 10 30 L 50 30" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
            <line x1="30" y1="5" x2="30" y2="35" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          </g>
          <g data-name="pen">
            <polygon points="120,70 123,72 135,55 132,53" fill="rgba(0,0,0,0.8)" />
            <polygon points="120,70 123,72 118,75" fill="#e8b34a" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'robinson-v-ccwy':
      return (
        <svg {...commonProps}>
          {defs}
          <rect data-name="pavement" x="0" y="100" width="200" height="20" fill="rgba(0,0,0,0.3)" />
          <g data-name="struggle">
            <path d="M 110 40 C 115 35 125 35 130 45 C 130 55 125 65 115 70 L 115 100 L 105 100 L 105 70 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 90 45 C 95 40 105 45 105 55 L 120 65 L 110 75 L 90 75 L 85 100 L 75 100 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="95" cy="35" r="8" fill="rgba(0,0,0,0.9)" />
            <path d="M 85 30 Q 95 25 105 30 L 105 32 Q 95 35 85 32 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 140 45 C 135 40 125 45 125 55 L 110 65 L 120 75 L 140 75 L 145 100 L 155 100 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="145" cy="35" r="8" fill="rgba(0,0,0,0.9)" />
            <path d="M 135 30 Q 145 25 155 30 L 155 32 Q 145 35 135 32 Z" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="elderly-falling">
            <path d="M 60 55 C 55 50 45 50 40 60 C 35 70 45 80 50 80 L 50 100 L 60 100 Z" fill="rgba(0,0,0,0.6)" transform="rotate(-30 50 80)" />
            <circle cx="55" cy="45" r="7" fill="rgba(0,0,0,0.6)" transform="rotate(-30 50 80)" />
            <line x1="30" y1="70" x2="10" y2="60" stroke="rgba(0,0,0,0.6)" strokeWidth="3" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'hill-v-cc-west-yorkshire':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="window-frame">
            <rect x="0" y="0" width="20" height="100" fill="rgba(0,0,0,0.8)" />
            <rect x="180" y="0" width="20" height="100" fill="rgba(0,0,0,0.8)" />
            <rect x="0" y="100" width="200" height="20" fill="rgba(0,0,0,0.9)" />
            <rect x="20" y="90" width="160" height="10" fill="rgba(0,0,0,0.7)" />
            <line x1="100" y1="0" x2="100" y2="90" stroke="rgba(0,0,0,0.8)" strokeWidth="6" />
            <line x1="20" y1="45" x2="180" y2="45" stroke="rgba(0,0,0,0.8)" strokeWidth="6" />
          </g>
          <g data-name="candle">
            <rect x="130" y="60" width="16" height="30" fill="#f4e9d8" opacity="0.9" />
            <path d="M 130 90 L 146 90 L 148 95 L 128 95 Z" fill="rgba(0,0,0,0.5)" />
            <path d="M 138 52 Q 135 56 138 60 Q 141 56 138 52 Z" fill="#e8b34a" filter="url(#soft-glow)" />
            <circle cx="138" cy="56" r="15" fill="#e8b34a" opacity="0.15" filter="url(#soft-glow)" />
          </g>
          <g data-name="poster">
            <polygon points="50,92 80,88 95,95 55,98" fill="#f4e9d8" opacity="0.8" />
            <polygon points="50,92 65,85 80,88" fill="rgba(0,0,0,0.2)" />
            <rect x="60" y="88" width="15" height="4" fill="rgba(0,0,0,0.4)" transform="rotate(-5 60 88)" />
            <rect x="62" y="94" width="25" height="2" fill="rgba(0,0,0,0.2)" transform="rotate(-5 62 94)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'kent-v-griffiths':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="kitchen-tiles">
            <path d="M 0 60 L 200 60 M 0 90 L 200 90 M 0 120 L 200 120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M 40 40 L 0 120 M 100 40 L 100 120 M 160 40 L 200 120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </g>
          <g data-name="telephone-base" transform="translate(130, 20)">
            <path d="M 0 20 C 10 10 40 10 50 20 L 55 40 L -5 40 Z" fill="rgba(0,0,0,0.5)" />
            <circle cx="25" cy="25" r="8" fill="rgba(255,255,255,0.1)" />
          </g>
          <path data-name="phone-cord" d="M 125 35 C 100 40 120 70 80 80 C 60 85 70 100 50 95" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="3" strokeDasharray="2 2" />
          <g data-name="handset" transform="translate(30, 85) rotate(-30)">
            <rect x="0" y="0" width="40" height="12" rx="6" fill="rgba(0,0,0,0.8)" />
            <circle cx="6" cy="6" r="8" fill="rgba(0,0,0,0.9)" />
            <circle cx="34" cy="6" r="8" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="inhaler" transform="translate(110, 80) rotate(15)">
            <path d="M 0 0 L 12 0 L 12 25 L 0 25 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M -5 15 L 12 15 L 12 25 L -5 25 Z" fill="#e8b34a" opacity="0.8" />
            <rect x="2" y="-10" width="8" height="15" rx="4" fill="rgba(255,255,255,0.5)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'bolam-v-friern-barnet':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="hospital-wall">
            <rect x="0" y="0" width="200" height="70" fill="rgba(255,255,255,0.05)" />
            <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          <g data-name="gurney">
            <rect x="20" y="60" width="140" height="12" rx="4" fill="#f4e9d8" opacity="0.8" />
            <rect x="25" y="72" width="130" height="4" fill="rgba(0,0,0,0.3)" />
            <rect x="35" y="76" width="6" height="44" fill="rgba(0,0,0,0.4)" />
            <rect x="135" y="76" width="6" height="44" fill="rgba(0,0,0,0.4)" />
            <circle cx="38" cy="115" r="6" fill="rgba(0,0,0,0.8)" />
            <circle cx="138" cy="115" r="6" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="unfastened-straps">
            <path d="M 60 72 C 60 90 40 100 50 110" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="4" />
            <path d="M 100 72 C 100 85 120 90 110 105" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="4" />
            <rect x="47" y="105" width="6" height="8" fill="#e8b34a" />
          </g>
          <g data-name="ect-machine" transform="translate(160, 40)">
            <rect x="0" y="0" width="30" height="40" rx="2" fill="rgba(0,0,0,0.6)" />
            <circle cx="15" cy="10" r="4" fill="#f4e9d8" opacity="0.5" />
            <line x1="5" y1="25" x2="25" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </g>
          <path data-name="ect-cap" d="M 150 72 C 145 60 160 55 165 65 C 160 70 155 75 150 72 Z" fill="rgba(0,0,0,0.7)" />
          <path data-name="wires" d="M 158 68 C 160 80 165 80 170 70" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="1.5" />
          {vignetteLayer}
        </svg>
      );

    case 'bolitho-v-city-and-hackney':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="ward-background">
            <path d="M 0 50 L 200 50" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
            <circle cx="150" cy="30" r="15" fill="#f4e9d8" opacity="0.1" filter="url(#soft-glow)" />
          </g>
          <g data-name="cot-rails">
            <rect x="20" y="40" width="160" height="6" rx="3" fill="#f4e9d8" opacity="0.7" />
            <rect x="20" y="90" width="160" height="8" rx="4" fill="#f4e9d8" opacity="0.6" />
            {Array.from({ length: 7 }).map((_, i) => (
              <rect key={i} x={35 + i * 22} y="46" width="4" height="44" fill="rgba(255,255,255,0.3)" />
            ))}
          </g>
          <g data-name="mattress">
            <rect x="10" y="95" width="180" height="25" rx="5" fill="rgba(255,255,255,0.15)" />
            <path d="M 20 95 L 40 85 L 60 95 Z" fill="rgba(0,0,0,0.2)" />
          </g>
          <g data-name="stethoscope" transform="translate(115, 35)">
            <path d="M 0 0 C -10 -15 -20 0 -10 10 C 0 20 0 40 -15 50" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="3" />
            <path d="M -10 10 C -5 20 -25 30 -15 50" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="3" />
            <circle cx="-16" cy="52" r="5" fill="#e8b34a" />
            <rect x="-1" y="-2" width="4" height="6" fill="#f4e9d8" />
            <rect x="-17" y="-2" width="4" height="6" fill="#f4e9d8" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'nettleship-v-weston':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="street-scene">
            <polygon points="0,90 200,80 200,120 0,120" fill="rgba(0,0,0,0.2)" />
            <polygon points="0,95 200,85 200,120 0,120" fill="rgba(0,0,0,0.3)" />
          </g>
          <g data-name="buckled-lamp-post">
            <path d="M 140 0 L 140 60 C 140 70 150 75 145 85 L 145 90 L 135 90 L 135 85 C 135 75 130 70 130 60 L 130 0 Z" fill="rgba(0,0,0,0.6)" />
            <rect x="130" y="85" width="20" height="5" fill="rgba(0,0,0,0.8)" />
            <path d="M 125 0 L 145 0 L 145 5 L 125 5 Z" fill="rgba(0,0,0,0.7)" />
          </g>
          <g data-name="l-plate" transform="translate(70, 95) rotate(-15)">
            <rect x="0" y="0" width="30" height="30" fill="#f4e9d8" opacity="0.9" />
            <polygon points="5,5 12,5 12,20 25,20 25,25 5,25" fill="#e8b34a" opacity="0.9" />
            <circle cx="3" cy="3" r="1" fill="rgba(0,0,0,0.5)" />
            <circle cx="27" cy="3" r="1" fill="rgba(0,0,0,0.5)" />
            <circle cx="3" cy="27" r="1" fill="rgba(0,0,0,0.5)" />
            <circle cx="27" cy="27" r="1" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="debris">
            <polygon points="120,95 125,92 128,96" fill="rgba(0,0,0,0.5)" />
            <polygon points="155,90 160,88 162,91" fill="rgba(0,0,0,0.5)" />
            <circle cx="115" cy="100" r="1" fill="rgba(255,255,255,0.2)" />
            <circle cx="150" cy="95" r="1" fill="rgba(255,255,255,0.2)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'bolton-v-stone':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="sky-and-trees">
            <path d="M 0 70 Q 30 40 60 60 T 120 50 T 200 65 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.2)" />
            <path d="M 0 80 Q 40 50 80 70 T 150 60 T 200 80 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.3)" />
          </g>
          <g data-name="tall-fence">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.6)" />
            {Array.from({ length: 21 }).map((_, i) => (
              <line key={i} x1={i * 10} y1="80" x2={i * 10} y2="120" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
            ))}
            <line x1="0" y1="90" x2="200" y2="90" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
            <line x1="0" y1="110" x2="200" y2="110" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
          </g>
          <g data-name="cricket-ball-arc">
            <path d="M 20 120 Q 80 10 160 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="160" cy="40" r="4" fill="#e8b34a" />
            <path d="M 158 37 Q 160 40 162 43" fill="none" stroke="#f4e9d8" strokeWidth="1" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'latimer-v-aec':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="factory-floor">
            <polygon points="0,50 200,50 200,120 0,120" fill="rgba(0,0,0,0.2)" />
            <line x1="40" y1="50" x2="0" y2="120" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            <line x1="100" y1="50" x2="100" y2="120" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            <line x1="160" y1="50" x2="200" y2="120" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
          </g>
          <g data-name="factory-pillars">
            <rect x="20" y="0" width="15" height="60" fill="rgba(0,0,0,0.4)" />
            <rect x="160" y="0" width="20" height="70" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="oil-slicks">
            <path d="M 60 80 Q 90 70 120 85 T 150 90 Q 110 100 80 95 T 60 80 Z" fill="rgba(0,0,0,0.6)" filter="url(#soft-glow)" />
            <path d="M 20 95 Q 40 90 50 100 T 25 110 Z" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="sawdust">
            <circle cx="85" cy="82" r="1.5" fill="#e8b34a" opacity="0.8" />
            <circle cx="95" cy="85" r="1" fill="#e8b34a" opacity="0.9" />
            <circle cx="110" cy="80" r="1.5" fill="#e8b34a" opacity="0.7" />
            <circle cx="105" cy="90" r="1" fill="#e8b34a" opacity="0.8" />
            <circle cx="130" cy="87" r="1.5" fill="#e8b34a" opacity="0.9" />
            <circle cx="125" cy="92" r="1" fill="#e8b34a" opacity="0.8" />
            <circle cx="70" cy="88" r="1" fill="#e8b34a" opacity="0.7" />
            <circle cx="35" cy="100" r="1.5" fill="#e8b34a" opacity="0.8" />
            <circle cx="45" cy="98" r="1" fill="#e8b34a" opacity="0.7" />
            <path d="M 80 85 L 100 82 M 110 88 L 130 85 M 95 92 L 120 90" stroke="#f4e9d8" strokeWidth="1" opacity="0.5" strokeDasharray="1 3" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'barnett-v-chelsea':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="hospital-corridor">
            <rect x="0" y="0" width="200" height="80" fill="rgba(0,0,0,0.1)" />
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.2)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          </g>
          <g data-name="flickering-sign" transform="translate(70, 10)">
            <rect x="0" y="0" width="60" height="25" rx="2" fill="rgba(0,0,0,0.8)" />
            <rect x="2" y="2" width="56" height="21" rx="1" fill="#f4e9d8" opacity="0.15" filter="url(#soft-glow)" />
            <path d="M 15 17 L 20 8 L 25 17 M 18 14 L 22 14" stroke="#e8b34a" strokeWidth="2" fill="none" opacity="0.8" filter="url(#soft-glow)" />
            <path d="M 35 15 L 32 17 Q 28 15 32 10 Q 36 10 38 12 M 30 11 L 37 17 M 35 8 C 38 6 42 10 38 13" stroke="#e8b34a" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M 45 8 L 45 17 M 45 8 L 52 8 M 45 12 L 50 12 M 45 17 L 52 17" stroke="#e8b34a" strokeWidth="2" fill="none" opacity="0.8" filter="url(#soft-glow)" />
          </g>
          <g data-name="bench">
            <rect x="20" y="65" width="160" height="5" rx="1" fill="rgba(0,0,0,0.5)" />
            <rect x="20" y="70" width="160" height="15" rx="2" fill="rgba(0,0,0,0.4)" />
            <rect x="30" y="85" width="5" height="35" fill="rgba(0,0,0,0.6)" />
            <rect x="165" y="85" width="5" height="35" fill="rgba(0,0,0,0.6)" />
            <line x1="25" y1="75" x2="175" y2="75" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="25" y1="80" x2="175" y2="80" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          </g>
          <g data-name="three-teacups">
            <path d="M 80 65 C 80 70 90 70 90 65 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M 90 66 C 93 66 93 68 90 68" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M 95 65 C 95 70 105 70 105 65 Z" fill="#f4e9d8" opacity="0.9" />
            <path d="M 105 66 C 108 66 108 68 105 68" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M 115 68 C 112 65 118 60 122 65 Z" fill="#f4e9d8" opacity="0.8" />
            <path d="M 119 62 C 122 61 124 63 121 64" fill="none" stroke="#f4e9d8" strokeWidth="1" />
            <path d="M 110 68 Q 120 72 130 68" fill="none" stroke="#e8b34a" strokeWidth="2" opacity="0.6" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'wagon-mound-no-1':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="harbour-water">
            <rect x="0" y="60" width="200" height="60" fill="rgba(0,0,0,0.2)" />
            <path d="M 0 70 Q 50 65 100 70 T 200 70 M 0 85 Q 50 80 100 85 T 200 85" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </g>
          <g data-name="oil-slick">
            <path d="M 30 90 C 70 80 120 100 160 85 C 180 95 140 110 90 115 C 40 110 10 100 30 90 Z" fill="rgba(0,0,0,0.7)" />
            <path d="M 50 95 C 80 90 110 100 130 95 C 110 105 70 105 50 95 Z" fill="#e8b34a" opacity="0.2" filter="url(#soft-glow)" />
            <path d="M 70 100 C 90 98 100 102 110 100" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" fill="none" />
          </g>
          <g data-name="wharf">
            <rect x="120" y="0" width="80" height="40" fill="rgba(0,0,0,0.6)" />
            <rect x="130" y="40" width="10" height="80" fill="rgba(0,0,0,0.7)" />
            <rect x="170" y="40" width="10" height="80" fill="rgba(0,0,0,0.8)" />
            <path d="M 120 40 L 200 40 L 200 45 L 120 45 Z" fill="rgba(0,0,0,0.5)" />
            <line x1="120" y1="40" x2="200" y2="40" stroke="#f4e9d8" strokeWidth="1" opacity="0.3" />
          </g>
          <g data-name="welder">
            <path d="M 150 40 L 150 25 C 150 20 160 20 160 25 L 160 40 Z" fill="rgba(0,0,0,0.9)" />
            <rect x="148" y="15" width="14" height="12" rx="2" fill="rgba(0,0,0,0.95)" />
            <path d="M 150 30 L 140 35 L 145 40" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
          </g>
          <g data-name="welding-sparks">
            <circle cx="140" cy="35" r="4" fill="#f4e9d8" filter="url(#soft-glow)" />
            <path d="M 140 35 L 130 50 M 140 35 L 135 55 M 140 35 L 125 45 M 140 35 L 120 50 M 140 35 L 145 60 M 140 35 L 150 55" stroke="#e8b34a" strokeWidth="1" strokeDasharray="2 2" filter="url(#soft-glow)" />
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'hughes-v-lord-advocate':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="street-lamp">
            <rect x="30" y="20" width="4" height="100" fill="rgba(0,0,0,0.8)" />
            <path d="M 25 15 L 39 15 L 37 5 L 27 5 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="32" cy="10" r="10" fill="#f4e9d8" opacity="0.4" filter="url(#soft-glow)" />
            <circle cx="32" cy="10" r="5" fill="#f4e9d8" opacity="0.8" filter="url(#soft-glow)" />
            <polygon points="20,15 44,15 32,25" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="cobblestones">
            <path d="M 0 90 L 200 90 M 0 100 L 200 100 M 0 110 L 200 110" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
          </g>
          <g data-name="manhole">
            <ellipse cx="120" cy="105" rx="35" ry="10" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="120" cy="106" rx="33" ry="8" fill="rgba(0,0,0,0.95)" />
            <path d="M 85 105 C 85 95 105 90 120 95 C 130 98 125 105 125 105 Z" fill="rgba(0,0,0,0.5)" />
          </g>
          <g data-name="paraffin-lamps">
            <g transform="translate(70, 95)">
              <rect x="-6" y="-15" width="12" height="15" fill="rgba(0,0,0,0.7)" />
              <path d="M -8 0 L 8 0 L 6 -5 L -6 -5 Z" fill="rgba(0,0,0,0.8)" />
              <circle cx="0" cy="-10" r="4" fill="#e8b34a" opacity="0.9" filter="url(#soft-glow)" />
              <path d="M -4 -15 C -8 -25 8 -25 4 -15" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1" />
            </g>
            <g transform="translate(165, 100)">
              <rect x="-6" y="-15" width="12" height="15" fill="rgba(0,0,0,0.7)" />
              <path d="M -8 0 L 8 0 L 6 -5 L -6 -5 Z" fill="rgba(0,0,0,0.8)" />
              <circle cx="0" cy="-10" r="4" fill="#e8b34a" opacity="0.9" filter="url(#soft-glow)" />
              <path d="M -4 -15 C -8 -25 8 -25 4 -15" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1" />
            </g>
          </g>
          {vignetteLayer}
        </svg>
      );

    case 'wheat-v-lacon':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="staircase">
            <path d="M 0 120 L 40 120 L 40 100 L 60 100 L 60 80 L 80 80 L 80 60 L 100 60 L 100 40 L 120 40 L 120 20 L 140 20 L 140 0 L 200 0 L 200 120 Z" fill="rgba(0,0,0,0.6)" />
            <path d="M 40 120 L 40 100 L 60 100 L 60 80 L 80 80 L 80 60 L 100 60 L 100 40 L 120 40 L 120 20 L 140 20 L 140 0" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 0 120 L 40 120 M 40 100 L 60 100 M 60 80 L 80 80 M 80 60 L 100 60 M 100 40 L 120 40 M 120 20 L 140 20" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
          </g>
          <g data-name="pub-sign">
            <rect x="20" y="5" width="40" height="25" rx="2" fill="rgba(0,0,0,0.9)" />
            <rect x="22" y="7" width="36" height="21" rx="1" fill="none" stroke="#e8b34a" strokeWidth="1" opacity="0.6" />
            <path d="M 32 15 L 48 15 M 36 20 L 44 20" stroke="#f4e9d8" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
            <path d="M 40 0 L 40 5" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </g>
          <g data-name="guest-silhouette">
            <path d="M 50 85 C 50 80 54 80 54 85 C 54 90 58 92 56 100 L 48 100 C 46 92 50 90 50 85 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="52" cy="77" r="4" fill="rgba(0,0,0,0.9)" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'roles-v-nathan':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="boiler">
            <rect x="120" y="20" width="60" height="100" fill="rgba(0,0,0,0.8)" />
            <rect x="115" y="10" width="70" height="10" fill="rgba(0,0,0,0.9)" />
            <path d="M 140 20 L 140 0 M 160 20 L 160 0" stroke="rgba(0,0,0,0.9)" strokeWidth="8" />
            <circle cx="150" cy="80" r="15" fill="rgba(0,0,0,0.95)" />
            <circle cx="150" cy="80" r="10" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.8" />
            <path d="M 145 85 L 155 75 L 150 80 L 155 85 Z" fill="#f4e9d8" opacity="0.9" />
          </g>
          <g data-name="smoke">
            <path d="M 150 10 C 140 -5 160 -10 150 -20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" filter="url(#soft-glow)" opacity="0.5" />
            <path d="M 135 15 C 120 0 140 -10 130 -20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" filter="url(#soft-glow)" opacity="0.4" />
          </g>
          <g data-name="chimney-sweep">
            <path d="M 90 90 C 90 75 105 75 105 90 L 105 120 L 85 120 C 85 110 90 100 90 90 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="97" cy="65" r="8" fill="rgba(0,0,0,0.9)" />
            <path d="M 105 85 L 120 70 M 115 75 L 125 65 M 112 72 L 122 62" stroke="rgba(0,0,0,0.9)" strokeWidth="2" />
            <circle cx="123" cy="67" r="5" fill="rgba(0,0,0,0.9)" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'phipps-v-rochester':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="background-site">
            <path d="M 0 60 L 200 60" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <path d="M 20 60 L 40 30 L 70 60 Z" fill="rgba(0,0,0,0.3)" />
            <path d="M 140 60 L 160 20 L 180 60 Z" fill="rgba(0,0,0,0.2)" />
            <path d="M 80 60 L 80 20 M 120 60 L 120 20 M 80 40 L 120 40" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <path d="M 75 20 L 125 20" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          <g data-name="trench">
            <rect x="0" y="90" width="200" height="30" fill="rgba(0,0,0,0.8)" />
            <path d="M 0 90 L 200 90" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <path d="M 10 90 L 30 120 M 30 90 L 50 120 M 50 90 L 70 120 M 70 90 L 90 120 M 90 90 L 110 120 M 110 90 L 130 120 M 130 90 L 150 120 M 150 90 L 170 120 M 170 90 L 190 120 M 190 90 L 210 120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M -10 120 L 10 90 M 10 120 L 30 90 M 30 120 L 50 90 M 50 120 L 70 90 M 70 120 L 90 90 M 90 120 L 110 90 M 110 120 L 130 90 M 130 120 L 150 90 M 150 120 L 170 90 M 170 120 L 190 90 M 190 120 L 210 90" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          </g>
          <g data-name="children">
            <path d="M 100 70 C 100 60 110 60 110 70 L 110 90 L 95 90 C 95 85 100 80 100 70 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="105" cy="55" r="5" fill="rgba(0,0,0,0.9)" />
            <path d="M 120 75 C 120 68 128 68 128 75 L 128 90 L 116 90 C 116 85 120 80 120 75 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="124" cy="62" r="4" fill="rgba(0,0,0,0.9)" />
            <path d="M 108 70 C 112 75 116 75 121 72" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'glasgow-corp-v-taylor':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="park-railing">
            <path d="M 0 80 L 200 80 M 0 30 L 200 30" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
            <path d="M 20 20 L 20 120 M 60 20 L 60 120 M 100 20 L 100 120 M 140 20 L 140 120 M 180 20 L 180 120" stroke="rgba(0,0,0,0.4)" strokeWidth="3" />
            <path d="M 20 20 L 25 10 L 15 10 Z M 60 20 L 65 10 L 55 10 Z M 100 20 L 105 10 L 95 10 Z M 140 20 L 145 10 L 135 10 Z M 180 20 L 185 10 L 175 10 Z" fill="rgba(0,0,0,0.4)" />
          </g>
          <g data-name="shrub">
            <path d="M 50 120 C 30 90 20 50 60 40 C 90 30 110 50 120 80 C 130 110 90 120 50 120 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 60 120 C 50 100 70 80 90 120 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="50" cy="60" r="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <circle cx="56" cy="56" r="3" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <circle cx="44" cy="64" r="3" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <circle cx="80" cy="50" r="4" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
            <circle cx="85" cy="55" r="3" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
            <circle cx="75" cy="55" r="3" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
            <circle cx="100" cy="80" r="4" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <circle cx="106" cy="84" r="3" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
            <circle cx="94" cy="84" r="3" fill="#e8b34a" filter="url(#soft-glow)" opacity="0.9" />
          </g>
          <g data-name="child-reaching">
            <path d="M 140 100 C 140 85 150 85 150 100 L 150 120 L 135 120 C 135 110 140 105 140 100 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="145" cy="75" r="6" fill="rgba(0,0,0,0.9)" />
            <path d="M 142 85 C 130 75 115 80 110 85" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="3" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'jolley-v-sutton':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="ground">
            <path d="M 0 100 Q 50 90 100 105 T 200 95 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.5)" />
            <path d="M 20 100 L 15 90 M 22 102 L 25 88 M 25 100 L 28 92" stroke="rgba(0,0,0,0.7)" strokeWidth="1" fill="none" />
            <path d="M 170 95 L 165 85 M 172 97 L 175 83 M 175 95 L 178 87" stroke="rgba(0,0,0,0.7)" strokeWidth="1" fill="none" />
            <path d="M 140 105 L 135 95 M 142 107 L 145 93 M 145 105 L 148 97" stroke="rgba(0,0,0,0.7)" strokeWidth="1" fill="none" />
          </g>
          <g data-name="jack">
            <rect x="70" y="85" width="10" height="20" fill="rgba(0,0,0,0.8)" />
            <rect x="65" y="105" width="20" height="5" fill="rgba(0,0,0,0.9)" />
            <path d="M 75 85 L 85 65" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
          </g>
          <g data-name="boat">
            <path d="M 30 110 C 20 80 40 40 100 35 C 160 40 180 80 170 110 C 150 90 50 90 30 110 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 40 100 C 40 70 60 50 100 45 C 140 50 160 70 160 100 C 140 85 60 85 40 100 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 50 50 L 150 50 M 45 60 L 155 60 M 40 70 L 160 70 M 35 80 L 165 80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 100 35 L 100 100" stroke="rgba(0,0,0,0.95)" strokeWidth="2" />
          </g>
          <g data-name="teenage-figure">
            <path d="M 120 105 C 120 95 135 95 135 105 L 135 115 L 115 115 C 115 110 120 110 120 105 Z" fill="rgba(0,0,0,0.95)" />
            <circle cx="127" cy="90" r="6" fill="rgba(0,0,0,0.95)" />
            <path d="M 120 98 C 110 95 100 100 95 105" fill="none" stroke="rgba(0,0,0,0.95)" strokeWidth="3" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'tomlinson-v-congleton':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="lake">
            <rect x="0" y="80" width="200" height="40" fill="rgba(0,0,0,0.6)" />
            <path d="M 0 85 L 200 85 M 0 95 L 200 95 M 0 105 L 200 105" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <ellipse cx="120" cy="85" rx="30" ry="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <ellipse cx="120" cy="85" rx="15" ry="1.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </g>
          <g data-name="no-swimming-sign">
            <rect x="25" y="60" width="4" height="40" fill="rgba(0,0,0,0.8)" />
            <circle cx="27" cy="40" r="20" fill="#f4e9d8" opacity="0.8" filter="url(#soft-glow)" />
            <circle cx="27" cy="40" r="18" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <path d="M 18 45 C 22 40 28 40 32 45 C 36 50 40 50 44 45 L 36 30 C 30 35 24 35 20 30 Z" fill="rgba(0,0,0,0.9)" />
            <circle cx="34" cy="28" r="4" fill="rgba(0,0,0,0.9)" />
            <path d="M 15 28 L 39 52" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
          </g>
          <g data-name="diver">
            <path d="M 120 40 C 130 35 140 45 135 55 C 130 65 120 60 110 50 C 100 40 110 30 120 40 Z" fill="rgba(0,0,0,0.9)" transform="rotate(-30 120 50)" />
            <circle cx="105" cy="50" r="5" fill="rgba(0,0,0,0.9)" />
            <path d="M 120 40 L 135 30 M 125 45 L 140 35" stroke="rgba(0,0,0,0.9)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 115 52 L 100 65 M 120 55 L 105 70" stroke="rgba(0,0,0,0.9)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'ratcliff-v-mcconnell':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="night-sky">
            <circle cx="170" cy="30" r="15" fill="#f4e9d8" filter="url(#soft-glow)" opacity="0.8" />
            <circle cx="165" cy="25" r="15" fill="rgba(0,0,0,0.8)" />
          </g>
          <g data-name="pool-tiles">
            <rect x="50" y="80" width="150" height="40" fill="rgba(0,0,0,0.7)" />
            <path d="M 50 90 L 200 90 M 50 100 L 200 100 M 50 110 L 200 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 80 80 L 80 120 M 110 80 L 110 120 M 140 80 L 140 120 M 170 80 L 170 120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 60 80 L 200 80" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
          </g>
          <g data-name="fence-and-gate">
            <rect x="45" y="20" width="5" height="100" fill="rgba(0,0,0,0.9)" />
            <path d="M 0 40 L 45 40 M 0 70 L 45 70" stroke="rgba(0,0,0,0.9)" strokeWidth="3" />
            <path d="M 10 20 L 10 120 M 20 20 L 20 120 M 30 20 L 30 120 M 40 20 L 40 120" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <circle cx="48" cy="55" r="4" fill="none" stroke="#e8b34a" strokeWidth="2" opacity="0.8" />
            <rect x="46" y="58" width="4" height="6" fill="#e8b34a" opacity="0.8" />
          </g>
          <g data-name="swimmer">
            <path d="M 120 40 C 130 35 140 45 135 55 C 130 65 120 60 110 50 C 100 40 110 30 120 40 Z" fill="rgba(0,0,0,0.95)" transform="rotate(-40 120 50)" />
            <circle cx="108" cy="45" r="5" fill="rgba(0,0,0,0.95)" />
            <path d="M 120 40 L 135 35 M 125 45 L 140 40" stroke="rgba(0,0,0,0.95)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 115 52 L 100 65 M 120 55 L 105 70" stroke="rgba(0,0,0,0.95)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'keown-v-coventry':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="hospital-window">
            <rect x="20" y="10" width="60" height="100" fill="rgba(255,255,255,0.05)" />
            <rect x="20" y="10" width="60" height="100" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="4" />
            <path d="M 20 40 L 80 40 M 20 70 L 80 70" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <path d="M 50 10 L 50 100" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          <g data-name="fire-escape">
            <path d="M 160 0 L 160 120 M 110 0 L 110 120" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <path d="M 110 20 L 160 50 L 110 80 L 160 110" stroke="rgba(0,0,0,0.8)" strokeWidth="6" strokeLinejoin="round" />
            <path d="M 120 0 L 120 120 M 150 0 L 150 120" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
            <path d="M 110 10 L 160 40 M 110 30 L 160 60 M 110 40 L 160 70 M 110 60 L 160 90 M 110 70 L 160 100 M 110 90 L 160 120" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
          </g>
          <g data-name="climber">
            <path d="M 135 95 C 135 85 145 85 145 95 L 145 105 L 125 105 C 125 100 130 98 135 95 Z" fill="rgba(0,0,0,0.95)" transform="rotate(-60 135 95)" />
            <circle cx="127" cy="87" r="4" fill="rgba(0,0,0,0.95)" />
            <path d="M 135 92 L 120 78" stroke="rgba(0,0,0,0.95)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 140 95 L 125 82" stroke="rgba(0,0,0,0.95)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 135 105 L 140 120" stroke="rgba(0,0,0,0.95)" strokeWidth="2" strokeLinecap="round" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'sturges-v-bridgman':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="consulting-room-window">
            <rect x="20" y="20" width="50" height="80" fill="rgba(255,255,255,0.05)" />
            <path d="M 30 20 L 30 100 M 45 20 L 45 100 M 60 20 L 60 100" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <path d="M 20 60 L 70 60 M 20 40 L 70 40 M 20 80 L 70 80" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <path d="M 40 40 L 40 80" stroke="#000" strokeWidth="2" />
            <circle cx="40" cy="35" r="4" fill="#000" />
            <path d="M 35 75 Q 40 85 45 75" stroke="#000" strokeWidth="2" fill="none" />
            <circle cx="35" cy="73" r="2" fill="#000" />
            <circle cx="45" cy="73" r="2" fill="#000" />
          </g>
          <g data-name="confectioners-kitchen">
            <rect x="90" y="40" width="90" height="80" fill="rgba(0,0,0,0.7)" />
            <rect x="130" y="10" width="10" height="30" fill="rgba(0,0,0,0.8)" />
            <path d="M 130 10 L 140 10" stroke="#e8b34a" strokeWidth="2" />
            <path d="M 135 5 Q 130 -5 135 -15" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
            <path d="M 140 0 Q 145 -10 140 -20" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            <path d="M 110 80 L 140 80 L 135 100 L 115 100 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 130 60 L 125 90" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <path d="M 85 50 Q 80 55 85 60" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
            <path d="M 80 65 Q 75 70 80 75" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
            <path d="M 85 80 Q 80 85 85 90" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'miller-v-jackson':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="cricket-pavilion">
            <polygon points="10,100 10,70 40,55 70,70 70,100" fill="rgba(0,0,0,0.8)" />
            <rect x="25" y="75" width="30" height="25" fill="rgba(255,255,255,0.1)" />
            <path d="M 40 55 L 40 35" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <polygon points="40,35 50,40 40,45" fill="#e8b34a" />
          </g>
          <g data-name="new-build-houses">
            <polygon points="130,100 130,60 160,40 190,60 190,100" fill="rgba(0,0,0,0.7)" />
            <rect x="145" y="65" width="10" height="10" fill="rgba(255,255,255,0.1)" />
            <rect x="165" y="65" width="10" height="10" fill="rgba(255,255,255,0.1)" />
            <rect x="155" y="80" width="10" height="20" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="cricket-ball">
            <path d="M 60 70 Q 100 20 140 60" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <circle cx="100" cy="35" r="3" fill="#e8b34a" />
            <path d="M 95 38 L 92 41" stroke="#e8b34a" strokeWidth="1" />
            <path d="M 94 34 L 90 35" stroke="#e8b34a" strokeWidth="1" />
          </g>
          <g data-name="ground">
            <path d="M 0 100 L 200 100" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'coventry-v-lawrence':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="speedway-oval">
            <ellipse cx="70" cy="80" rx="50" ry="20" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="4" />
            <ellipse cx="70" cy="80" rx="40" ry="12" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <path d="M 30 70 L 30 30" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <polygon points="25,30 35,30 30,25" fill="#e8b34a" />
            <path d="M 25 30 L 20 40 L 40 40 L 35 30 Z" fill="rgba(255,255,255,0.2)" />
            <path d="M 110 70 L 110 40" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
            <polygon points="105,40 115,40 110,35" fill="#e8b34a" />
            <path d="M 105 40 L 100 50 L 120 50 L 115 40 Z" fill="rgba(255,255,255,0.2)" />
            <path d="M 50 95 L 80 95" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="90" cy="95" r="4" fill="rgba(0,0,0,0.9)" />
            <circle cx="100" cy="95" r="4" fill="rgba(0,0,0,0.9)" />
            <path d="M 90 95 L 100 90 L 95 85 Z" fill="rgba(0,0,0,0.9)" />
          </g>
          <g data-name="distant-bungalow">
            <polygon points="150,80 150,70 165,60 180,70 180,80" fill="rgba(0,0,0,0.8)" />
            <rect x="160" y="72" width="10" height="8" fill="rgba(0,0,0,0.9)" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'christie-v-davey':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="party-wall">
            <rect x="95" y="10" width="10" height="100" fill="rgba(0,0,0,0.8)" />
            <path d="M 95 30 L 105 30 M 95 50 L 105 50 M 95 70 L 105 70 M 95 90 L 105 90" stroke="rgba(0,0,0,0.9)" strokeWidth="1" />
          </g>
          <g data-name="musical-side">
            <rect x="20" y="80" width="60" height="15" fill="rgba(0,0,0,0.7)" />
            <path d="M 30 80 L 30 88 M 40 80 L 40 88 M 50 80 L 50 88 M 60 80 L 60 88 M 70 80 L 70 88" stroke="rgba(0,0,0,0.9)" strokeWidth="2" />
            <path d="M 40 60 L 40 40 L 50 45 L 50 42 L 40 37" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
            <circle cx="38" cy="60" r="3" fill="rgba(255,255,255,0.6)" />
            <circle cx="48" cy="62" r="3" fill="rgba(255,255,255,0.6)" />
            <path d="M 60 50 L 60 30" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            <circle cx="58" cy="50" r="3" fill="rgba(255,255,255,0.6)" />
          </g>
          <g data-name="banging-side">
            <path d="M 170 50 C 160 50 150 40 145 45 C 140 50 145 60 150 65 L 170 70 Z" fill="rgba(0,0,0,0.9)" />
            <rect x="170" y="45" width="20" height="25" fill="rgba(0,0,0,0.9)" />
            <path d="M 120 70 L 160 30" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <path d="M 115 50 Q 110 60 115 70" stroke="#e8b34a" strokeWidth="2" fill="none" />
            <path d="M 125 40 Q 115 55 125 70" stroke="#e8b34a" strokeWidth="2" fill="none" />
            <path d="M 135 30 Q 120 50 135 70" stroke="#e8b34a" strokeWidth="2" fill="none" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'robinson-v-kilvert':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="warehouse-structure">
            <rect x="30" y="10" width="140" height="100" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <path d="M 30 60 L 170 60" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <path d="M 100 10 L 100 110" stroke="rgba(0,0,0,0.4)" strokeWidth="2" strokeDasharray="5 5" />
          </g>
          <g data-name="upper-floor">
            <rect x="40" y="40" width="40" height="20" fill="rgba(255,255,255,0.4)" />
            <path d="M 40 45 L 80 45 M 40 50 L 80 50 M 40 55 L 80 55" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <circle cx="120" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <circle cx="120" cy="50" r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <path d="M 130 50 L 160 50" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <path d="M 130 60 L 160 60" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <circle cx="140" cy="40" r="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          </g>
          <g data-name="lower-floor">
            <rect x="80" y="80" width="40" height="30" fill="rgba(0,0,0,0.9)" />
            <rect x="90" y="90" width="20" height="10" fill="#e8b34a" />
            <path d="M 100 80 L 100 60" stroke="rgba(0,0,0,0.9)" strokeWidth="6" />
            <path d="M 85 75 Q 80 70 85 65" stroke="#e8b34a" strokeWidth="1.5" fill="none" />
            <path d="M 90 70 Q 85 65 90 60" stroke="#e8b34a" strokeWidth="1.5" fill="none" />
            <path d="M 115 75 Q 120 70 115 65" stroke="#e8b34a" strokeWidth="1.5" fill="none" />
            <path d="M 110 70 Q 115 65 110 60" stroke="#e8b34a" strokeWidth="1.5" fill="none" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'network-rail-v-morris':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="railway-signal">
            <rect x="20" y="20" width="20" height="90" fill="rgba(0,0,0,0.8)" />
            <rect x="15" y="25" width="30" height="60" fill="rgba(0,0,0,0.9)" rx="5" />
            <circle cx="30" cy="35" r="6" fill="#e8b34a" />
            <circle cx="30" cy="55" r="6" fill="rgba(255,255,255,0.2)" />
            <circle cx="30" cy="75" r="6" fill="rgba(255,255,255,0.2)" />
          </g>
          <g data-name="recording-studio">
            <rect x="120" y="20" width="60" height="90" fill="rgba(255,255,255,0.05)" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />
            <rect x="125" y="25" width="50" height="80" fill="rgba(255,255,255,0.1)" />
            <ellipse cx="150" cy="65" rx="10" ry="15" fill="rgba(0,0,0,0.8)" />
            <ellipse cx="150" cy="80" rx="14" ry="18" fill="rgba(0,0,0,0.8)" />
            <path d="M 148 25 L 152 25 L 152 55 L 148 55 Z" fill="rgba(0,0,0,0.8)" />
            <path d="M 130 50 L 170 50 M 130 55 L 170 55 M 130 60 L 170 60" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
          </g>
          <g data-name="interference">
            <path d="M 50 55 L 60 30 L 75 70 L 90 40 L 105 65 L 115 55" stroke="#e8b34a" strokeWidth="2" fill="none" />
            <path d="M 50 45 L 65 20 L 80 60 L 95 30 L 110 55 L 115 45" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'hunter-v-canary-wharf':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="canary-wharf-tower">
            <polygon points="120,10 180,10 180,120 120,120" fill="rgba(0,0,0,0.9)" />
            <polygon points="120,10 150,-10 180,10" fill="rgba(0,0,0,0.9)" />
            <path d="M 130 10 L 130 120 M 140 10 L 140 120 M 150 10 L 150 120 M 160 10 L 160 120 M 170 10 L 170 120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 120 20 L 180 20 M 120 40 L 180 40 M 120 60 L 180 60 M 120 80 L 180 80 M 120 100 L 180 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
          <g data-name="apartment-windows">
            <rect x="20" y="40" width="70" height="80" fill="rgba(0,0,0,0.7)" />
            <rect x="25" y="45" width="25" height="30" fill="rgba(255,255,255,0.1)" />
            <rect x="60" y="45" width="25" height="30" fill="rgba(255,255,255,0.1)" />
            <rect x="25" y="85" width="25" height="30" fill="rgba(255,255,255,0.1)" />
            <rect x="60" y="85" width="25" height="30" fill="rgba(255,255,255,0.1)" />
            <rect x="65" y="95" width="15" height="10" fill="rgba(255,255,255,0.3)" />
            <path d="M 65 95 L 80 105 M 65 100 L 80 100 M 65 105 L 80 95" stroke="rgba(0,0,0,0.5)" strokeWidth="0.5" />
            <path d="M 110 50 L 95 60 L 105 70" stroke="#e8b34a" strokeWidth="1.5" fill="none" />
            <path d="M 105 60 L 95 65 L 100 70" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'rylands-v-fletcher':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="landscape">
            <path d="M 0 50 Q 50 50 80 40 Q 120 30 160 50 Q 180 60 200 60 L 200 120 L 0 120 Z" fill="rgba(0,0,0,0.7)" />
          </g>
          <g data-name="reservoir">
            <rect x="60" y="20" width="80" height="20" fill="rgba(255,255,255,0.1)" />
            <path d="M 60 20 L 60 40 M 140 20 L 140 35" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <path d="M 140 35 L 145 38 L 138 42 L 142 45" stroke="rgba(0,0,0,0.9)" strokeWidth="2" fill="none" />
            <path d="M 140 35 Q 160 35 160 60 Q 160 80 170 90" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none" />
            <path d="M 142 38 Q 158 38 158 60 Q 158 80 166 90" stroke="#e8b34a" strokeWidth="2" fill="none" />
          </g>
          <g data-name="victorian-mill">
            <rect x="20" y="10" width="30" height="40" fill="rgba(0,0,0,0.8)" />
            <polygon points="15,10 35,-5 55,10" fill="rgba(0,0,0,0.8)" />
            <rect x="40" y="-10" width="6" height="30" fill="rgba(0,0,0,0.9)" />
            <path d="M 43 -10 Q 50 -20 60 -15" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
          </g>
          <g data-name="mine-shaft">
            <rect x="150" y="80" width="30" height="40" fill="rgba(0,0,0,0.9)" />
            <path d="M 150 80 L 180 80 L 180 90 L 150 90 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M 155 90 L 155 120 M 175 90 L 175 120" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'cambridge-water-v-ecl':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="tannery-vat">
            <rect x="40" y="0" width="40" height="30" fill="rgba(0,0,0,0.8)" />
            <path d="M 35 0 L 85 0" stroke="rgba(0,0,0,0.9)" strokeWidth="4" />
            <path d="M 40 30 L 60 40 L 80 30" fill="rgba(0,0,0,0.8)" />
            <circle cx="60" cy="45" r="3" fill="#e8b34a" />
            <circle cx="60" cy="55" r="2.5" fill="#e8b34a" />
            <circle cx="60" cy="65" r="2" fill="#e8b34a" />
            <path d="M 60 70 L 60 100" stroke="#e8b34a" strokeWidth="1" strokeDasharray="2 4" />
          </g>
          <g data-name="chalk-strata">
            <path d="M 0 35 Q 100 45 200 35 L 200 65 Q 100 75 0 65 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M 0 65 Q 100 75 200 65 L 200 95 Q 100 105 0 95 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M 0 95 Q 100 105 200 95 L 200 120 L 0 120 Z" fill="rgba(255,255,255,0.15)" />
            <path d="M 60 45 Q 65 55 55 65" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" fill="none" />
            <path d="M 55 65 Q 45 75 65 85" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" fill="none" />
            <path d="M 65 85 Q 75 95 60 105" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" fill="none" />
          </g>
          <g data-name="borehole">
            <rect x="140" y="20" width="10" height="100" fill="rgba(0,0,0,0.7)" />
            <rect x="130" y="10" width="30" height="10" fill="rgba(0,0,0,0.9)" />
            <path d="M 145 100 Q 100 110 60 105" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          </g>
          {vignetteLayer}
        </svg>
      );
    case 'transco-v-stockport':
      return (
        <svg {...commonProps}>
          {defs}
          <g data-name="ground-cross-section">
            <rect x="0" y="50" width="200" height="70" fill="rgba(0,0,0,0.7)" />
            <rect x="120" y="10" width="40" height="40" fill="rgba(0,0,0,0.8)" />
            <rect x="125" y="15" width="8" height="8" fill="rgba(255,255,255,0.1)" />
            <rect x="145" y="15" width="8" height="8" fill="rgba(255,255,255,0.1)" />
            <rect x="125" y="30" width="8" height="8" fill="rgba(255,255,255,0.1)" />
            <rect x="145" y="30" width="8" height="8" fill="rgba(255,255,255,0.1)" />
          </g>
          <g data-name="eroded-embankment">
            <path d="M 20 50 Q 50 60 70 80 Q 50 100 20 120 L 0 120 L 0 50 Z" fill="rgba(0,0,0,0.9)" />
            <path d="M 20 50 L 50 60 L 70 80 L 50 100 L 20 120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
          </g>
          <g data-name="pipes">
            <rect x="0" y="70" width="80" height="15" fill="rgba(255,255,255,0.2)" />
            <path d="M 30 70 L 35 75 L 30 80 L 35 85" stroke="rgba(0,0,0,0.9)" strokeWidth="2" fill="none" />
            <path d="M 35 75 Q 50 60 60 90" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
            <path d="M 35 80 Q 40 90 50 110" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
            <rect x="0" y="95" width="60" height="8" fill="#e8b34a" />
            <path d="M 0 95 L 60 95" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
            <path d="M 0 103 L 60 103" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
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
