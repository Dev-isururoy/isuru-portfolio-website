'use client';

export default function TechNodesGraphic() {
  const nodes = [
    { id: 1, cx: 40, cy: 30 },
    { id: 2, cx: 130, cy: 80 },
    { id: 3, cx: 220, cy: 40 },
    { id: 4, cx: 70, cy: 160 },
    { id: 5, cx: 250, cy: 140 },
    { id: 6, cx: 160, cy: 190 },
    { id: 7, cx: 180, cy: 110 }
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 3], [1, 6], [2, 6], [2, 4], [3, 5], [4, 6], [5, 6], [4, 5]
  ];

  return (
    <div style={{
      position: 'absolute',
      right: '5%',
      top: '80px',
      width: '300px',
      height: '220px',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.8
    }} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 300 220" style={{ overflow: 'visible' }}>
        {connections.map(([a, b], idx) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          return (
            <line
              key={idx}
              x1={n1.cx} y1={n1.cy}
              x2={n2.cx} y2={n2.cy}
              stroke="rgba(57, 255, 20, 0.4)"
              strokeWidth="1.5"
              className="node-line"
            />
          );
        })}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="#39FF14"
            className="node-dot"
            style={{
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
}
