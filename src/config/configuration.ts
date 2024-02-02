export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 8080,
  uri: process.env.DB_URI,
});
