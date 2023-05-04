import { TodoId, TodoIsDone } from "@/recoil/todoEntity/types/Type";
import { atomFamily } from "recoil";

export const todoIsDoneState = atomFamily<TodoIsDone, TodoId>({
  key: "state-todo-description",
  default: false,
});
