import { TodoDescription, TodoId } from "@/recoil/todoEntity/types/Type";
import { atomFamily } from "recoil";

// Error: duplicate atom key "state-todo-description__"1"...
export const todoDescriptionState = atomFamily<TodoDescription, TodoId>({
  key: "state-todo-description",
  default: "",
});
