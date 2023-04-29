import { searchTextFormState } from "@/hooks/atom/todoApp/searchTextForm";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

const SearchForm = (): JSX.Element => {
  const [searchTextFormValue, setSearchTextFormValue] = useRecoilState(searchTextFormState);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTextFormValue(e.target.value);
    },
    [setSearchTextFormValue],
  );

  return (
    <label>
      検索：
      <input
        type="text"
        value={searchTextFormValue}
        onChange={onChange}
        name="searchTextFormInput"
        className="m-3"
      />
    </label>
  );
};

export default SearchForm;
