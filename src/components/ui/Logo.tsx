import React from "react"

export interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function Logo({ className = "", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* --- LOGO MARK (ICON) --- */}
      <g transform="translate(10, 20)">
        {/* Main nested bowl (dark blue) */}
        {/* Use a large path that curves at the bottom */}
        <path
          d="M 5 30 
             C 5 70, 65 70, 75 40 
             C 80 25, 60 5, 40 5 
             C 20 5, 5 15, 5 30 Z"
          fill="#0f2a55"
        />

        {/* Building (white squares cut out from the nest) */}
        <g fill="#ffffff">
          {/* Top Left Square */}
          <rect x="25" y="15" width="10" height="10" />
          {/* Top Right Square */}
          <rect x="38" y="15" width="10" height="10" />
          {/* Bottom Left Square */}
          <rect x="25" y="28" width="10" height="10" />
        </g>

        {/* Nest white swoosh line 1 - bottom layer border */}
        <path
          d="M 2 40 C 15 65, 55 60, 73 35"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Nest white swoosh line 2 - deeper nest loop */}
        <path
          d="M 8 50 C 25 72, 60 65, 77 40"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Teal Wings extending from the nest */}
        {/* Top (larger) wing */}
        <path
          d="M 58 32 C 65 15, 80 5, 95 0 C 85 10, 80 15, 75 22 C 90 12, 105 8, 105 8 C 95 20, 80 35, 60 38 Z"
          fill="#00a896"
        />
        {/* Bottom (smaller) wing */}
        <path
          d="M 68 40 C 78 30, 90 22, 100 20 C 92 28, 85 35, 73 43 Z"
          fill="#0f2a55" 
          /* wait, in the image the bottom wing is actually dark blue! */
        />
      </g>

      {/* --- TEXT --- */}
      <g transform="translate(105, 62)">
        <text
          x="0"
          y="0"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="44"
          fill="#0f2a55"
          letterSpacing="-1"
        >
          Nest
        </text>
        <text
          x="95"
          y="-2"
          fontFamily="Georgia, serif"
          fontStyle="italic"
          fontWeight="600"
          fontSize="36"
          fill="#00a896"
        >
          n
        </text>
        <text
          x="122"
          y="0"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="44"
          fill="#0f2a55"
          letterSpacing="-1"
        >
          Wings
        </text>
      </g>
    </svg>
  )
}
