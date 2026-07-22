'use client';

// Dot Matrix Animation (About page - personal tech grid)
export function DotMatrixAnim() {
  const dots = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push(
        <div
          key={`${row}-${col}`}
          className="dot-matrix-dot"
          style={{
            left: `${col * 14}%`,
            top: `${row * 14}%`,
            animationDelay: `${(row + col) * 0.2}s`,
          }}
        />
      );
    }
  }
  return (
    <div className="hero-anim-container">
      <div className="dot-matrix">{dots}</div>
    </div>
  );
}

// Wireframe Cube Animation (Projects page - engineering/building)
export function WireframeCubeAnim() {
  return (
    <div className="hero-anim-container">
      <div className="wireframe-scene">
        <div className="wireframe-cube">
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
          <div className="face" />
        </div>
      </div>
    </div>
  );
}

// Orbit Ring Animation (Services page - services revolving)
export function OrbitRingAnim() {
  return (
    <div className="hero-anim-container">
      <div className="orbit-ring">
        <div className="orbit-ring-track">
          <div className="orbit-particle" />
        </div>
        <div className="orbit-ring-track">
          <div className="orbit-particle" />
        </div>
        <div className="orbit-ring-track">
          <div className="orbit-particle" />
        </div>
        <div className="orbit-center" />
      </div>
    </div>
  );
}

// Scan Line Animation (Resume page - scanning document feel)
export function ScanLineAnim() {
  return (
    <div className="hero-anim-container">
      <div className="scan-lines">
        {/* Grid background */}
        {[20, 40, 60, 80].map(pos => (
          <div key={`h-${pos}`} className="scan-grid-line horizontal" style={{ top: `${pos}%` }} />
        ))}
        {[20, 40, 60, 80].map(pos => (
          <div key={`v-${pos}`} className="scan-grid-line vertical" style={{ left: `${pos}%` }} />
        ))}
        {/* Sweep lines */}
        <div className="scan-line" />
        <div className="scan-line" />
        <div className="scan-line" />
        <div className="scan-line" />
      </div>
    </div>
  );
}

// Float Grid Animation (Gallery page - visual grid)
export function FloatGridAnim() {
  const dots = [];
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      dots.push(
        <div
          key={`${row}-${col}`}
          className="float-grid-dot"
          style={{
            left: `${col * 10 + 2}%`,
            top: `${row * 10 + 2}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2.5 + Math.random() * 2}s`,
          }}
        />
      );
    }
  }
  return (
    <div className="hero-anim-container">
      <div className="float-grid">{dots}</div>
    </div>
  );
}
