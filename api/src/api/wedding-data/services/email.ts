import nodemailer from 'nodemailer';


interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export default {
  async sendEmail(options: EmailOptions) {
    const transporter = nodemailer.createTransport({
      host: strapi.config.get('plugin.email.providerOptions.host'),
      port: strapi.config.get('plugin.email.providerOptions.port'),
      auth: {
        user: strapi.config.get('plugin.email.providerOptions.auth.user'),
        pass: strapi.config.get('plugin.email.providerOptions.auth.pass'),
      },
    });

    const mailOptions = {
      from: strapi.config.get('plugin.email.settings.defaultFrom'),
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      strapi.log.info(`Email sent: ${info.response}`);
    } catch (error) {
      strapi.log.error(`Error sending email: ${error}`);
    }
  },
};
