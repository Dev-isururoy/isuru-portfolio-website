'use client';

export default function MailRoutingGraphic() {
  return (
    <div style={{
      position: 'absolute',
      right: '5%',
      top: '100px',
      width: '260px',
      height: '100px',
      zIndex: 0,
      pointerEvents: 'none'
    }} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 260 100">
        {/* Connecting dashed line */}
        <line x1="50" y1="50" x2="210" y2="50" stroke="rgba(57, 255, 20, 0.3)" strokeWidth="2" strokeDasharray="6 4" />
        
        {/* Node A (Sender/User) */}
        <g transform="translate(15, 35)">
           <rect x="0" y="0" width="35" height="30" rx="4" fill="rgba(0,0,0,0.5)" stroke="var(--accent)" strokeWidth="1.5" />
           <line x1="7" y1="10" x2="28" y2="10" stroke="var(--accent)" strokeWidth="1" />
           <line x1="7" y1="16" x2="20" y2="16" stroke="var(--accent)" strokeWidth="1" />
           <circle cx="17.5" cy="24" r="2" fill="var(--accent)" className="aperture-focus" />
        </g>

        {/* Node B (Receiver/Server) */}
        <g transform="translate(210, 35)">
           <rect x="0" y="0" width="35" height="30" rx="4" fill="rgba(0,0,0,0.5)" stroke="var(--accent)" strokeWidth="1.5" />
           <circle cx="17.5" cy="15" r="7" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
           <circle cx="17.5" cy="15" r="2" fill="var(--accent)" className="aperture-focus" style={{ animationDelay: '1s' }} />
        </g>

        {/* Data Packet moving back and forth */}
        <circle r="4" fill="#ffffff" className="data-packet" />
      </svg>
    </div>
  );
}
