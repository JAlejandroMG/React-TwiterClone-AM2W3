import React from 'react';
import './stylesSearchDropdown.css';

const SearchDropdown = (props) => {
  return(
    <div className="search-dropdown-element">
      <div>
        <img className="profile-image" src={props.profileImg} alt="Profile"/>
      </div>
      <div>
        <h4>{props.profile}</h4>
        <p>{`@${props.username}`}</p>
      </div>
    </div>
  )
}

export default SearchDropdown;
