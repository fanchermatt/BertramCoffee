//get the environment variables from the .env file
const path = require("path");
const dotenv = require("dotenv");
const pathToEnv = path.join(__dirname, "..", "..", ".env");
dotenv.config({ path: pathToEnv });

//import common config options from centralized file
const commonConfig = require("../common/dbOptions");
const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

const config = {
  development: {
    ...commonConfig,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
  },
  test: {
    ...commonConfig,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
  },
  production: {
    ...commonConfig,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    port: DB_PORT,
  },
};
module.exports = config;
