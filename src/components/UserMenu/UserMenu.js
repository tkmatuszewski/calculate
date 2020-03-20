import React from "react";
import UserDelete from "../UserDelete/UserDelete";

class UserMenu extends React.Component {
    state = {
        show: false
    };
    show = () => {
        this.setState({show: !this.state.show});
    };
    edit = () => {

    };

    render() {
        if (this.state.show) {
            return (
                <div className={"userMenu"} onClick={this.show}>
                    <ul className={"userMenuList"}>
                        <li className={"userMenuElement"}>
                            <div className={"userMenuEdit"}/>
                            <span>Edytuj</span>
                        </li>
                        <UserDelete id={this.props.id}/>
                    </ul>
                </div>
            )
        } else {
            return <div className={"userMenu"} onClick={this.show}/>
        }
    }
}

export default UserMenu