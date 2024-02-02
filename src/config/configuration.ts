export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 8080,
  database: {
    port: parseInt(process.env.DB_PORT, 10) || 27017,
    name: process.env.DB_NAME,
    uri: process.env.DB_URI,
  },
});
