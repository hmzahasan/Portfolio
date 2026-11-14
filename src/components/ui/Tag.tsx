export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
