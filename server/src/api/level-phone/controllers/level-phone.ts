/**
 * level-phone controller
 */

import { factories } from '@strapi/strapi'

const sortByDifficulty = (data:any[]) => {
  const order = ["Łatwy", "Średni", "Trudny"];

  return data.sort((a, b) => order.indexOf(a.difficulty) - order.indexOf(b.difficulty));
};

export default factories.createCoreController('api::level-phone.level-phone', ({ strapi }) => ({
  // getting by index
  async findOne (ctx) {
    const { id } = ctx.params;
    const { data } = await super.find(ctx);
    const sortedData = sortByDifficulty(data);
    return sortedData[id]
  }
}));
