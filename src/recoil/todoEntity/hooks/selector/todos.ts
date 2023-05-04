import { todoIdsState } from "@/recoil/todoEntity/hooks/atom/todoIds";
import { todoState } from "@/recoil/todoEntity/hooks/selectorFamily/todoState";
import { Todo } from "@/recoil/todoEntity/types/Type";
import { selector } from "recoil";

export const TodosState = selector<Todo[]>({
  key: "state-todos",
  get: ({ get }) => {
    const todoIds = get(todoIdsState);
    return todoIds.map((todoId) => get(todoState(todoId)));
  },
});
