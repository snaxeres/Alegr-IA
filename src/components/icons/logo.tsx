export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 4.5 L19.5 9.5" />
    <path d="M12 2 L22 12" />
    <path d="M12 2 L2 12" />
    <path d="M12 22 L2 12" />
    <path d="M12 22 L22 12" />
    <path d="M2 12 L22 12" />
    <path d="M12 2 L12 22" />
  </svg>
);
