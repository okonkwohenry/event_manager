/**
 * event controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::event.event', ({ strapi }) => ({
  async create(ctx) {
    const { startDate, host } = ctx.request.body;

    // const eventService = (strapi.services as any).event;
    
    // Check if an event exists with the same startDate and host
    const existingEvent = await super.findOne({ startDate, host });

    if (existingEvent) {
      return ctx.throw(400, 'An event with the same startDate already exists for this host.');
    }

    // Calling the default core action
    return existingEvent.data;
  },
}));

