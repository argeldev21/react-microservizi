import { useState } from "react";
import "./Wheel.css";

export function Wheel({ penalties, onSelect }) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const sliceCount = penalties.length;
  const sliceAngle = 360 / sliceCount;

  function handleSpin() {
    if (isSpinning) return;

    const extra = 360 * 5 + Math.floor(Math.random() * 360);
    setRotation(prev => prev + extra);
    setIsSpinning(true);
  }

  function handleTransitionEnd() {
    const normalized = ((rotation % 360) + 360) % 360;
    const index = Math.floor(((360 - normalized) % 360) / sliceAngle);
    const selected = penalties[index];

    onSelect(selected);
    setIsSpinning(false);
  }

  return (
    <div className="wheel-wrapper">
      <div className="indicator" />

      <div
        className="wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {penalties.map((p, i) => {
          const angle = i * sliceAngle;

          return (
            <div
              key={i}
              className="slice"
              style={{
                transform: `rotate(${angle}deg)`,
                backgroundColor: i % 2 === 0 ? "#ffcc00" : "#ff6b6b",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)"
              }}
            >
              <div className="slice-label">{p}</div>
            </div>
          );
        })}
      </div>

      <button
        className="spin-button"
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? "Gira..." : "Gira la ruota"}
      </button>
    </div>
  );
}
