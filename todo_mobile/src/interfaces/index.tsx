import { Filter } from "../types";

export interface StoreInterface {
  filter: Filter;
  loading: boolean;
  setFilter: (filter: Filter) => void;
  todos: any[];
  setAllTodo: (value: any) => void;
  createTodo: (value: any) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (value: any) => void;
  setLoading: (value: boolean) => void;
}

export interface ActiveInterface {
  active: boolean;
}
