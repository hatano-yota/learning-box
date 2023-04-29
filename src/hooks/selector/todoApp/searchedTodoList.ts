import { searchTextFormState } from "@/hooks/atom/todoApp/searchTextForm";
import { todoListState } from "@/hooks/atom/todoApp/todoList";
import { Todo } from "@/types/Type";
import { selector } from "recoil";

export const searchedTodoListSelector = selector<Todo[]>({
  key: "searchedTodoList",
  // getはGetRecoilValueの{ get }を引数に持つ関数
  get: ({ get }) => {
    // 引数のgetを使ってAtomから最新の値を取得(タスク一覧)
    const todoList: Todo[] = get(todoListState);
    // 同様に検索フィールドの文字列を取得
    const searchText: string = get(searchTextFormState);
    // 検索フィールドに入力がある場合、その条件に合致したタスクのみを返却する
    return searchText ? todoList.filter((t) => t.title.includes(searchText)) : todoList;
  },
});
