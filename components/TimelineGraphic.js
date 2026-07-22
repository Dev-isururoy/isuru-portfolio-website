'use client';

export default function TimelineGraphic() {
  return (
    <div style={{
      position: 'absolute',
      right: '10%',
      top: '80px',
      width: '120px',
      height: '250px',
      zIndex: 0,
      pointerEvents: 'none'
    }} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 120 250" style={{ overflow: 'visible' }}>
        {/* Main vertical track */}
        <line x1="60" y1="0" x2="60" y2="250" stroke="rgba(57, 255, 20, 0.2)" strokeWidth="2" />
        
        {/* Branching lines & Nodes */}
        {[
          { y: 40, x: 20 },
          { y: 90, x: 100 },
          { y: 140, x: 25 },
          { y: 190, x: 95 },
          { y: 230, x: 40 }
        ].map((node, i) => (
          <g key={i}>
            {/* Horizontal branch */}
            <polyline 
              points={`60,${node.y} ${node.x},${node.y}`} 
              stroke="var(--accent)" 
              strokeWidth="2"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="100"
              className="branch-line"
              style={{ animationDelay: `${i * 1.2}s` }}
            />
            {/* End node */}
            <circle 
              cx={node.x} 
              cy={node.y} 
              r="4" 
              fill="#0a0a0a"
              stroke="var(--accent)"
              strokeWidth="2"
              className="branch-node"
              style={{ animationDelay: `${i * 1.2 + 0.3}s` }}
            />
          </g>
        ))}
        
        {/* Flowing energy dot down the main line */}
        <circle cx="60" cy="0" r="3" fill="#ffffff" className="energy-dot" />
      </svg>
    </div>
  );
}
