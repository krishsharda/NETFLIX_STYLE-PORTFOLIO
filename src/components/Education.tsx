import { EDUCATION } from '../constants'

export default function Education() {
  return (
    <div className="grid gap-4">
      {EDUCATION.map((edu) => (
        <article key={`${edu.degree}-${edu.institution}`} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-neutral-400">{edu.institution}</p>
              <p className="text-sm text-neutral-400">{edu.field}</p>
              <p className="text-sm text-neutral-400">{edu.location}</p>
            </div>
            <p className="text-sm font-medium text-neutral-300">{edu.period}</p>
          </div>
        </article>
      ))}
    </div>
  )
}