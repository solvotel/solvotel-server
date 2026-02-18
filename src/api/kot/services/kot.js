'use strict';

/**
 * kot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kot.kot');
