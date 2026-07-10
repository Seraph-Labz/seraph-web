export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-display text-6xl font-light tracking-wide text-foreground">
        Seraph
      </h1>
      <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Cross-chain transaction explorer
      </p>
      <code className="mt-6 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-primary">
        0x4e2a...9f1c
      </code>
    </main>
  );
}
