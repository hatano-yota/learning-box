import { TodoId } from "@/recoil/todoEntity/types/Type";
import { atom } from "recoil";

export const todoIdsState = atom<TodoId[]>({
  key: "state-todo-ids",
  default: [],
});
