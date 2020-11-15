import React from 'react';
import Icon from './Icon/icon';
import Logo from './Logo/logo';
import Account from './Account/account';
import './stylesSideBar.css';

const SideBar = (props) => {
    return (
        <div className="t-sidebar">
            <Logo/>
            <div className="t-icon-container">
                {
                    props.iconList.map( (icon, index) => {
                        return (
                            <Icon key={index} source={icon} />
                        )
                    })
                }
            </div>
            <Account profileUrl={props.profileUrl}/>
        </div>
    )
}

export default SideBar;
