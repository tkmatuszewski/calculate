import React, {useState} from "react";
import AppSignOut from "../AppSignOut/AppSignOut";
import {Link} from "react-router-dom";
var classNames = require('classnames');

const AppHeader =()=> {

    const [activeLogo, setActiveLogo] = useState(false);

    const handleMouseOver = () => {
        return setActiveLogo(!activeLogo)
    };

    const logoBackground = classNames({
        "appLogoBg": true,
        active: activeLogo
    });

    return (
        <div className={"appHeader"}>
            <div className={"appHeaderContainer"}>
                    <div className={"appLogo"}
                         onMouseEnter={handleMouseOver}
                         onMouseLeave={handleMouseOver}>
                        <Link to={"/"}>Calculate</Link>
                        <div className={logoBackground}/>
                    </div>
                <AppSignOut/>
            </div>
        </div>
    )
};

export default AppHeader