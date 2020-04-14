import React, {Component} from "react";
import UserAddForm from "../UserAddForm/UserAddForm";

class UserAdd extends Component {
    state = {
        show: false,
        showTileDescription: false
    };

    toggleForm = (e) => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    };

    passToggleForm = (state) => {
        this.setState({show: state})
    };

    handleMouseover = () => {
        this.setState({showTileDescription: !this.state.showTileDescription})
    };

    renderTile = () => {
        return (
            <div className={"userAdd"}
                 onClick={this.toggleForm}
                 onMouseEnter={this.handleMouseover}
                 onMouseLeave={this.handleMouseover}>
                <span className={"userAddMobile"}>Dodaj pracownika
                    <span className={"userAddMobileDecor"}/>
                </span>
                <div className={"userAddCnt"}>
                    <div className={"userAddIcon"}/>
                    {this.state.showTileDescription && <span className={"userAddDesc"}>Nowy pracownik</span>}
                </div>
            </div>
        )
    };

    render() {
        return (
            <>
                {this.renderTile()}
                {this.state.show && <UserAddForm passToggleForm={this.passToggleForm}/>}
            </>
        )
    }
}

export default UserAdd