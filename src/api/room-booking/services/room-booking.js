'use strict';

/**
 * room-booking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-booking.room-booking');
