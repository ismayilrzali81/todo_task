import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { StoreInterface } from "../interfaces";
import { Filter, TodoData } from "../types";
import React from "react";

export const commonContext = createContext<StoreInterface>({} as any);
const CommonContextProvider = ({ children }: PropsWithChildren) => {
  const { Provider } = commonContext;
  const [filter, setFilter] = useState<Filter>(Filter.ALL);
  const [loading, setLoading] = useState<boolean>(false);

  const [todos, setTodos] = useState<TodoData[] | []>([]);

  const createTodo = (todo: TodoData) => {
    setTodos((prev) => [...prev, todo]);
  };
  const updateTodo = (updateTodo: TodoData) => {
    setTodos((prev) =>
      prev.map((todo) => (todo._id === updateTodo._id ? updateTodo : todo))
    );
  };

  const setAllTodo = useCallback(
    (todos: TodoData[]) => setTodos(todos),
    [todos]
  );
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  const store: StoreInterface = {
    filter,
    setFilter,
    todos,
    createTodo,
    setAllTodo,
    deleteTodo,
    updateTodo,
    loading,
    setLoading
  };
  return <Provider value={store}>{children}</Provider>;
};

export default CommonContextProvider;
