import { todoTitleFormState } from "@/hooks/atom/todoApp/todoTitleForm";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

const TitleForm = (): JSX.Element => {
  // useRecoilStateでtodoTitleFormStateの値,セッター関数を取得
  const [todoTitleFormValue, setTodoTitleFormValue] = useRecoilState(todoTitleFormState);
  // テキストフィールドのonChange処理
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitleFormValue(e.target.value);
    },
    [setTodoTitleFormValue],
  );

  return (
    <label>
      タスク名：
      <input
        type="text"
        value={todoTitleFormValue}
        onChange={onChange}
        name="todoTitle"
        className="m-3"
      />
    </label>
  );
};

export default TitleForm;
