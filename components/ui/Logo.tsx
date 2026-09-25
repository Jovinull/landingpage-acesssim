export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/logo.svg" alt="" width={28} height={28} className="h-7 w-7" />
      <span className="text-[15px] font-semibold tracking-tight text-white">AccessSim</span>
    </span>
  );
}
