import type { Project } from '../data/projects'
import { statusStyles } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const githubLink = project.links.find((link) => /github\.com/i.test(link.href))
  const primaryLink = githubLink ?? project.links[0]

  return (
    <div className="bg-bg-cream border-2 border-sage-dark p-6 shadow-retro-sage relative flex flex-col group hover:-translate-y-1 transition-transform">
      <div className="absolute -top-3 left-4 bg-bg-cream px-2 text-peri font-pixel text-xl">
        {project.number}
      </div>
      <div
        className={`absolute -top-3 right-4 px-2 text-xs font-bold ${statusStyles[project.status]}`}
      >
        {project.status}
      </div>

      <div className="h-36 mb-4 bg-bg-panel border border-dashed border-sage-light flex items-center justify-center overflow-hidden">
        <pre className="braille-art text-sage group-hover:text-peri transition-colors">
          {project.asciiArt}
        </pre>
      </div>

      <h3 className="font-pixel text-3xl text-sage-dark mb-1">{project.name}</h3>

      <p className="text-sm text-sage-text leading-tight mb-4 flex-1">{project.description}</p>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] border border-sage-light px-1 text-sage">
              {tag}
            </span>
          ))}
        </div>

        {project.links.length > 1 && (
          <div className="flex flex-wrap gap-3 text-[10px] font-bold">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-peri-dark hover:text-peri underline underline-offset-2"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        )}

        {primaryLink ? (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border-2 border-sage-dark py-1 font-pixel text-xl text-center hover:bg-peri hover:text-bg-cream hover:border-peri transition-colors"
          >
            {project.actionLabel}
          </a>
        ) : (
          <button
            type="button"
            className="w-full border-2 border-sage-dark py-1 font-pixel text-xl hover:bg-peri hover:text-bg-cream hover:border-peri transition-colors"
          >
            {project.actionLabel}
          </button>
        )}
      </div>
    </div>
  )
}
