export type Avatar = 'broker-ben' | 'agent-amanda' | 'hannah-homebuyer'

export type Category =
  | 'Regulatory Updates'
  | 'Document Intelligence'
  | 'Transaction Management'
  | 'Brokerage Operations'
  | 'Consumer Education'

export interface BlogMeta {
  title: string
  slug: string
  avatar: Avatar
  category: Category
  primary_keyword: string
  secondary_keywords: string[]
  meta_description: string
  reading_time: string
  author: string
  date: string
  tags: string[]
  published: boolean
  coverImage?: string
}

export interface BlogPost extends BlogMeta {
  content: string
}
