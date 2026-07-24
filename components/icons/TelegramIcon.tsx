export default function TelegramIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M21.05 2.93a1.6 1.6 0 0 0-1.64-.2L2.4 9.86c-.9.36-.94 1.62-.06 2.03l4.5 2.1 2.02 6.02c.2.6.98.75 1.4.28l2.4-2.66 4.42 3.25c.66.49 1.6.13 1.78-.67l3.6-16.1a1.6 1.6 0 0 0-.41-1.18Z"
        fill="currentColor"
      />
      <path
        d="M8.7 14.3 18 7.5c.4-.3.85.2.5.55l-7.6 7.1-.3 3.2-1.6-4.05Z"
        fill="#050505"
        fillOpacity="0.35"
      />
    </svg>
  );
}
