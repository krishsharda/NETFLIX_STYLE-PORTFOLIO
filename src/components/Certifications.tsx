import { CERTIFICATIONS } from '../constants'

export default function Certifications() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {CERTIFICATIONS.map((cert) => {
        const key = `${cert.name}-${cert.issued || cert.year || cert.issuer}`

        const card = (
          <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/20">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/20">
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.issuer} logo`}
                    className="h-full w-full object-contain p-1.5"
                  />
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    {cert.issuer.slice(0, 3)}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold leading-tight text-white transition-colors group-hover:text-brand-500">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">{cert.issuer}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 text-sm">
              <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs text-brand-300">
                {cert.issued || cert.year || ''}
              </span>
              {cert.credentialId && (
                <span className="max-w-[55%] truncate text-xs text-neutral-500">
                  ID: {cert.credentialId}
                </span>
              )}
            </div>

            {cert.url && (
              <div className="mt-4 text-xs text-brand-400 transition-colors group-hover:text-brand-300">
                Open certificate →
              </div>
            )}
          </article>
        )

        return cert.url ? (
          <a
            key={key}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            {card}
          </a>
        ) : (
          <div key={key} className="block h-full">
            {card}
          </div>
        )
      })}
    </div>
  )
}
