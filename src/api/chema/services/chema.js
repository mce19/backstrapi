'use strict';

/**
 * chema service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chema.chema');
