import { QUICK_PROFILES, QuickProfile } from '../constants'

export default function ProfileQuickLinks({ onSelect }: { onSelect?: (p: QuickProfile) => void }) {
  return (
    <div className="mt-8 w-full px-0 text-left">
      <div className="text-xs uppercase tracking-widest text-neutral-400 pl-[5%]">Profiles</div>
      <div className="mt-3 flex flex-wrap justify-start gap-5 pl-[5%]">
        {QUICK_PROFILES.slice(0, 4).map((p: QuickProfile) => (
          <button
            key={p.label}
            onClick={() => onSelect?.(p)}
            className="group flex w-28 flex-col items-center gap-2.5 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]"
            aria-label={`Select ${p.label} profile`}
          >
            <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10 ring-1 ring-white/10 transition duration-300 group-hover:scale-105 group-hover:ring-brand-500 group-hover:shadow-[0_0_24px_rgba(229,9,20,0.35)] sm:h-24 sm:w-24">
              <img
                src={p.avatarUrl}
                alt={`${p.label} profile`}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-white">
              {p.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
