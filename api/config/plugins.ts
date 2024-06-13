export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('EMAIL_USER'),
          pass: env('EMAIL_PASS'),
        },
        secure: false, // Использовать TLS, если доступно
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: 'noreply@ori.wedding',
        defaultReplyTo: 'noreply@ori.wedding',
      },
    },
  },
});
