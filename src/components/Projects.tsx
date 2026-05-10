import { PROJECTS } from '../constants'

export default function Projects() {
  return (
    <div className="grid gap-5">
      {PROJECTS.map((project) => (
        <article key={project.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              {project.subtitle ? <p className="text-sm text-neutral-400">{project.subtitle}</p> : null}
            </div>
            {project.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {project.bullets?.length ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}
