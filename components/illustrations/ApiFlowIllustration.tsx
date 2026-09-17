const nodes = [
  { label: "Business" },
  { label: "API" },
  { label: "Payment Infrastructure" },
  { label: "Bank / Provider" },
  { label: "Recipient" },
];

export function ApiFlowIllustration() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 720 360"
        className="w-full"
        role="img"
        aria-label="Diagram showing payment flow from business through API and payment infrastructure to a bank or payment provider and then to the recipient"
      >
        <defs>
          <linearGradient id="flowCardBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EFF8FC" />
          </linearGradient>
          <linearGradient id="flowLineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0A3D66" />
            <stop offset="100%" stopColor="#1AA6D9" />
          </linearGradient>
        </defs>

        {/* connecting line */}
        <path
          d="M90 180 H630"
          stroke="#D3E9F2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M90 180 H630"
          stroke="url(#flowLineGradient)"
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
          fill="none"
          className="animate-flow-dash"
        />

        {/* nodes */}
        {nodes.map((node, i) => {
          const x = 90 + i * 135;
          return (
            <g key={node.label} transform={`translate(${x}, 180)`}>
              <circle r="30" fill="url(#flowCardBg)" stroke="#D3E9F2" strokeWidth="1.5" />
              <circle r="30" fill="none" stroke="#0C7FB3" strokeOpacity="0.12" strokeWidth="6" />
              <NodeIcon index={i} />
              <text
                y="56"
                textAnchor="middle"
                className="fill-text-primary"
                fontSize="13"
                fontWeight="600"
              >
                {node.label.length > 14 ? (
                  <>
                    <tspan x="0" dy="0">
                      {node.label.split(" ").slice(0, 1).join(" ")}
                    </tspan>
                    <tspan x="0" dy="16">
                      {node.label.split(" ").slice(1).join(" ")}
                    </tspan>
                  </>
                ) : (
                  node.label
                )}
              </text>
            </g>
          );
        })}

        {/* moving pulse dot along the line to suggest active transfer */}
        <circle r="4" fill="#1AA6D9" className="animate-pulse-dot">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M90 180 H630" />
        </circle>
      </svg>
    </div>
  );
}

function NodeIcon({ index }: { index: number }) {
  const stroke = "#0C7FB3";
  switch (index) {
    case 0: // Business
      return (
        <path
          d="M-9 8V-6L0-11L9-6V8M-9 8H9M-4 8V1H4V8"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
      );
    case 1: // API
      return (
        <path
          d="M-9-6L0-11L9-6V6L0 11L-9 6Z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
      );
    case 2: // Infrastructure
      return (
        <g stroke={stroke} strokeWidth="1.6" fill="none">
          <rect x="-9" y="-9" width="18" height="18" rx="3" />
          <circle cx="0" cy="0" r="3" />
        </g>
      );
    case 3: // Bank / provider
      return (
        <path
          d="M-10 8H10M-8 8V-1M-3 8V-1M3 8V-1M8 8V-1M-10-1L0-10L10-1Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
      );
    default: // Recipient
      return (
        <g stroke={stroke} strokeWidth="1.6" fill="none">
          <circle cx="0" cy="-4" r="4" />
          <path d="M-8 9C-8 2 8 2 8 9" strokeLinecap="round" />
        </g>
      );
  }
}
