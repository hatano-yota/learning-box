import { todoListState } from "@/hooks/atom/todoApp/todoList";
import { todoTitleFormState } from "@/hooks/atom/todoApp/todoTitleForm";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const TodoAddButton = (): JSX.Element => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [todoTitleFormValue, setTodoTitleFormValue] = useRecoilState(todoTitleFormState);
  const handleSetTodo = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }]);
    setTodoTitleFormValue("");
  }, [todoList, setTodoList, todoTitleFormValue, setTodoTitleFormValue]);

  return <button onClick={handleSetTodo}>追加</button>;
};

export default TodoAddButton;
