import { searchedTodoListSelector } from "@/hooks/selector/todoApp/searchedTodoList";
import { Todo } from "@/types/Type";
import { useRecoilValue } from "recoil";

const TodoList = (): JSX.Element => {
  // useRecoilValueにsearchedTodoListSelectorを渡す
  // 返却される値はsearchedTodoListSelectorのget()で定義したTodo[]
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);

  return (
    <div>
      <p>タスク一覧</p>
      <ul>
        {list.map((todo: Todo, i: number) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
