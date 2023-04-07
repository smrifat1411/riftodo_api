const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { json } = require("express");

// console.log(allTask.myTasks);

// without wrap with async await

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// const getAllTasks = asyncWrapper(async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks });
//   } catch (er) {
//     res.status(500).json({ msg: er });
//   }
// });

const getTask = async (req, res,next) => {
  const { id: taskId } = req.params;

  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    const error = new Error("Not Found")

    error.status = 404

    return next(error)
    // return res.status(404).json({ msg: `No Task Found with name ${taskId}` });
  }

  res.status(200).json({ task });
};

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No Task Found with name ${taskId}` });
  }

  res.status(200).json({task:task});
});



const deleteTask =asyncWrapper(async (req, res) => {
  
  const { id: taskId } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskId })

  if (!task) {
    return res.status(404).json({ msg: `No Task Found with name ${taskId}` });
  }

  res.status(200).json({task});

})

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
