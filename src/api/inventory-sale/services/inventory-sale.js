'use strict';

/**
 * inventory-sale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventory-sale.inventory-sale');
