import { EXPERIENCES } from '../constants'

export default function Experience() {
  return (
    <div className="space-y-6">
      {EXPERIENCES.map((e, idx) => (
        <article key={e.role + idx} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <p className="text-sm text-neutral-400">{e.company}</p>
            </div>
            <p className="text-sm font-medium text-neutral-300">{e.period}</p>
          </div>
          <p className="mt-3 text-neutral-300">{e.summary}</p>
          {e.bullets?.length ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
              {e.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}
