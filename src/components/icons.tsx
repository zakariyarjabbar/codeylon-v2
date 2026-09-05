export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M3 12h17M13 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function PixelIcon({
  kind = "star",
  className = "",
}: {
  kind?: string;
  className?: string;
}) {
  const paths: Record<string, string> = {
    star: "M10 0h4v6h4v4h6v4h-6v4h-4v6h-4v-6H6v-4H0v-4h6V6h4z",
    window: "M0 2h24v20H0V2zm3 3v4h18V5H3zm0 7v7h18v-7H3z",
    target:
      "M6 0h12v3h3v3h3v12h-3v3h-3v3H6v-3H3v-3H0V6h3V3h3V0zm0 6v12h12V6H6zm3 3h6v6H9V9z",
    cup: "M3 1h3v4H3V1zm6 0h3v4H9V1zm-9 7h18v3h6v9h-6v4H3v-4H0V8zm18 6v3h3v-3h-3z",
    box: "M3 0h18v3h3v18h-3v3H3v-3H0V3h3V0zm0 6v15h18V6h-6v6H9V6H3z",
    refresh:
      "M6 0h12v3h3v3h3v6H12V9h6V6h-3V3H9v3H6v3H3v6h3v3h3v3h6v-3h3v-3h3v6h-3v3H6v-3H3v-3H0V6h3V3h3V0z",
    check: "M18 3h6v6h-6v6h-6v6H6v-6H0V9h6v6h6V9h6V3z",
  };
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d={paths[kind] || paths.star} fillRule="evenodd" />
    </svg>
  );
}
