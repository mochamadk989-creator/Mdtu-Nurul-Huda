import React, { useEffect, useState } from 'react';
import { LogoConfig, DEFAULT_LOGO_CONFIG } from '../types/logo';

interface MdtuLogoProps {
  size?: number | string;
  className?: string;
  onClick?: () => void;
  showHomeTooltip?: boolean;
  config?: LogoConfig;
}

export const MdtuLogo: React.FC<MdtuLogoProps> = ({
  size = 64,
  className = '',
  onClick,
  showHomeTooltip = true,
  config: propConfig,
}) => {
  const [activeConfig, setActiveConfig] = useState<LogoConfig>(() => {
    if (propConfig) return propConfig;
    try {
      const saved = localStorage.getItem('mdtu_logo_config');
      return saved ? JSON.parse(saved) : DEFAULT_LOGO_CONFIG;
    } catch {
      return DEFAULT_LOGO_CONFIG;
    }
  });

  useEffect(() => {
    if (propConfig) {
      setActiveConfig(propConfig);
    } else {
      const handleStorage = () => {
        try {
          const saved = localStorage.getItem('mdtu_logo_config');
          if (saved) setActiveConfig(JSON.parse(saved));
        } catch {}
      };
      window.addEventListener('storage', handleStorage);
      return () => window.removeEventListener('storage', handleStorage);
    }
  }, [propConfig]);

  // Color schemes based on colorTheme
  const getColorScheme = (theme: LogoConfig['colorTheme']) => {
    switch (theme) {
      case 'sapphire-gold':
        return {
          bg0: '#143c72',
          bg60: '#0c2850',
          bg100: '#05142a',
          accent: '#1e40af',
        };
      case 'ruby-gold':
        return {
          bg0: '#731427',
          bg60: '#520b1a',
          bg100: '#2b040c',
          accent: '#991b1b',
        };
      case 'onyx-gold':
        return {
          bg0: '#242933',
          bg60: '#161920',
          bg100: '#0b0c10',
          accent: '#374151',
        };
      case 'emerald-gold':
      default:
        return {
          bg0: '#08523b',
          bg60: '#04432f',
          bg100: '#022c1e',
          accent: '#065f46',
        };
    }
  };

  const colors = getColorScheme(activeConfig.colorTheme);

  // If user uploaded a custom image logo
  if (activeConfig.mode === 'custom-image' && activeConfig.customImageUrl) {
    return (
      <div
        onClick={onClick}
        title={showHomeTooltip ? 'Klik Logo untuk Kembali ke Beranda' : undefined}
        className={`relative inline-flex items-center justify-center select-none overflow-hidden ${
          onClick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 group' : ''
        } ${className}`}
        style={{ width: size, height: size }}
      >
        <div
          className={`w-full h-full flex items-center justify-center p-1 relative border-2 border-amber-400 shadow-md ${
            activeConfig.shape === 'circle'
              ? 'rounded-full'
              : activeConfig.shape === 'octagram'
              ? 'rounded-2xl rotate-45 overflow-hidden'
              : 'rounded-xl'
          } bg-gradient-to-br from-amber-100 via-white to-amber-50`}
        >
          <img
            src={activeConfig.customImageUrl}
            alt="Logo MDTU"
            className={`w-full h-full object-contain ${
              activeConfig.shape === 'octagram' ? '-rotate-45' : ''
            }`}
          />
        </div>

        {showHomeTooltip && onClick && (
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-emerald-950 text-amber-300 text-[10px] font-bold border border-amber-400 shadow-lg z-50">
            Beranda
          </span>
        )}
      </div>
    );
  }

  // Preset Vector Logos
  return (
    <div
      onClick={onClick}
      title={showHomeTooltip ? 'Klik Logo untuk Kembali ke Beranda (Home)' : undefined}
      className={`relative inline-flex items-center justify-center select-none ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 group' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Main Background Radial Gradient */}
          <radialGradient id="baseBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.bg0} />
            <stop offset="60%" stopColor={colors.bg60} />
            <stop offset="100%" stopColor={colors.bg100} />
          </radialGradient>

          {/* Gold Metallic Gradients */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe27a" />
            <stop offset="25%" stopColor="#f5b83d" />
            <stop offset="50%" stopColor="#ffd868" />
            <stop offset="75%" stopColor="#b37b19" />
            <stop offset="100%" stopColor="#e5a82e" />
          </linearGradient>

          <linearGradient id="goldLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff2a1" />
            <stop offset="100%" stopColor="#c98a1a" />
          </linearGradient>

          <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Shield / Circle / Octagram Frame */}
        {activeConfig.shape === 'circle' ? (
          <>
            <circle
              cx="250"
              cy="250"
              r="230"
              fill="url(#baseBg)"
              stroke="url(#goldGradient)"
              strokeWidth="10"
              filter="url(#goldGlow)"
            />
            <circle
              cx="250"
              cy="250"
              r="215"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
            />
            <circle
              cx="250"
              cy="250"
              r="205"
              fill="none"
              stroke="url(#goldLight)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          </>
        ) : activeConfig.shape === 'octagram' ? (
          <>
            <path
              d="M250,20 L310,80 L395,45 L415,130 L500,165 L465,250 L500,335 L415,370 L395,455 L310,420 L250,480 L190,420 L105,455 L85,370 L0,335 L35,250 L0,165 L85,130 L105,45 L190,80 Z"
              fill="url(#baseBg)"
              stroke="url(#goldGradient)"
              strokeWidth="8"
              filter="url(#goldGlow)"
            />
            <circle cx="250" cy="250" r="195" fill="none" stroke="url(#goldLight)" strokeWidth="2.5" />
          </>
        ) : (
          /* Default Shield */
          <>
            <path
              d="M250,15 L465,145 L385,465 L115,465 L35,145 Z"
              fill="url(#baseBg)"
              stroke="url(#goldGradient)"
              strokeWidth="10"
              strokeLinejoin="round"
              filter="url(#goldGlow)"
            />
            <path
              d="M250,32 L448,154 L374,448 L126,448 L52,154 Z"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path
              d="M250,45 L435,160 L365,435 L135,435 L65,160 Z"
              fill="none"
              stroke="url(#goldLight)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {/* Corner Flourishes */}
            <circle cx="250" cy="30" r="5" fill="url(#goldGradient)" />
            <circle cx="450" cy="150" r="5" fill="url(#goldGradient)" />
            <circle cx="375" cy="450" r="5" fill="url(#goldGradient)" />
            <circle cx="125" cy="450" r="5" fill="url(#goldGradient)" />
            <circle cx="50" cy="150" r="5" fill="url(#goldGradient)" />
          </>
        )}

        {/* Arabic Calligraphy Header Arc */}
        <path id="arabicArc" d="M100,135 Q250,35 400,135" fill="none" />
        <text
          fill="url(#goldLight)"
          fontSize="22"
          fontWeight="bold"
          fontFamily="'Amiri', 'Scheherazade New', serif"
          textAnchor="middle"
        >
          <textPath href="#arabicArc" startOffset="50%">
            {activeConfig.customTextArabic || 'نُوْرُ الْهُدَى'}
          </textPath>
        </text>

        {/* Latin Institution Name Arc */}
        <path id="latinArc" d="M100,230 Q250,85 400,230" fill="none" />
        <text
          fill="url(#goldLight)"
          fontSize="10"
          fontWeight="900"
          letterSpacing="2.2"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          textAnchor="middle"
        >
          <textPath href="#latinArc" startOffset="50%">
            {activeConfig.customTextLatin || 'MADRASAH DINIYAH TAKMILIYAH ULA NURUL HUDA'}
          </textPath>
        </text>

        {/* Emblem Core Graphics Based on presetStyle */}
        {activeConfig.presetStyle === 'green-dome' ? (
          /* Style 2: Green Dome & Sunburst */
          <g transform="translate(250, 255)">
            {/* Radiant Sunburst Rays */}
            <circle cx="0" cy="-20" r="65" fill="#f5b83d" opacity="0.15" />
            {/* Grand Dome */}
            <path
              d="M0,-80 C38,-80 50,-35 50,-10 L-50,-10 C-50,-35 -38,-80 0,-80 Z"
              fill="url(#goldGradient)"
              stroke="#653f02"
              strokeWidth="2"
            />
            <path d="M0,-95 L3,-85 L-3,-85 Z" fill="url(#goldLight)" />
            <circle cx="0" cy="-97" r="3" fill="url(#goldLight)" />
            {/* Mosque Arched Gateway */}
            <rect x="-65" y="-10" width="130" height="50" fill="url(#goldGradient)" stroke="#653f02" strokeWidth="2" rx="3" />
            <path d="M-22,40 L-22,10 Q0,-10 22,10 L22,40 Z" fill={colors.bg60} stroke="url(#goldLight)" strokeWidth="2" />
            {/* Crescent Moon On Top */}
            <path
              d="M0,-115 A12,12 0 0,0 8,-98 A14,14 0 1,1 0,-115 Z"
              fill="url(#goldLight)"
              transform="scale(0.8) translate(-4, -10)"
            />
          </g>
        ) : activeConfig.presetStyle === 'golden-star' ? (
          /* Style 3: Islamic 8-Pointed Star Rub El Hizb */
          <g transform="translate(250, 245)">
            <polygon
              points="0,-65 19,-45 46,-46 45,-19 65,0 45,19 46,46 19,45 0,65 -19,45 -46,46 -45,19 -65,0 -45,-19 -46,-46 -19,-45"
              fill="url(#goldGradient)"
              stroke="#653f02"
              strokeWidth="2.5"
            />
            <circle cx="0" cy="0" r="34" fill={colors.bg60} stroke="url(#goldLight)" strokeWidth="2" />
            <text
              x="0"
              y="10"
              fill="url(#goldLight)"
              fontSize="28"
              fontWeight="bold"
              fontFamily="'Amiri', serif"
              textAnchor="middle"
            >
              الله
            </text>
          </g>
        ) : activeConfig.presetStyle === 'quran-pen' ? (
          /* Style 4: Holy Quran & Quill of Knowledge */
          <g transform="translate(250, 260)">
            {/* Pen / Kalam of Knowledge */}
            <path d="M-12,-85 L-5,-20 L-10,-5 L-15,-20 Z" fill="url(#goldGradient)" stroke="#653f02" strokeWidth="1.5" />
            <polygon points="-10,-5 -9,0 -11,0" fill="#fff" />
            {/* Open Quran Pages */}
            <path d="M-5,10 C-35,8 -65,0 -80,-20 C-65,-10 -35,-3 -5,3 Z" fill="#fffde8" stroke="#653f02" strokeWidth="1.5" />
            <path d="M5,10 C35,8 65,0 80,-20 C65,-10 35,-3 5,3 Z" fill="#fffde8" stroke="#653f02" strokeWidth="1.5" />
            {/* Quran Wooden Stand Rehal */}
            <path d="M-50,45 L-25,18 L0,40 L25,18 L50,45 L38,50 L20,30 L0,45 L-20,30 L-38,50 Z" fill="url(#goldGradient)" stroke="#653f02" strokeWidth="1.5" />
          </g>
        ) : activeConfig.presetStyle === 'kemenag-classic' ? (
          /* Style 5: Kemenag Classic (Padi & Kapas, 5-point Star) */
          <g transform="translate(250, 250)">
            {/* Central Star */}
            <polygon points="0,-60 14,-20 55,-20 22,5 34,45 0,22 -34,45 -22,5 -55,-20 -14,-20" fill="url(#goldGradient)" stroke="#653f02" strokeWidth="2" />
            {/* Open Quran at center */}
            <path d="M-5,15 C-25,13 -45,7 -55,-7 C-45,0 -25,5 -5,9 Z" fill="#fffde8" stroke="#653f02" strokeWidth="1.2" />
            <path d="M5,15 C25,13 45,7 55,-7 C45,0 25,5 5,9 Z" fill="#fffde8" stroke="#653f02" strokeWidth="1.2" />
          </g>
        ) : (
          /* Default: Full Authentic MDTU Nurul Huda Shield Composition */
          <>
            {/* Golden Crescent Moon and Stars */}
            <g transform="translate(250, 175) scale(0.9)">
              <path
                d="M0,-24 A15,15 0 0,0 12,0 A17,17 0 1,1 0,-24 Z"
                fill="url(#goldGradient)"
                transform="rotate(-20)"
              />
              <polygon points="0,-32 2,-26 8,-26 3,-22 5,-16 0,-20 -5,-16 -3,-22 -8,-26 -2,-26" fill="url(#goldLight)" />
              <polygon points="-24,-24 -22,-20 -18,-20 -21,-17 -20,-13 -24,-16 -28,-13 -27,-17 -30,-20 -26,-20" fill="url(#goldLight)" />
              <polygon points="24,-24 26,-20 30,-20 27,-17 28,-13 24,-16 20,-13 21,-17 18,-20 22,-20" fill="url(#goldLight)" />
            </g>

            {/* Golden Mosque Structure (Dome, Arches, Minarets) */}
            <g id="mosque" transform="translate(250, 240)">
              <path d="M0,-58 Q26,-58 35,-20 L-35,-20 Q-26,-58 0,-58 Z" fill="url(#goldGradient)" stroke="#875806" strokeWidth="1.5" />
              <polygon points="0,-68 2,-62 0,-60 -2,-62" fill="url(#goldLight)" />
              <path d="M-55,-35 Q-40,-35 -35,-15 L-75,-15 Q-70,-35 -55,-35 Z" fill="url(#goldGradient)" stroke="#875806" strokeWidth="1.5" />
              <path d="M55,-35 Q70,-35 75,-15 L35,-15 Q40,-35 55,-35 Z" fill="url(#goldGradient)" stroke="#875806" strokeWidth="1.5" />
              <rect x="-80" y="-15" width="160" height="40" fill="url(#goldGradient)" stroke="#875806" strokeWidth="1.5" rx="2" />
              <path d="M-18,25 L-18,0 Q0,-18 18,0 L18,25 Z" fill={colors.bg60} stroke="url(#goldLight)" strokeWidth="2" />
              <circle cx="0" cy="5" r="5" fill="url(#goldLight)" />
              <path d="M-55,15 L-55,2 Q-48,-4 -41,2 L-41,15 Z" fill={colors.bg60} stroke="url(#goldLight)" strokeWidth="1" />
              <path d="M41,15 L41,2 Q48,-4 55,2 L55,15 Z" fill={colors.bg60} stroke="url(#goldLight)" strokeWidth="1" />
              {/* Left Minaret */}
              <rect x="-98" y="-70" width="14" height="95" fill="url(#goldGradient)" stroke="#875806" strokeWidth="1.2" />
              <path d="M-91,-85 L-84,-70 L-98,-70 Z" fill="url(#goldLight)" />
              <circle cx="-91" cy="-88" r="2.5" fill="url(#goldLight)" />
              <rect x="-102" y="-50" width="22" height="6" fill="url(#goldLight)" rx="1" />
              <rect x="-102" y="-20" width="22" height="6" fill="url(#goldLight)" rx="1" />
              {/* Right Minaret */}
              <rect x="84" y="-70" width="14" height="95" fill="url(#goldGradient)" stroke="#875806" strokeWidth="1.2" />
              <path d="M91,-85 L98,-70 L84,-70 Z" fill="url(#goldLight)" />
              <circle cx="91" cy="-88" r="2.5" fill="url(#goldLight)" />
              <rect x="80" y="-50" width="22" height="6" fill="url(#goldLight)" rx="1" />
              <rect x="80" y="-20" width="22" height="6" fill="url(#goldLight)" rx="1" />
            </g>

            {/* Golden Laurel Wreaths */}
            <g id="wreaths">
              <path d="M135,340 C110,260 125,180 160,140" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
              {[
                { x: 120, y: 310, r: 40 },
                { x: 110, y: 270, r: 25 },
                { x: 108, y: 230, r: 10 },
                { x: 114, y: 190, r: -5 },
                { x: 130, y: 155, r: -25 },
                { x: 155, y: 135, r: -45 },
              ].map((leaf, idx) => (
                <ellipse
                  key={`leaf-l-${idx}`}
                  cx={leaf.x}
                  cy={leaf.y}
                  rx="12"
                  ry="6"
                  fill="url(#goldLight)"
                  stroke="#875806"
                  strokeWidth="1"
                  transform={`rotate(${leaf.r}, ${leaf.x}, ${leaf.y})`}
                />
              ))}
              <path d="M365,340 C390,260 375,180 340,140" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
              {[
                { x: 380, y: 310, r: -40 },
                { x: 390, y: 270, r: -25 },
                { x: 392, y: 230, r: -10 },
                { x: 386, y: 190, r: 5 },
                { x: 370, y: 155, r: 25 },
                { x: 345, y: 135, r: 45 },
              ].map((leaf, idx) => (
                <ellipse
                  key={`leaf-r-${idx}`}
                  cx={leaf.x}
                  cy={leaf.y}
                  rx="12"
                  ry="6"
                  fill="url(#goldLight)"
                  stroke="#875806"
                  strokeWidth="1"
                  transform={`rotate(${leaf.r}, ${leaf.x}, ${leaf.y})`}
                />
              ))}
            </g>

            {/* Open Holy Qur'an on Carved Wooden Rehal */}
            <g id="quranRehal" transform="translate(250, 310)">
              <path
                d="M-60,50 L-30,20 L0,45 L30,20 L60,50 L45,55 L25,32 L0,48 L-25,32 L-45,55 Z"
                fill="url(#goldGradient)"
                stroke="#653f02"
                strokeWidth="2"
              />
              <path d="M-30,20 L0,32 L30,20 L0,8 Z" fill="#875806" />
              {/* Left Page */}
              <path d="M-5,5 C-35,3 -65,-5 -80,-25 C-65,-15 -35,-8 -5,-2 Z" fill="#fffde8" stroke="#653f02" strokeWidth="1.5" />
              <path d="M-5,1 C-35,-1 -65,-9 -80,-29 L-5,-5 Z" fill="url(#goldLight)" opacity="0.8" />
              <line x1="-70" y1="-20" x2="-20" y2="-5" stroke="#926207" strokeWidth="1.5" />
              <line x1="-68" y1="-14" x2="-18" y2="0" stroke="#926207" strokeWidth="1.5" />
              <line x1="-62" y1="-8" x2="-15" y2="5" stroke="#926207" strokeWidth="1.5" />
              {/* Right Page */}
              <path d="M5,5 C35,3 65,-5 80,-25 C65,-15 35,-8 5,-2 Z" fill="#fffde8" stroke="#653f02" strokeWidth="1.5" />
              <path d="M5,1 C35,-1 65,-9 80,-29 L5,-5 Z" fill="url(#goldLight)" opacity="0.8" />
              <line x1="70" y1="-20" x2="20" y2="-5" stroke="#926207" strokeWidth="1.5" />
              <line x1="68" y1="-14" x2="18" y2="0" stroke="#926207" strokeWidth="1.5" />
              <line x1="62" y1="-8" x2="15" y2="5" stroke="#926207" strokeWidth="1.5" />
              <line x1="0" y1="-3" x2="0" y2="8" stroke="#452702" strokeWidth="3" />
            </g>
          </>
        )}

        {/* Lower Banner Ribbon: CIKOPO PANAWA or custom text */}
        <g id="ribbonBanner" transform="translate(250, 412)">
          <path d="M-170,-5 L-195,-25 L-170,-45 L-140,-25 Z" fill="#b37b19" stroke="#653f02" strokeWidth="2" />
          <path d="M170,-5 L195,-25 L170,-45 L140,-25 Z" fill="#b37b19" stroke="#653f02" strokeWidth="2" />
          <path
            d="M-150,-10 C-60,-35 60,-35 150,-10 L140,25 C60,2 60,2 -140,25 Z"
            fill="url(#goldGradient)"
            stroke="#653f02"
            strokeWidth="3.5"
            filter="url(#goldGlow)"
          />
          <text
            x="0"
            y="12"
            fill="#022c1e"
            fontSize="24"
            fontWeight="900"
            letterSpacing="4"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            textAnchor="middle"
          >
            {activeConfig.customTextRibbon || 'CIKOPO PANAWA'}
          </text>
        </g>

        {/* Bottom Finial */}
        <path d="M250,448 L245,465 L250,475 L255,465 Z" fill="url(#goldLight)" />
      </svg>

      {/* Floating Home indicator badge when hovered */}
      {showHomeTooltip && onClick && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap px-2 py-0.5 rounded bg-emerald-950 text-amber-300 text-[10px] font-bold border border-amber-400 shadow-lg z-50">
          Beranda
        </span>
      )}
    </div>
  );
};
