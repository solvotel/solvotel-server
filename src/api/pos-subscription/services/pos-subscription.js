'use strict';

/**
 * pos-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pos-subscription.pos-subscription');
