export default [
    {
      method: 'POST',
      path: '/send-email',
      handler: 'api::wedding-data.email.send',
      config: {
        policies: [],
        middlewares: [],
      },
    },
];