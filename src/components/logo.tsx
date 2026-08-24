import type { SVGProps } from "react";

/**
 * VOMLabs brand mark — the "V" chevron from public/favicon.svg.
 *
 * Renders the three paths with `currentColor` strokes (no background tile),
 * so the logo inherits the surrounding text color and stays visible in both
 * light and dark themes.
 */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={500}
      viewBox="0 0 2481 2481"
      {...props}
    >
      <g>
        <path d="M1240.157,614.24L938.489,1208.591L1240.157,614.24Z" />
        <g transform="matrix(1,0,0,1,936.211351,625.917264)">
          <path d="M659.331,650.95L938.489,1208.591L659.331,650.95Z" />
        </g>
        <g transform="matrix(1,0,0,1,-307.589487,594.350682)">
          <path d="M1544.076,1208.591L938.489,1208.591L1544.076,1208.591Z" />
        </g>
      </g>
    </svg>
  );
}
