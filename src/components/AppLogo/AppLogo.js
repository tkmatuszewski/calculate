import React, {useState} from "react";
import {Link} from "react-router-dom";

const classNames = require('classnames');

const AppLogo = () => {

    const [activeLogo, setActiveLogo] = useState(false);

    const handleMouseOver = () => {
        return setActiveLogo(!activeLogo)
    };

    const logoBackground = classNames({
        "appLogoBg": true,
        active: activeLogo
    });
    return (
        <div className={"appLogo"}
             onMouseEnter={handleMouseOver}
             onMouseLeave={handleMouseOver}>
            <Link to={"/"}>Calculate</Link>
            <div className={logoBackground}/>
        </div>
    )
};

export default AppLogo