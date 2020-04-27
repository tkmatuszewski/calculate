import React, {Component} from "react";
import BusinessDays from "../BusinessDays/BusinessDays";
import UserAdd from "../UserAdd/UserAdd";
import ArchiveEvents from "../ArchiveEvents/ArchiveEvents";
import Archives from "../Archives/Archives";
import {app} from "../Firebase/Firebase";

const classNames = require('classnames');

class UserPanel extends Component {

    state = {
        show: false
    };

    handleHamburgerMenu = () => {
        this.setState({show: !this.state.show})
    };

    renderMobileAppSignOut = () => {
        return (
            <div className={"signOutMobile"} onClick={() => app.auth().signOut()}>
                <div className={"signOutMobileIcon"}/>
                <span className={"signOutMobileName"}>Wyloguj
                    <span className={"signOutMobileDecor"}/>
                </span>
            </div>

        )
        // }
    };

    render() {
        const menuIcon = classNames({
            "hamburgerIcon": !this.state.show,
            "closeIcon": this.state.show
        });
        return (
            <div className={"userPanel"}>
                <button className={menuIcon} onClick={this.handleHamburgerMenu}/>
                {this.state.show &&
                <div className={"userPanelElements"}>
                    <BusinessDays
                        businessDaysToUserPart={this.props.businessDaysToUserPart}/>
                    <UserAdd/>
                    <ArchiveEvents
                        events={this.props.events}/>
                    <Archives
                        handleArchive={this.props.handleArchive}/>
                    {this.renderMobileAppSignOut()}
                </div>
                }
            </div>
        )
    }

    componentDidMount() {
        if (window.screen.width >= 480) {
            this.setState({show: true})
        }
    }
}

export default UserPanel