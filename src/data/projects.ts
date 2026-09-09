import { projectAsciiArts } from './asciiArt'

export type ProjectStatus = 'MATURE' | 'SPROUTING' | 'DORMANT'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  number: string
  status: ProjectStatus
  name: string
  description: string
  tags: string[]
  actionLabel: string
  asciiArt: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'theconvo',
    number: '[01]',
    status: 'SPROUTING',
    name: 'THE_CONVO',
    description:
      'An interactive web experience where users plant flowers tied to songs that remind them of a loved one, creating a shared digital memory garden with YouTube-backed song suggestions.',
    tags: ['#NEXTJS', '#REACT', '#TYPESCRIPT', '#YOUTUBE_API'],
    actionLabel: 'OPEN_REPO.EXE',
    links: [{ label: 'GitHub', href: 'https://github.com/clarabkwon/theconvo' }],
    asciiArt: projectAsciiArts[0],
  },
  {
    id: 'pokegen',
    number: '[02]',
    status: 'MATURE',
    name: 'POKEGEN',
    description:
      'A web app that generates a random Pokémon by fetching its sprite and name across 1000+ IDs via PokéAPI, with an interactive score system and pixel-art UI.',
    tags: ['#REACT', '#HTML', '#CSS', '#POKEAPI'],
    actionLabel: 'OPEN_REPO.EXE',
    links: [{ label: 'GitHub', href: 'https://github.com/clarabkwon/PokeGen' }],
    asciiArt: projectAsciiArts[1],
  },
  {
    id: 'social-network',
    number: '[03]',
    status: 'MATURE',
    name: 'SOCIAL_GRAPH',
    description:
      'Directed graph with optimized vertex and edge operations, plus algorithms for link prediction, shortest path, and influencer detection — validated through a JUNG-based GUI.',
    tags: ['#JAVA', '#JUNG'],
    actionLabel: 'OPEN_REPO.EXE',
    links: [
      {
        label: 'Repo',
        href: 'https://gitshare.me/repo/f867484e-6c2a-4786-94ed-813f62035423',
      },
    ],
    asciiArt: projectAsciiArts[2],
  },
  {
    id: 'multi-cloud-portfolio',
    number: '[04]',
    status: 'MATURE',
    name: 'MULTI_CLOUD',
    description:
      'Deployed the same static website on both AWS S3 and Azure Blob Storage with CDN.',
    tags: ['#AWS_S3', '#CLOUDFRONT', '#AZURE', '#CDN'],
    actionLabel: 'OPEN_REPO.EXE',
    links: [{ label: 'GitHub', href: 'https://github.com/clarabkwon/portfolio' }],
    asciiArt: projectAsciiArts[3],
  },
  {
    id: 'mockmate',
    number: '[05]',
    status: 'MATURE',
    name: 'MOCKMATE',
    description:
      'A platform that helps developers prepare for interviews through AI-assisted feedback and voice interaction.',
    tags: ['#HTML', '#CSS', '#REACT'],
    actionLabel: 'OPEN_REPO.EXE',
    links: [
      { label: 'GitHub', href: 'https://github.com/cbrowne9472/MockMateProj' },
      { label: 'DevPost', href: 'https://devpost.com/software/mockmate-pctbes' },
    ],
    asciiArt: projectAsciiArts[1],
  },
]

export const statusStyles: Record<ProjectStatus, string> = {
  MATURE: 'bg-sage text-bg-cream',
  SPROUTING: 'bg-peri-dark text-bg-cream',
  DORMANT: 'bg-sage-light text-sage-dark',
}
