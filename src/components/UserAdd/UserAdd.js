import React, {Component} from "react";
import UserAddForm from "../UserAddForm/UserAddForm";

class UserAdd extends Component {
    state = {
        show: false,
        showTileDescription: false
    };

    toggleForm = () => {
        this.setState({show: !this.state.show})
    };

    handleTileDescription = () => {
        this.setState({showTileDescription: !this.state.showTileDescription})
    };

    renderTile = () => {
        return (
            <div className={"userAdd"}
                 onClick={this.toggleForm}
                 onMouseEnter={this.handleTileDescription}
                 onMouseLeave={this.handleTileDescription}>
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
                {this.state.show && <UserAddForm toggleForm={this.toggleForm}/>}
            </>
        )
    }
}

export default UserAdd