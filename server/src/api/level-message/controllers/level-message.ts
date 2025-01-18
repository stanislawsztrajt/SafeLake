/**
 * level-message controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::level-message.level-message', ({ strapi }) => ({
  // getting by index
  async findOne (ctx) {
    const { id } = ctx.params;
    const { data } = await super.find(ctx);
    return data[id]
  }
}));
