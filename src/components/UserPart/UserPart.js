import React from "react";
import UserPanel from "../UserPanel/UserPanel";
import UserList from "../UserList/UserList";

class UserPart extends React.Component {
    state = {
        businessDays: 0,
    };
    update = (days) => {
        this.setState({businessDays: days})
    };
    render() {
        return (
            <div className={"userPart"}>
                <UserPanel update={this.update}/>
                <UserList businessDays={this.state.businessDays}/>
            </div>
        )
    }
}

export default UserPart