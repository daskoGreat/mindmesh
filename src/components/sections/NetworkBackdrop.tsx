export function NetworkBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="h-full w-full opacity-[0.22] md:opacity-[0.28]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="mesh-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#05070d" stopOpacity="0" />
            <stop offset="45%" stopColor="#05070d" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#05070d" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="currentColor"
          className="text-slate-600/40"
          strokeWidth="0.6"
        >
          <path d="M80 420 L280 180 L520 320 L720 140 L980 260 L1120 480" />
          <path d="M120 620 L340 380 L560 520 L780 300 L1040 440" />
          <path d="M200 200 L440 480 L640 220 L900 380 L1080 220" />
          <path d="M60 300 L260 520 L480 240 L760 460 L1020 340" />
        </g>
        <g className="text-mesh-accent/30">
          <circle cx="280" cy="180" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="520" cy="320" r="2" fill="currentColor" stroke="none" />
          <circle cx="720" cy="140" r="2" fill="currentColor" stroke="none" />
          <circle cx="340" cy="380" r="2" fill="currentColor" stroke="none" />
          <circle cx="780" cy="300" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="440" cy="480" r="2" fill="currentColor" stroke="none" />
        </g>
        <rect
          width="100%"
          height="100%"
          fill="url(#mesh-fade)"
          stroke="none"
        />
      </svg>
    </div>
  );
}
