export default {
    async afterCreate(event) {
      const { result } = event;
      const { to, subject, text, html } = result;
  
      try {
        await strapi.service('api::wedding-data.email').sendEmail({ to, subject, text, html });
        strapi.log.info('Email sent successfully');
      } catch (error) {
        strapi.log.error('Failed to send email:', error);
      }
    },
};
