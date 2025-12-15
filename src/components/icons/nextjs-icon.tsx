export const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    aria-label="Next.js logomark"
    role="img"
    viewBox="0 0 180 180"
    width="32"
  >
    <mask
      id="a"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
    >
      <circle cx="90" cy="90" r="90" fill="currentColor"></circle>
    </mask>
    <g mask="url(#a)">
      <circle cx="90" cy="90" r="90" fill="currentColor"></circle>
      <path
        d="M149.508 157.52L69.143 54H54v71.94h18.633v-51.81l62.207 73.39h14.673Z"
        fill="url(#b)"
        transform="translate(-5, -5)"
      ></path>
      <path d="M125.132 54H110.49v72h14.642V54Z" fill="url(#c)" transform="translate(-5, -5)"></path>
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="109.931"
        y1="54"
        x2="109.931"
        y2="157.52"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="117.811"
        y1="54"
        x2="117.811"
        y2="126"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);
