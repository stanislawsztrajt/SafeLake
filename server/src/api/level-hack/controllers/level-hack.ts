/**
 * level-hack controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::level-hack.level-hack', ({ strapi }) => ({
  // checking answer, overwriting default function
  async create (ctx) {
    try {
      const { body } = ctx.request
      const res = await super.find(ctx);
      const entity = ((res.data) as any[]).filter(el => el.id === body.id)[0]

      if (!entity) {
        return "This level doesn't exists"
      }

      if (entity.answer === body.answer) {
        return true
      } else {
        return false
      }

    } catch (err) {
      ctx.body = err;
    }
  },

  async find (ctx) {
    const { data } = await super.find(ctx);
    const levelsWithoutAnswer = (data as any[]).map(element => {
      const { answer, ...el } = element;
      return el
    })

    return levelsWithoutAnswer
  }
}));
