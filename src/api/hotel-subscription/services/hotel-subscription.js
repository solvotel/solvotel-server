'use strict';

/**
 * hotel-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hotel-subscription.hotel-subscription');
