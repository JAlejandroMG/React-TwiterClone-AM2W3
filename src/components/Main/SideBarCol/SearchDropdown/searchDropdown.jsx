import React from 'react';
import './stylesSearchDropdown.css';

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const searchUser = this.props.searchUser;
    // const profiles = this.props.profiles;

    return(
      <div className="search-dropdown">
        <div>
          <img src={this.props.profileImg} alt="Profile Image"/>
        </div>
        <div>
          <span>{this.props.profile}</span>
          <p>{this.props.username}</p>
        </div>
      </div>
    )
  }
}

export default SearchDropdown;

/* render() {
  const searchUser = this.props.searchUser;
  const profiles = this.props.profiles;

  return(
    { 
      if (searchUser) {
        profiles
          .filter((profile) =>
            profile.username
              .toLowerCase()
              .includes(searchUser.toLowerCase())
          )
          .map((profile) => {
            return (
              <div className="search-dropdown">
                <div>{profile.profileImg}</div>
                <div>
                  <span>{profile.profile}</span>
                  <p>{profile.username}</p>
                </div>
              </div>
            )
          })
      }
    }
  )
} */
