import React from 'react';
import './stylesSearchBar.css';
import {SearchOutline} from "@graywolfai/react-heroicons";

const SearchBar = (props) => {
    return (
        <div className="searchbar-container">
          <div className="searchbar">
            <SearchOutline className="search-outline" />
            <input
              className="input" 
              type="text"
              placeholder="Buscar en Twitter"
              onFocus={props.showDropdownFn}
              onBlur={props.hideDropdownFn}
              onChange={props.handleSearchFn}
              value={props.searchUser}
            />
          </div>
        </div>
    )
}

export default SearchBar;
