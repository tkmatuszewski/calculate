import React from "react";
import UserPanel from "../UserPanel/UserPanel";
import UserList from "../UserList/UserList";

function UserPart () {
    return (
        <div className={"userPart"}>
            <UserPanel/>
            <UserList />
        </div>
    )
}

export default UserPart