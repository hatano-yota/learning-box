export type TodoId = string;
export type TodoTitle = string;
export type TodoDescription = string;
export type TodoIsDone = boolean;

export type Todo = {
  id: TodoId;
  title: TodoTitle;
  description?: TodoDescription;
  isDone: TodoIsDone;
};
