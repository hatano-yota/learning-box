import { TodoId, TodoTitle } from "@/recoil/todoEntity/types/Type";
import { atomFamily } from "recoil";

export const todoTitleState = atomFamily<TodoTitle, TodoId>({
  key: "state-todo-title",
  default: "",
});
