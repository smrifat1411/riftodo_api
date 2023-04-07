const dbConnect = require("./db/connect");

const express = require("express");

const tasksRouter = require("./routes/taskRoutes");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = 4000;

// MiddleWare

app.use(bodyParser.json());

app.use("/api/v1/tasks", tasksRouter);

// console.log(dbConnect);

const start = async () => {
  try {
    await dbConnect(process.env.DB_URI);

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
