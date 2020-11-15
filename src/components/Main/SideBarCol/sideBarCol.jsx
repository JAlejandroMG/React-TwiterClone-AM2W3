import React from 'react';
import SearchBar from './SearchBar/searchBar';
import Trends from './Trends/trends';

const SideBarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            {/* <button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button> */}
            <SearchBar />
            <Trends />
        </div>
    )
}

export default SideBarCol;
