'use client';
import { useEffect, useState } from 'react';

export default function ServerRackGraphic() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Generate a random blinking delay for each LED to make it look active
  const generateDelay = () => `${(Math.random() * 2).toFixed(2)}s`;

  return (
    <div className="server-rack-container" aria-hidden="true">
      {/* 5 server units in the rack */}
      {[1, 2, 3, 4, 5].map((unit) => (
        <div key={unit} className="server-unit">
          {/* LED Indicators */}
          <div className="flex gap-2">
            <div className="server-led" style={{ animationDelay: generateDelay(), animationDuration: `${0.5 + Math.random()}s` }} />
            <div className="server-led" style={{ animationDelay: generateDelay(), animationDuration: `${0.5 + Math.random()}s` }} />
            <div className="server-led" style={{ animationDelay: generateDelay(), animationDuration: `${0.5 + Math.random()}s` }} />
          </div>
          {/* Air vent / grill */}
          <div className="server-grill" />
          {/* Activity / Power LEDs */}
          <div className="flex gap-1 ml-auto">
             <div className="server-led" style={{ animationDelay: generateDelay(), animationDuration: `${0.2 + Math.random()}s`, opacity: 0.8 }} />
             <div className="server-led" style={{ animation: 'none', background: 'var(--accent)' }} /> {/* Solid power light */}
          </div>
        </div>
      ))}
    </div>
  );
}
