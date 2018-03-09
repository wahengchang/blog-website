import React from 'react';
import './style.scss';

const SearchInput = () => (
  <div className="header-search-input">
    <input
      id="search"
      name="search"
      type="search"
      autoComplete="on"
      placeholder="Search articles..."
    />
  </div>
);

export default SearchInput;
