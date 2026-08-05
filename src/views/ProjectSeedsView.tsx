import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function ProjectSeedsView() {
  return (
    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col overflow-y-auto p-4 md:p-8 bg-bg-panel relative">
      <div className="mb-6 relative z-10">
        <div className="flex items-center gap-2 text-sage-dark mb-4 font-bold text-sm md:text-base">
          <span className="text-peri">C:\GARDEN\&gt;</span> LS -AL PROJECT_SEEDS/
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-auto border-t-2 border-sage-light border-dashed pt-4 flex justify-between items-end text-sm z-10 relative">
        <div className="text-sage-dark font-bold">
          <span className="text-peri">C:\GARDEN\PROJECT_SEEDS\&gt;</span>{' '}
          <span className="blink">_</span>
        </div>
        <div className="text-[10px] text-sage-light text-right">
          {projects.length} PROJECT(S) FOUND IN SEED_BANK
          <br />
          SOURCE: PORTFOLIO/
        </div>
      </div>
    </div>
  )
}
