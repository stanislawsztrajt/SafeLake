export enum DifficultyEnum {
  EASY = "Łatwy",
  MEDIUM = "Średni",
  HARD = "Trudny"
}
export type Difficulty = `${DifficultyEnum}`

export interface Level {
  tip: string
  difficulty: Difficulty
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  documentId: string
}

export interface LevelHack extends Level {
  question: string
  answer?: string
}

export interface LevelMessage extends Level {
  content: string
  answer: boolean
  real_photo: any
}

export interface LevelPhone extends Level {
  content_media: any
  content_message: string
}