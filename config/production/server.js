module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://88.222.245.103'), // change to your domain/IP
  app: { keys: env.array('APP_KEYS') },
});
