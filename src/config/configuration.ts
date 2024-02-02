export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  database: {
    port: parseInt(process.env.DB_PORT, 10) || 27017,
    name: process.env.DB_NAME,
    uri: process.env.DB_URI,
  },
});
