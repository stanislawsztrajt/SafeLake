import axios from "axios"
import { LevelHack, LevelMessage, LevelPhone } from "../types/levels"
import { Response } from "../types/api";

export const LevelsHackService = {
  findOne: async () => {
    const res: Response<LevelHack[]> = await axios.get(import.meta.env.VITE_API_URL + "level-hacks");
    return res.data
  },
  checkAnswer: async () => {
    const res: boolean = await axios.post(import.meta.env.VITE_API_URL + "level-hacks");
    return res
  }
}

export const LevelsMessageService = {
  findOne: async (index: number) => {
    const res: Response<LevelMessage> = await axios.get(import.meta.env.VITE_API_URL + `level-messages/${index}`);
    return res.data
  },
}

export const LevelsPhoneService = {
  findOne: async (index: number) => {
    const res: Response<LevelPhone> = await axios.get(import.meta.env.VITE_API_URL + `level-phones/${index}`);
    return res.data
  },
}
