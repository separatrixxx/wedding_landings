import { Context } from 'koa';


export default {
  async send(ctx: Context) {
    const { to, subject, text, html } = ctx.request.body;

    if (!to || !subject || !text || !html) {
      return ctx.throw(400, 'Please provide all required fields');
    }

    try {
      await strapi.service('api::wedding-data.email').sendEmail({ to, subject, text, html });
      ctx.send({ message: 'Email sent successfully' });
    } catch (error) {
      ctx.throw(500, 'Failed to send email');
    }
  },
};
