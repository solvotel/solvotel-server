'use strict';

/**
 * restaurant-invoice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-invoice.restaurant-invoice');
