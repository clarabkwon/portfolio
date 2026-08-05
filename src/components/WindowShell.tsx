import { Outlet, useLocation } from 'react-router-dom'
import { TitleBar } from './TitleBar'
import { MenuBar } from './MenuBar'
import { Sidebar } from './Sidebar'
import { StatusBar } from './StatusBar'

const ROUTE_META: Record<string, { exe: string; loc: string; status: string }> = {
  '/home': {
    exe: 'C:\\GARDEN\\HOME.EXE',
    loc: '/ROOT/HOME/',
    status: 'BOOTED',
  },
  '/projects': {
    exe: 'C:\\GARDEN\\PROJECT_SEEDS.EXE',
    loc: '/ROOT/PROJECT_SEEDS/',
    status: 'EXPLORING',
  },
  '/skills': {
    exe: 'C:\\GARDEN\\SKILLS_LOG.EXE',
    loc: '/ROOT/SKILLS_LOG/',
    status: 'SCANNING',
  },
  '/contact': {
    exe: 'C:\\GARDEN\\CONTACT_ROOT.EXE',
    loc: '/ROOT/CONTACT_ROOT/',
    status: 'LISTENING',
  },
}

export function WindowShell() {
  const { pathname } = useLocation()
  const meta = ROUTE_META[pathname] ?? ROUTE_META['/home']

  return (
    <div className="bg-bg-cream text-sage-text font-mono h-screen w-screen overflow-hidden p-4 md:p-8 flex flex-col scanlines selection:bg-peri selection:text-white">
      <div className="border-4 border-sage flex-1 flex flex-col relative bg-bg-panel shadow-retro-sage max-w-7xl w-full mx-auto overflow-hidden rounded-[20px]">
        <TitleBar path={meta.exe} />
        <MenuBar />

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          <Sidebar />
          <Outlet />
        </div>

        <StatusBar location={meta.loc} status={meta.status} />
      </div>
    </div>
  )
}
