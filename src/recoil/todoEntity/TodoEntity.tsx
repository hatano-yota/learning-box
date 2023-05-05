import { TodosState } from "@/recoil/todoEntity/hooks/selector/todos";
import { useTodo } from "@/recoil/todoEntity/hooks/useTodo";
import { Todo } from "@/recoil/todoEntity/types/Type";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";

const apiResponse = {
  todos: [
    { id: "1", title: "SHIN", description: "main cast for kingdom", isDone: false },
    { id: "2", title: "HYOU", description: "substitute king", isDone: false },
    { id: "3", title: "TEN", description: "strategist", isDone: false },
    { id: "4", title: "YOTANWA", description: "lord of death", isDone: false },
    { id: "5", title: "OKI", description: "monstrous bird of qin", isDone: false },
  ],
};

const TodoEntity = () => {
  const todos = useRecoilValue(TodosState);
  const { setFromArray, upsertTodo, removeTodo } = useTodo();

  useEffect(() => {
    setFromArray(apiResponse.todos);
  }, []);

  const handleCreateDummyTodo = useCallback(() => {
    // NOTE: APIリクエストを送る Idの自動生成など
    const newTodoId = uuidv4();
    upsertTodo({ id: newTodoId, title: "dummy", description: "it's dummy cast", isDone: false });
  }, [upsertTodo]);

  // BUG: todo.descriptionが初期化("")される
  const toggleTodoStatus = useCallback(
    (todo: Todo) => {
      upsertTodo({
        ...todo,
        isDone: !todo.isDone,
      });
    },
    [upsertTodo],
  );

  return (
    <div>
      <h1>Kingdom todoList</h1>
      <button onClick={handleCreateDummyTodo}>Add Dummy cast</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <p>
                タイトル： {todo.title} {todo.isDone && "(Done)"}
              </p>
              {todo.description && <p>詳細： {todo.description}</p>}
            </div>
            <button onClick={() => removeTodo(todo.id)}>remove</button>
            <button onClick={() => toggleTodoStatus(todo)}> toggle status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoEntity;
