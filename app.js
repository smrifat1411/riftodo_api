const express = require("express");
const tasksRouter = require("./routes/taskRoutes");
const bodyParser = require("body-parser");
const dbConnect = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/error");

const app = express();
const port = 4000;

// MiddleWare

app.use(bodyParser.json());

app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
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
