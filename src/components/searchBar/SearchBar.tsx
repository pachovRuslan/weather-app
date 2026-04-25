import { useState } from "react";
import { SearchForm, SearchInput, SearchButton } from "./SearchBar_Styles";

type SearchBarPropsType = {
  onSearch: (city: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarPropsType) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value.trim());
      setValue("");
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите город..."
      />
      <SearchButton type="submit">Найти</SearchButton>
    </SearchForm>
  );
};