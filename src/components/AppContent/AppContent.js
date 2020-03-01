import React from "react";
import CalendarToggle from "../CalendarToggle/CalendarToggle";
import UserPanel from "../UserPart/UserPart";

function AppContent() {
    return (
        <div className={"appContent"}>
            <CalendarToggle/>
            <UserPanel/>
        </div>
    )
}


export default AppContent