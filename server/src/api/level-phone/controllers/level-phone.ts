/**
 * level-phone controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::level-phone.level-phone', ({ strapi }) => ({
  // getting by index
  async findOne (ctx) {
    const { id } = ctx.params;
    const { data } = await super.find(ctx);
    console.log("🚀 ~ findOne ~ data:", data)
    return data[id]
  }
}));
