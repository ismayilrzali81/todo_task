export enum Filter {
  ALL,
  DONE,
  URGENCY,
}

export enum ADD_EDIT_SCREEN {
  ADD,
  EDIT,
}

export enum URGENCY {
  LOW = 0,
  HIGH = 1,
}

export type RootStackParamList = {
  AddEdit: { type: ADD_EDIT_SCREEN, todo: TodoData }; // Define the type for the params of the "Home" screen
  Home: undefined;
};

export interface TodoData {
  _id: string;
  description: string;
  done: boolean;
  title: string;
  urgency: number;
}
