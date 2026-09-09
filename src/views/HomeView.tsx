import { profile } from '../data/profile'
import tapCat from '../assets/tap-cat.gif'

function highlightText(text: string, highlight: string) {
  const index = text.indexOf(highlight)
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <span className="bg-peri text-sage-text px-1">{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  )
}

export function HomeView() {
  return (
    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col overflow-y-auto p-4 md:p-8 bg-bg-panel relative">
      <div className="mb-6 relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sage-dark mb-4 font-bold text-sm md:text-base">
          <span className="text-peri">C:\GARDEN\&gt;</span> BOOT HOME.SYS
        </div>

        <div className="home-grid flex-1 border-2 border-sage-dark p-6 md:p-10 relative bg-[#F7F7F5]">
          <div className="absolute inset-1 border border-sage-dark/40 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="font-pixel text-4xl md:text-5xl text-sage-dark tracking-wide">
                HELLO, WORLD
              </h1>
              <img
                src={tapCat}
                alt=""
                className="h-10 w-10 md:h-12 md:w-12 shrink-0 object-contain image-pixelated"
                aria-hidden
              />
            </div>

            <div className="space-y-5 font-mono text-sm md:text-base text-sage-text leading-relaxed max-w-2xl">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <p>{highlightText(profile.studies, profile.highlight)}</p>
            </div>

            <div className="mt-auto pt-10">
              <p className="font-mono text-sm md:text-base text-peri uppercase tracking-wide">
                &gt; WAITING FOR INPUT
                <span className="blink">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
