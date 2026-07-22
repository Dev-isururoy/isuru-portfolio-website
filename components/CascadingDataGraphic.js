'use client';
import { useEffect, useState } from 'react';

export default function CascadingDataGraphic() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const logs = [
    "[SYS] Requesting access to data clusters...",
    "[OK] Connection established (Latency: 12ms)",
    "[INFO] Fetching latest documentation logs",
    "01001000 01100101 01101100 01101100 01101111",
    "[WARN] Minor packet loss detected, retrying...",
    "[OK] Stream stabilized. Syncing records.",
    "Awaiting new input from administrator..."
  ];

  return (
    <div style={{
      position: 'absolute',
      right: '5%',
      top: '80px',
      width: '320px',
      height: '200px',
      zIndex: 0,
      pointerEvents: 'none',
      fontFamily: 'monospace',
      fontSize: '11px',
      color: 'rgba(57, 255, 20, 0.6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }} aria-hidden="true">
      {logs.map((log, i) => (
        <div 
          key={i} 
          className="typing-log-line"
          style={{ animationDelay: `${i * 1.5}s` }}
        >
          {log}
        </div>
      ))}
      <div 
          className="typing-log-line"
          style={{ animationDelay: `${logs.length * 1.5}s` }}
      >
        <span className="blinking-cursor">_</span>
      </div>
    </div>
  );
}
