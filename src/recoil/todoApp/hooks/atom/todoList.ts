import { Todo } from "@/recoil/todoApp/types/Type";
import { atom } from "recoil";

export const todoListState = atom<Todo[]>({
  key: "todoList",
  default: [{ title: "one" }, { title: "two" }, { title: "three" }],
});
