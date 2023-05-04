import { todoIdsState } from "@/recoil/todoEntity/hooks/atom/todoIds";
import { todoDescriptionState } from "@/recoil/todoEntity/hooks/atomFamily/todoDescription";
import { todoIsDoneState } from "@/recoil/todoEntity/hooks/atomFamily/todoIsDone";
import { todoTitleState } from "@/recoil/todoEntity/hooks/atomFamily/todoTitle";
import { Todo, TodoId } from "@/recoil/todoEntity/types/Type";
import { DefaultValue, selectorFamily } from "recoil";

export const todoState = selectorFamily<Todo, TodoId>({
  key: "state-todo",
  get:
    (todoId) =>
    ({ get }) => {
      return {
        id: todoId,
        title: get(todoTitleState(todoId)),
        description: get(todoDescriptionState(todoId)),
        isDone: get(todoIsDoneState(todoId)),
      };
    },
  set:
    (todoId) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        // NOTE: DefaultValue型のときはresetから呼ばれたとき
        reset(todoTitleState(todoId));
        reset(todoDescriptionState(todoId));
        reset(todoIsDoneState(todoId));
        return;
      }

      set(todoTitleState(todoId), newValue.title);
      newValue.description && set(todoDescriptionState(todoId), newValue.description);
      set(todoIsDoneState(todoId), newValue.isDone);

      if (get(todoIdsState).find((todoId) => todoId === newValue.id)) return; // NOTE: 更新の時はskip
      set(todoIdsState, (prev) => [...prev, newValue.id]); // NOTE: 全件取得・全リセット用にIDの配列を保持しておくと便利
    },
});
