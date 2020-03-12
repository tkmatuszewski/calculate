import React from "react";
import BusinessDays from "../BusinessDays/BusinessDays";
import UserAdd from "../UserAdd/UserAdd";
import ArchiveEvents from "../ArchiveEvents/ArchiveEvents";

class UserPanel extends React.Component {

    render() {
        return (
            <div className={"userPanel"}>
                <BusinessDays update={this.props.update}/>
                <UserAdd/>
                <ArchiveEvents/>
            </div>
        )
    }
}

export default UserPanel