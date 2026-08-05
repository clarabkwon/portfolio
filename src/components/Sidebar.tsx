import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const PLANT_ASCII = `      .::.
    .::::::.
  .::.    .::.
 .::  *  *  ::.
  .::.    .::.
    '::::::'
      '::'
       ||
    \\\\ || //
 ^^^^^^^^^^^^^^^^`

const NAV_ITEMS = [
  { to: '/home', label: 'HOME.TXT' },
  { to: '/projects', label: 'PROJECT_SEEDS/' },
  { to: '/skills', label: 'SKILLS_LOG.DAT' },
  { to: '/contact', label: 'CONTACT_ROOT/' },
] as const

export function Sidebar() {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-b-4 md:border-b-0 md:border-r-4 border-sage p-4 flex flex-col gap-6 bg-bg-cream overflow-y-auto">
      <div className="border-2 border-sage p-2 text-center relative shadow-retro-peri bg-bg-panel">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-bg-panel px-2 text-sage-dark font-pixel text-lg">
          ID_CARD.DAT
        </div>
        <pre className="font-pixel text-sage-dark text-left text-sm leading-tight mt-2 mx-auto inline-block">
          {PLANT_ASCII.split('\n').map((line, i) => {
            if (line.includes('*')) {
              const parts = line.split('*')
              return (
                <span key={i}>
                  {parts[0]}
                  <span className="text-peri">*</span>
                  {parts[1]}
                  <span className="text-peri">*</span>
                  {parts[2]}
                  {'\n'}
                </span>
              )
            }
            return (
              <span key={i}>
                {line}
                {'\n'}
              </span>
            )
          })}
        </pre>
        <div className="mt-4 font-pixel text-2xl text-sage-dark">{profile.name}</div>
        <div className="text-xs text-peri-dark">{profile.title}</div>
      </div>

      <div className="flex flex-col gap-2 font-bold text-sm">
        <div className="text-sage-dark mb-2 font-pixel text-xl border-b-2 border-dashed border-sage-light pb-1">
          DIRECTORY ROOT
        </div>
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-2 text-bg-cream bg-sage px-2 py-1 group'
                : 'flex items-center gap-2 text-sage-dark hover:bg-peri hover:text-bg-cream px-2 py-1 transition-colors group border border-transparent'
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? 'text-peri-light group-hover:animate-pulse'
                      : 'text-sage group-hover:text-bg-cream'
                  }
                >
                  -&gt;
                </span>
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="mt-auto border-t-2 border-dashed border-sage pt-4 text-xs space-y-1 text-sage-dark">
        <div className="flex justify-between">
          <span>MEMORY:</span>
          <span className="text-peri-dark">640K OK</span>
        </div>
        <div className="flex justify-between">
          <span>SUNLIGHT:</span>
          <span className="text-sage">OPTIMAL</span>
        </div>
        <div className="flex justify-between">
          <span>WATER LVL:</span>
          <span className="text-peri-dark">78%</span>
        </div>
      </div>
    </div>
  )
}
