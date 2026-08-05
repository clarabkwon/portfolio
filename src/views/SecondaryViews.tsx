import type { ReactNode } from 'react'
import { contacts, skills } from '../data/profile'

interface FileViewProps {
  prompt: string
  filename: string
  children: ReactNode
}

function FileView({ prompt, filename, children }: FileViewProps) {
  return (
    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col overflow-y-auto p-4 md:p-8 bg-bg-panel relative">
      <div className="mb-6 relative z-10 flex-1">
        <div className="flex items-center gap-2 text-sage-dark mb-4 font-bold text-sm md:text-base">
          <span className="text-peri">C:\GARDEN\&gt;</span> TYPE {filename}
        </div>
        <div className="bg-bg-cream border-2 border-sage-dark p-6 shadow-retro-sage">
          {children}
        </div>
      </div>

      <div className="mt-auto border-t-2 border-sage-light border-dashed pt-4 flex justify-between items-end text-sm z-10 relative">
        <div className="text-sage-dark font-bold">
          <span className="text-peri">{prompt}</span> <span className="blink">_</span>
        </div>
      </div>
    </div>
  )
}

export function SkillsView() {
  return (
    <FileView prompt="C:\GARDEN\SKILLS_LOG\>" filename="SKILLS_LOG.DAT">
      <h2 className="font-pixel text-3xl text-sage-dark mb-4">SKILLS_LOG.DAT</h2>
      <div className="space-y-3 font-mono text-sm">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col sm:flex-row sm:justify-between gap-1">
            <span className="text-sage-dark font-bold">{skill.name}</span>
            <span className="text-peri-dark">{skill.level}</span>
          </div>
        ))}
      </div>
    </FileView>
  )
}

export function ContactView() {
  return (
    <FileView prompt="C:\GARDEN\CONTACT_ROOT\>" filename="CONTACT.CFG">
      <h2 className="font-pixel text-3xl text-sage-dark mb-4">CONTACT_ROOT/</h2>
      <p className="text-sm text-sage-text mb-6 leading-relaxed">
        Open to chats about design, code, puzzles, and everything in between c:
      </p>
      <div className="space-y-3 text-sm text-sage-text font-mono">
        {contacts.map((item) => (
          <p key={item.label}>
            <span className="text-peri">{item.label}:</span>{' '}
            <a
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="hover:text-peri underline underline-offset-2 decoration-peri/40"
            >
              {item.value}
            </a>
          </p>
        ))}
        <p className="mt-4 text-sage-dark font-bold">&gt;&gt; Leave a seed. Watch it grow.</p>
      </div>
    </FileView>
  )
}
