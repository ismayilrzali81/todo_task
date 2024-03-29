import { NextFunction, Request, Response } from "express";
import Task, { TaskModel } from "../models/task";
import { handleErrorResponse } from "../utils/handleErrorResponse";
import { validateTaskID } from "../utils/validateTaskID";

export const addTask = async (
  req: Request<{}, {}, TaskModel>,
  res: Response<{ task: TaskModel } | { error: string }>
): Promise<void> => {
  try {
    const { title, description, done, urgency } = req.body;
    const task: TaskModel = await Task.create({
      title,
      description,
      done,
      urgency,
    });

    res.status(201).json({ task });
  } catch (error: unknown) {
    handleErrorResponse(res, error);
  }
};

export const deleteTask = async (
  req: Request<{}, {}, TaskModel>,
  res: Response<{ task: TaskModel } | { error: string } | { message: string }>
): Promise<void> => {
  try {
    const params = req.params as { taskID: string };
    const taskID = params?.taskID;

    if (validateTaskID(taskID, res)) {
      const result = await Task.deleteOne({
        _id: taskID,
      });

      if (result.deletedCount) {
        res.status(201).json({ message: "Success" });
      } else {
        res.status(404).json({ error: "Can't delete" });
      }
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const editTask = async (
  req: Request<{}, {}, TaskModel>,
  res: Response<{ task: TaskModel } | { error: string } | { message: string }>
): Promise<void> => {
  try {
    const params = req.params as { taskID: string };
    const { title, description, done, urgency } = req.body;
    const taskID = params?.taskID;

    if (validateTaskID(taskID, res)) {
      const result = await Task.findOneAndUpdate(
        {
          _id: taskID,
        },
        {
          title,
          description,
          done,
          urgency,
        },
        { runValidators: true, new: true  }
      );

      if (result) {
        res.status(201).json({ task: result });
      } else {
        res.status(404).json({ error: "Can't update" });
      }
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const getAllTasks = async (_: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const getAllReadyTasks = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await Task.find({
      done: true,
    });
    res.status(200).json({ tasks });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const getAllUrgentTasks = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await Task.find({
      urgency: 1,
      done: false
    });
    res.status(200).json({ tasks });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
export const changeTaskStatus = async (
  req: Request<{}, {}, TaskModel>,
  res: Response<any>
): Promise<void> => {
  try {
    const params = req.params as { taskID: string };
    const taskID = params?.taskID;


    if (validateTaskID(taskID, res)) {
      const task = await Task.findById(taskID);

      if (!task) {
        res.status(404).json({ error: "Task not found" });
        return;
      }

      const updatedTask = await Task.findOneAndUpdate(
        { _id: taskID },
        { done: !task.done },
        {
          runValidators: true, new: true ,
        }
      );

      if (!task) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.status(200).json(updatedTask);
      }
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
