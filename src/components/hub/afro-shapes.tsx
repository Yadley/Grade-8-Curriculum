type ShapeProps = {
  className?: string;
  color?: string;
  size?: number;
  rotation?: number;
  style?: React.CSSProperties;
};

/**
 * AfroSemiCircle - A bold, radiant half-circle in pure African color
 */
export function AfroSemiCircle({
  className = "",
  color = "#F2C94C",
  size = 64,
  rotation = 0,
  style = {},
}: ShapeProps) {
  const height = Math.round(size / 2);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 100 50"
      className={`afro-shape afro-semicircle ${className}`}
      style={{
        width: `${size}px`,
        height: `${height}px`,
        minWidth: `${size}px`,
        minHeight: `${height}px`,
        maxWidth: `${size}px`,
        maxHeight: `${height}px`,
        flexShrink: 0,
        transform: `rotate(${rotation}deg)`,
        filter: "drop-shadow(0 6px 16px rgb(0 0 0 / 14%))",
        display: "block",
        overflow: "visible",
        ...style,
      }}
      aria-hidden="true"
    >
      <path d="M 0 50 A 50 50 0 0 1 100 50 Z" fill={color} style={{ fill: color }} />
    </svg>
  );
}

/**
 * AfroTriangle - Bold, saturated geometric triangle
 */
export function AfroTriangle({
  className = "",
  color = "#E0533C",
  size = 56,
  rotation = 0,
  style = {},
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`afro-shape afro-triangle ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
        flexShrink: 0,
        transform: `rotate(${rotation}deg)`,
        filter: "drop-shadow(0 6px 16px rgb(0 0 0 / 14%))",
        display: "block",
        overflow: "visible",
        ...style,
      }}
      aria-hidden="true"
    >
      <polygon points="50,5 95,95 5,95" fill={color} style={{ fill: color }} />
    </svg>
  );
}

/**
 * AfroRectangle - Saturated rectangular block with inner geometric diamond accent
 */
export function AfroRectangle({
  className = "",
  color = "#16845B",
  width = 64,
  height = 36,
  rotation = 0,
  style = {},
}: {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  rotation?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 60"
      className={`afro-shape afro-rectangle ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
        flexShrink: 0,
        transform: `rotate(${rotation}deg)`,
        filter: "drop-shadow(0 6px 16px rgb(0 0 0 / 14%))",
        display: "block",
        overflow: "visible",
        ...style,
      }}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="100" height="60" rx="4" fill={color} style={{ fill: color }} />
      <polygon points="50,15 80,30 50,45 20,30" fill="rgb(255 255 255 / 26%)" />
    </svg>
  );
}

/**
 * AfroChevron - Stepped geometric arch (Kente / Mudcloth motif)
 */
export function AfroChevron({
  className = "",
  color = "#C44B2E",
  size = 56,
  rotation = 0,
  style = {},
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`afro-shape afro-chevron ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
        flexShrink: 0,
        transform: `rotate(${rotation}deg)`,
        filter: "drop-shadow(0 6px 16px rgb(0 0 0 / 14%))",
        display: "block",
        overflow: "visible",
        ...style,
      }}
      aria-hidden="true"
    >
      <path
        d="M 10 90 L 50 30 L 90 90 L 75 90 L 50 50 L 25 90 Z"
        fill={color}
        style={{ fill: color }}
      />
    </svg>
  );
}
