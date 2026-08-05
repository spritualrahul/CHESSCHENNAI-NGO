export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--ches-warm-white)]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-[var(--ches-blue)]/15 border-t-[var(--ches-orange)]" />
    </div>
  );
}
