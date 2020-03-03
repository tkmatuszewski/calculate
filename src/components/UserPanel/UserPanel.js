import React from "react";
import BusinessDays from "../BusinessDays/BusinessDays";

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
                {/*<AddUser businessDays={this.state.businessDays}/>*/}
            </div>
        )
    }
}

export default UserPanel