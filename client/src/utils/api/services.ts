import axios from "axios"
import { LevelHack, LevelMessage, LevelPhone } from "../types/levels"
import { Response } from "../types/api";

export const LevelsHackService = {
  findOne: async (index: number | string) => {
    const res: Response<LevelHack> = await axios.get(import.meta.env.VITE_API_URL + `level-hacks/${index}`);
    return res.data
  },
  checkAnswer: async (answer: string, id: string | number) => {
    const res: { data: boolean } = await axios.post(import.meta.env.VITE_API_URL + "level-hacks", { answer, id });
    return res.data
  }
}

export const LevelsMessageService = {
  findOne: async (index: number | string) => {
    const res: Response<LevelMessage> = await axios.get(import.meta.env.VITE_API_URL + `level-messages/${index}`);
    return res.data
  },
}

export const LevelsPhoneService = {
  findOne: async (index: number | string) => {
    const res: Response<LevelPhone> = await axios.get(import.meta.env.VITE_API_URL + `level-phones/${index}?populate=content_media`);
    return res.data
  },

  find: async () => {
    const res: Response<LevelPhone[]> = await axios.get(import.meta.env.VITE_API_URL + `level-phones`);
    return res.data
  },
}
