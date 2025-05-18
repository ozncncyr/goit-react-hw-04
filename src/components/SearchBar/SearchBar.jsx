import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, isVisible, isSticky }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Don't be lazy, enter something!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header
      className={`${css.searchBar} ${isSticky ? css.sticky : ""} ${
        !isVisible ? css.hidden : ""
      }`}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want again?"
          autoComplete="off"
          autoFocus
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
