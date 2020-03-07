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
                <div className={"userAdd"} onClick={this.toggleForm}>
                    <div className={"userAddIcon"}/>
                    <div className={"userAddDesc"}>Nowy pracownik</div>
                    <UserAddForm passShowForm={this.passShowForm}/>
                </div>
            )
        } else {
            return (
                <div className={"userAdd"} onClick={this.toggleForm}>
                    <div className={"userAddIcon"}/>
                    <div className={"userAddDesc"}>Nowy pracownik</div>
                </div>
            )
        }
    }
}

export default UserAdd