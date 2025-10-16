'use strict';

/**
 * room-token service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-token.room-token');
