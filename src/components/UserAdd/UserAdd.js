import React from "react";
import UserAddForm from "../UserAddForm/UserAddForm";

class UserAdd extends React.Component {
    state = {
        show: false
    };

    toggleForm = (e) => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    };

    passShowForm = (state) => {
        this.setState({show: state})
    };

    render() {
        if (this.state.show) {
            return (
                <div className={"userAdd"}>
                    <div className={"userAddIcon"} onClick={this.toggleForm}/>
                    <div className={"userAddDesc"}>Nowy pracownik</div>
                    <UserAddForm passShowForm={this.passShowForm}/>
                    {/*<UserList businessDays={this.props.businessDays}/>*/}
                </div>
            )
        } else {
            return (
                <div className={"userAdd"}>
                    <div className={"userAddIcon"} onClick={this.toggleForm}/>
                    <div className={"userAddDesc"}>Nowy pracownik</div>
                    {/*<UserList businessDays={this.props.businessDays}/>*/}
                </div>
            )
        }
    }
}

export default UserAdd