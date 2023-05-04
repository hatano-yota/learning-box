import { todoIdsState } from "@/recoil/todoEntity/hooks/atom/todoIds";
import { todoState } from "@/recoil/todoEntity/hooks/selectorFamily/todoState";
import { Todo, TodoId } from "@/recoil/todoEntity/types/Type";
import { useRecoilCallback } from "recoil";

export const useTodo = () => {
  // NOTE: サーバからデータを取得してstateに反映するときなど
  const setFromArray = useRecoilCallback(({ set }) => (todoArray: Todo[]) => {
    todoArray.forEach((todo) => {
      set(todoState(todo.id), todo);
    });
  });

  const upsertTodo = useRecoilCallback(({ set }) => (newTodo: Todo) => {
    set(todoState(newTodo.id), newTodo);
  });

  const removeTodo = useRecoilCallback(({ set, reset }) => (todoId: TodoId) => {
    reset(todoState(todoId));
    set(todoIdsState, (prev) => prev.filter((id) => id !== todoId));
  });

  return {
    setFromArray,
    upsertTodo,
    removeTodo,
  };
};
