'use strict';

/**
 * inventory-purchase service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventory-purchase.inventory-purchase');
