const P: Record<string, string> = {
  chat: "M4 5h16v10H9l-5 4V5z",
  wave: "M3 12h2l2-6 3 12 3-9 2 5 2-2h4",
  voice: "M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v4",
  swallow: "M8 3c0 4 4 4 4 8s-4 4-4 10M16 3c0 4-4 4-4 8",
  face: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 10h.01M15.5 10h.01M8 15c1.2 1.5 6.8 1.5 8 0",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13",
  breath: "M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h7",
  ear: "M7 10a5 5 0 0 1 10 0c0 3-3 3-3 6a2.5 2.5 0 0 1-5 0M12 10a1.5 1.5 0 0 1 3 0",
  aac: "M3 4h18v12H8l-5 4V4zM8 9h.01M12 9h.01M16 9h.01",
};
export function ServiceIcon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={P[name] ?? P.chat} />
    </svg>
  );
}
