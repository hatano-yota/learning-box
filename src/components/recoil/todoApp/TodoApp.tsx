import SearchForm from "@/components/recoil/todoApp/SearchForm";
import TitleForm from "@/components/recoil/todoApp/TitleForm";
import TodoAddButton from "@/components/recoil/todoApp/TodoAddButton";
import TodoList from "@/components/recoil/todoApp/TodoList";

const TodoApp = (): JSX.Element => {
  // useStateでも十分実装できそう
  return (
    <div className="mt-3">
      <div>
        <TitleForm />
        <TodoAddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
