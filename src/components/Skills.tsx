import { SKILL_GROUPS } from '../constants'

export default function Skills() {
  return (
    <div className="grid gap-4">
      {SKILL_GROUPS.map((group) => (
        <section key={group.category} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-500">{group.category}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-neutral-200">
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
