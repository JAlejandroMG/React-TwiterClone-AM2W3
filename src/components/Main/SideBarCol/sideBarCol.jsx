import React from 'react';
import SearchBar from './SearchBar/searchBar';
import Trends from './Trends/trends';
import SearchDropdown from './SearchDropdown/searchDropdown';
import {profiles} from '../../../databases/profiles';


class SideBarCol extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: profiles,
      searchUser: '',
      showDropdown: false
    }
  }

  handleSearch = (evento) => {
    //Capturar lo que está escribiendo el usuario
    const user = evento.target.value;
    this.setState({ searchUser: user });
  };

  showDropdown = () => {
    //Se muestra el componente searchDropdown
    this.setState({showDropdown: true})
  }

  hideDropdown = () => {
    //Se muestra el componente searchDropdown
    this.setState({showDropdown: false})
  }

  render() {
    return (
      <div className="t-sidebar-col">
          {/* <button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button> */}
          <SearchBar searchUser={this.state.searchUser} handleSearchFn={this.handleSearch} showDropdownFn={this.showDropdown} hideDropdownFn={this.hideDropdown} />
          {this.state.showDropdown &&
            this.state.profiles
            .filter((profile) =>
              profile.username
                .toLowerCase()
                .includes(this.state.searchUser.toLowerCase())
            )
            .map((profile) => {
              return (
                <SearchDropdown profileImg={profile.profilesImg} profile={profile.profile} username={profile.username}/>
              )
            })
          }
          <Trends />
      </div>
    )
  }
}


export default SideBarCol;

{/* <SearchDropdown profiles={this.state.profiles} searchUser={this.state.searchUser}/> */}
