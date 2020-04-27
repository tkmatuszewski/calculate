import React from "react";
import {Link} from "react-router-dom";

function AppFooter() {
    return (
        <div className={"appFooter"}>
            <span>tkmatuszewski &copy;2020</span>
            <Link to={"/contributions"}>Podziękowania</Link>
        </div>
    )
}

export default AppFooter