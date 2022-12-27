'use strict';

/**
 * treasure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::treasure.treasure');
