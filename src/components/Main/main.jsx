import React from 'react';
import PrimaryCol from './PrimaryCol/primaryCol';
import SideBarCol from './SideBarCol/sideBarCol';
import './stylesMain.css';

const Main = (props) => {
    return (
        <div className="t-main">
            <PrimaryCol profileUrl={props.profileUrl} />
            <SideBarCol /* cambiarImagen={props.cambiarImagen} */ />
        </div>
    )
}

export default Main;