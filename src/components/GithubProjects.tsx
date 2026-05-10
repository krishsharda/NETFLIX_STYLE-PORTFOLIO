import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_GITHUB_USERNAME, GITHUB_REPOS_ENDPOINT } from '../constants'

type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  updated_at: string
  homepage: string | null
}

export default function GithubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const endpoint = useMemo(() => GITHUB_REPOS_ENDPOINT, [])

  useEffect(() => {
    let cancelled = false

    const loadRepos = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(endpoint, {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        })

        if (!response.ok) {
          throw new Error(`GitHub request failed: ${response.status}`)
        }

        const data = (await response.json()) as GitHubRepo[]
        if (!cancelled) {
          const sorted = [...data].sort(
            (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
          )
          setRepos(sorted)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load GitHub projects')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadRepos()

    return () => {
      cancelled = true
    }
  }, [endpoint])

  if (loading) {
    return <div className="text-neutral-300">Loading GitHub projects...</div>
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-neutral-300">
        GitHub projects could not be loaded for {DEFAULT_GITHUB_USERNAME}: {error}
      </div>
    )
  }

  if (!repos.length) {
    return <div className="text-neutral-300">No GitHub repositories found.</div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-white/10"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-brand-500">{repo.name}</h3>
              {repo.description ? <p className="mt-2 text-sm text-neutral-300">{repo.description}</p> : <p className="mt-2 text-sm text-neutral-500">No description provided.</p>}
            </div>
            <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-neutral-200">
              ★ {repo.stargazers_count}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300">
            {repo.language ? (
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1">{repo.language}</span>
            ) : null}
            {repo.fork ? (
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1">Fork</span>
            ) : null}
            {repo.homepage ? (
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1">Live demo</span>
            ) : null}
          </div>
        </a>
      ))}
    </div>
  )
}
