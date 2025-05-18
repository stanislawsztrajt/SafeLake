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


  // getting by index
  async findOne (ctx) {
    const { id } = ctx.params;
    const { data } = await super.find(ctx);
    const { answer, ...levelsWithoutAnswer } = data[id];

    return levelsWithoutAnswer
  }
}));
