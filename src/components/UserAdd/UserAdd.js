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

    passToggleForm = (state) => {
        this.setState({show: state})
    };

    renderTile = () => {
        return (
            <div className={"userAdd"} onClick={this.toggleForm}>
                <div className={"userAddCnt"}>
                    <div className={"userAddIcon"}/>
                    <div className={"userAddDesc"}>Nowy pracownik</div>
                </div>
            </div>
        )
    };

    render() {
        if (this.state.show) {
            return (
                <>
                    {this.renderTile()}
                    <UserAddForm passToggleForm={this.passToggleForm}/>
                </>
            )
        }
        else {
            return this.renderTile()
        }
    }
}

export default UserAdd