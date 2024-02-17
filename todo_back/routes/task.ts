import express from "express";
import {
  addTask,
  changeTaskStatus,
  deleteTask,
  editTask,
  getAllReadyTasks,
  getAllTasks,
  getAllUrgentTasks,
} from "../controllers/task";
import { body } from "express-validator";

let router = express.Router();

router.delete("/deleteOneTask/:taskID", deleteTask);

router.put("/editTask/:taskID", editTask);

router.get("/getAllTasks", getAllTasks);

router.get("/getAllReadyTasks", getAllReadyTasks);

router.get("/getAllUrgentTasks", getAllUrgentTasks);

router.post(
  "/addOneTask",
  [
    body("title").isString().notEmpty(),
    body("description").isString().notEmpty(),
    body("urgency").isNumeric().notEmpty(),
  ],
  addTask
);

router.put(
  "/changeTaskDoneStatus/:taskID",
  changeTaskStatus
);

module.exports = router;
