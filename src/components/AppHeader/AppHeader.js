import React from "react";
import AppSignOut from "../AppSignOut/AppSignOut";
import AppLogo from "../AppLogo/AppLogo";

const AppHeader = () => {

    return (
        <div className={"appHeader"}>
            <div className={"appHeaderContainer"}>
                <AppLogo/>
                <AppSignOut/>
            </div>
        </div>
    )
};

export default AppHeader