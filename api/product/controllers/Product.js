'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Warning: only authenticated non-admin user can post a seed object.
   * Only permit Product.create and Product.seed when seeding data.
   */
  seed: async ctx => {
    if (Array.isArray(ctx.request.body)) {
      const arr = ctx.request.body;
      return Promise.all(arr.map(item => {
        // strapi.query will maybe also work: https://strapi.io/documentation/3.0.0-beta.x/concepts/queries.html#api-reference
        return strapi.services.product.create(item);
      }))
      // TO DO: take related "package products" info from seed object and create: https://github.com/strapi/strapi/issues/1191
      .then(values => {
        ctx.send(values);
      });
    } else {
      const errMsg = 'Seed oject is not an array!';
      ctx.send(errMsg);
      return Promise.reject(new Error(errMsg)).then(null, err => console.log('Error:', err));
    }
  }
};
