import { translate } from '@docusaurus/Translate'

export const projects: Project[] = [
  {
    title: 'Brian Shen Blog',
    description: '🦖 Personal blog based on Docusaurus static site generator',
    preview: '/img/project/blog.png',
    website: 'https://brianshen.cc',
    source: 'https://github.com/HaoxiangShen/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type ProjectType = 'personal' | 'web' | 'app' | 'toy' | 'other'

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: translate({ id: 'tag.favorite.title' }),
    description: translate({ id: 'tag.favorite.description' }),
    color: '#e9669e',
  },
  opensource: {
    label: translate({ id: 'tag.opensource.title' }),
    description: 'tag.opensource.description',
    color: '#39ca30',
  },
  product: {
    label: translate({ id: 'tag.product.title' }),
    description: translate({ id: 'tag.product.title' }),
    color: '#dfd545',
  },
  design: {
    label: translate({ id: 'tag.design.title' }),
    description: translate({ id: 'tag.design.title' }),
    color: '#a44fb7',
  },
  personal: {
    label: translate({ id: 'tag.personal.title' }),
    description: translate({ id: 'tag.personal.title' }),
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)
