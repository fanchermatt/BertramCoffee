const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const pathToEnv = path.join(__dirname, "..", ".env");
dotenv.config({ path: pathToEnv });
const port = process.env.SERVER_PORT || 3001;
const cors = require("cors");
const { sequelize: dbConnection } = require("./models");

//allow cors and parse json
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // Test the database connection
  dbConnection
    .authenticate()
    .then(() => {
      console.log("Database connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
});
