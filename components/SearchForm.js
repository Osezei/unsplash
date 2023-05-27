"use client";
import React from "react";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" />
        <button type="submit">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
