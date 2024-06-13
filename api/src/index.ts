import customRoutes from './api/wedding-data/routes/custom-routes';


export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const router = strapi.server.router;

    customRoutes.forEach(route => {
      router[route.method.toLowerCase()](route.path, async (ctx, next) => {
        await strapi.controller(route.handler).send(ctx);
        await next();
      });
    });
  },


  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
