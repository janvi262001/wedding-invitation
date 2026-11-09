import React, { useEffect, useState } from 'react';

export default function PetalsEffect({ enabled = true }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (!enabled) {
      setPetals([]);
      return;
    }

    const items = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 96 + '%',
      size: Math.random() * 12 + 10 + 'px',
      duration: Math.random() * 8 + 7 + 's',
      delay: Math.random() * 5 + 's',
      opacity: Math.random() * 0.4 + 0.3,
      color: i % 3 === 0 ? '#B08968' : i % 3 === 1 ? '#D2E0EE' : '#FFD79E',
    }));

    setPetals(items);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          {/* Subtle petal / sparkle svg shape */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill={petal.color}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
