import React from "react";
import UserDelete from "../UserDelete/UserDelete";

class UserMenu extends React.Component {
    state = {
        show: false,
        verified: false,
    };

    show = () => {
        this.setState({show: !this.state.show});
    };

    verify = () => {
        this.setState({
            verified: !this.state.verified
        }, () => {
            if (this.state.verified) {
                this.props.passVerification(true)
            } else {
                this.props.passVerification(false)
            }
        });
    };

    mouseEnterHandler = () => {
        return this.setState({show: true});
    };

    mouseLeaveHandler = () => {
        return this.setState({show: false});
    };

    render() {
        if (this.state.show) {
            return (
                <div className={"userMenu"}
                     onMouseOver={this.mouseEnterHandler}
                     onMouseLeave={this.mouseLeaveHandler}
                >
                    <ul className={"userMenuList"}>
                        <li className={"userMenuElement"} onClick={this.verify}>
                            <div className={"userMenuVerify"}/>
                            <span>{this.state.verified ? "Zatwierdzony" : "Zatwierdź"}</span>
                        </li>
                        <UserDelete
                            id={this.props.id}/>
                    </ul>
                </div>
            )
        } else {
            return <div className={"userMenu"}
                        onMouseOver={this.mouseEnterHandler}
                        onMouseLeave={this.mouseLeaveHandler}/>
        }
    }
}

export default UserMenu