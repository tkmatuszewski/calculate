import React from "react";
import BusinessDays from "../BusinessDays/BusinessDays";
import UserAdd from "../UserAdd/UserAdd";

class UserPanel extends React.Component {
    state = {
        businessDays: 0
    };
    passBusinessDays = (days) => {
        this.setState({businessDays: days})
    };

    render() {
        return (
            <div className={"userPanel"}>
                <BusinessDays update={this.passBusinessDays}/>
                <UserAdd businessDays={this.state.businessDays}/>
            </div>
        )
    }
}

export default UserPanel