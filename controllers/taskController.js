const Task = require("../models/Task");

// console.log(allTask.myTasks);

const getAllTasks = async (req, res) => {
  // res.send("Get All Tasks");
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (er) {
    res.status(500).json({ msg: er });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskName } = req.params;

    const task = await Task.findOne({ name: taskName });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `No Task Found with name ${taskName}` });
    }


    res.status(200).json({ task });


    
  } catch (er) {
    res.status(500).json({ msg: er });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (er) {
    res.status(500).json({ msg: er });
  }
};
const updateTask = (req, res) => {
  res.send("Update a Task");
};
const deleteTask = (req, res) => {
  res.send("Delete a Task");
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
