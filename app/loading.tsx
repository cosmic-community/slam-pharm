export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-950">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-brand-500/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-brand-500 rounded-full animate-spin" />
        </div>
        <p className="text-surface-400 text-sm font-medium tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}