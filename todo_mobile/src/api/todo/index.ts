import { AxiosResponse } from "axios";
import { request } from "../request";
import { TodoData } from "../../types";

export const getTodoAPI = async (): Promise<{ tasks: TodoData[] }> => {
  const response = await request.get("/task/getAllTasks");
  return response.data;
};


export const getDoneTodosAPI = async (): Promise<{ tasks: TodoData[] }> => {
  const response = await request.get("/task/getAllReadyTasks");
  return response.data;
};

export const getAllUrgentTodosAPI = async (): Promise<{ tasks: TodoData[] }> => {
  const response = await request.get("/task/getAllUrgentTasks");
  return response.data;
};
export const postTodo = async (data: TodoData): Promise<{ task: TodoData }> => {
  const response = await request.post("/task/addOneTask", data);
  console.log({ response });
  return response.data;
};
export const updateTodoApi = async (
  data: Omit<TodoData, "_id">,
  id: string
): Promise<TodoData> => {
  console.log({ data, id });
  await request.put(`/task/editTask/${id}`, data);

  return { ...data, _id: id };
};
export const deleteTodoApi = async (_id: string): Promise<string> => {
  await request.delete(`/task/deleteOneTask/${_id}`);
  return _id;
};

export const makeDoneApi = async (_id: string): Promise<string> => {
  const response = await request.put(`/task/changeTaskDoneStatus/${_id}`);
  return response.data;
};
