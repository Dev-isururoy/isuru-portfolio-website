'use client';

export default function DigitalApertureGraphic() {
  return (
    <div style={{
      position: 'absolute',
      right: '5%',
      top: '60px',
      width: '240px',
      height: '240px',
      zIndex: 0,
      pointerEvents: 'none'
    }} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Outer decorative rings */}
        <circle cx="100" cy="100" r="95" stroke="rgba(57, 255, 20, 0.1)" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="85" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="15 10" className="aperture-lens" />
        <circle cx="100" cy="100" r="75" stroke="rgba(57, 255, 20, 0.3)" strokeWidth="1" fill="none" />
        
        {/* Aperture mechanism (rotating slowly) */}
        <g className="aperture-lens" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
          {/* 6 overlapping blades representing an aperture */}
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
               <line x1="100" y1="25" x2="160" y2="85" stroke="rgba(57, 255, 20, 0.5)" strokeWidth="1.5" />
            </g>
          ))}
          {/* Inner hexagon forming the opening */}
          <polygon points="100,50 143,75 143,125 100,150 57,125 57,75" stroke="var(--accent)" strokeWidth="1" fill="none" />
        </g>

        {/* Center focus bracket */}
        <path d="M 85 90 L 85 85 L 90 85" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        <path d="M 115 90 L 115 85 L 110 85" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        <path d="M 85 110 L 85 115 L 90 115" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        <path d="M 115 110 L 115 115 L 110 115" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        
        {/* Pulsing center focus dot */}
        <circle cx="100" cy="100" r="2" fill="var(--accent)" className="aperture-focus" />

        {/* The Flash / Snap effect */}
        <circle cx="100" cy="100" r="95" className="aperture-snap" />
      </svg>
    </div>
  );
}
