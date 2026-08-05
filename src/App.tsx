import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { WindowShell } from './components/WindowShell'
import { ProjectSeedsView } from './views/ProjectSeedsView'
import { HomeView } from './views/HomeView'
import { ContactView, SkillsView } from './views/SecondaryViews'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route element={<WindowShell />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomeView />} />
          <Route path="about" element={<Navigate to="/home" replace />} />
          <Route path="projects" element={<ProjectSeedsView />} />
          <Route path="skills" element={<SkillsView />} />
          <Route path="contact" element={<ContactView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
