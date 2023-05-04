import { TodoDescription, TodoId } from "@/recoil/todoEntity/types/Type";
import { atomFamily } from "recoil";

export const todoDescriptionState = atomFamily<TodoDescription, TodoId>({
  key: "state-todo-description",
  default: "",
});
