import React from "react";
import UserPanel from "../UserPanel/UserPanel";
import AppSignOut from "../AppSignOut/AppSignOut";

const hamburgerMenu = () => {
    return (
        <button className={"hamburgerMenu"}>
            <UserPanel/>
            <AppSignOut/>
        </button>

    )


};

export default hamburgerMenu