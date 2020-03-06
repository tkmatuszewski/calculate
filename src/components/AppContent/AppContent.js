import React from "react";
import CalendarToggle from "../CalendarToggle/CalendarToggle";
import UserPart from "../UserPart/UserPart";

function AppContent() {
    return (
        <div className={"appContent"}>
            <CalendarToggle/>
            <UserPart/>
        </div>
    )
}


export default AppContent