import React from "react";

/**
 * NovuCore logomark — vertical capsule with horizontal slot.
 * Reusable inline SVG so it's crisp at any size and color.
 */
const Logo = ({ size = 28, color = "#1F2A48", title = "NovuCore" }) => {
  return (
    <svg
      width={size}
      height={(size * 120) / 100}
      viewBox="0 0 100 120"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="nv-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      {/* Top half capsule */}
      <path
        d="M50 6 C26 6, 8 24, 8 48 V52 H92 V48 C92 24, 74 6, 50 6 Z"
        fill="url(#nv-grad)"
      />
      {/* Bottom half capsule */}
      <path
        d="M8 68 V72 C8 96, 26 114, 50 114 C74 114, 92 96, 92 72 V68 Z"
        fill="url(#nv-grad)"
      />
      {/* Center slot */}
      <rect
        x="26"
        y="54"
        width="48"
        height="12"
        rx="6"
        fill="url(#nv-grad)"
      />
    </svg>
  );
};

export default Logo;
