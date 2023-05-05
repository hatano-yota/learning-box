import SearchForm from "@/recoil/todoApp/components/SearchForm";
import TitleForm from "@/recoil/todoApp/components/TitleForm";
import TodoAddButton from "@/recoil/todoApp/components/TodoAddButton";
import TodoList from "@/recoil/todoApp/components/TodoList";

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
