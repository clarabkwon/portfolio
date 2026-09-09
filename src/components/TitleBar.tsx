interface TitleBarProps {
  path?: string
}

export function TitleBar({ path = 'C:\\GARDEN\\PROJECTS.EXE' }: TitleBarProps) {
  return (
    <div className="bg-sage text-bg-cream font-pixel text-xl md:text-2xl px-4 py-1 flex justify-between items-center border-b-4 border-sage select-none">
      <div className="flex items-center gap-4">
        <span className="leading-none" aria-hidden>
          💐
        </span>
        <span>{path}</span>
      </div>
      <div className="flex gap-4 text-bg-cream cursor-default">
        <span className="hover:text-peri-light transition-colors">[_]</span>
        <span className="hover:text-peri-light transition-colors">[↑]</span>
        <span className="hover:bg-peri hover:text-white transition-colors px-1">[X]</span>
      </div>
    </div>
  )
}
