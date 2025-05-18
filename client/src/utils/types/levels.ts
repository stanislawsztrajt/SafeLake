export enum DifficultyEnum {
  EASY = "Łatwy",
  MEDIUM = "Średni",
  HARD = "Trudny"
}
export type Difficulty = `${DifficultyEnum}`

export enum LevelsEnum {
  MESSAGE = "message",
  PHONE = "phone"
}

export type LevelType = `${LevelsEnum}`

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
  lesson: string
}

export interface LevelMessage extends Level {
  answer: boolean
  real_photo: {
    url: string
  }
  explanation: string
  question: string
}

export interface LevelPhone extends Level {
  content_media: {
    url: string
  }
  answer: boolean
  content_message: string
  explanation: string
}

export interface CookieLevelProgress {
  id: string
  isCorrect: boolean
  answer: boolean
}