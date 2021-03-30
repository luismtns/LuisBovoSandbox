const env = process.env.APP_ENV || "development";
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;
const cookieName = "app";

const config = {
  development: {
    path: "/",
    baseUrl: `http://${host}:${port}`,
    endpoint: "http://localhost/wordpress/wp-json",
  },
  test: {
    path: "/",
    baseUrl: `http://${host}:${port}`,
    endpoint: "",
  },
  production: {
    path: "/",
    baseUrl: "",
    endpoint: "",
  },
};

module.exports = {
  ...config[env],
  env,
  cookieName,
};
