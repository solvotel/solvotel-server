module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://82.29.164.139'), // change to your domain/IP
  app: { keys: env.array('APP_KEYS') },
});
