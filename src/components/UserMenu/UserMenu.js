import React from "react";
import data from "../Firebase/Firebase";

class UserMenu extends React.Component {
    state = {
        show: false
    };
    show = () => {
        this.setState({show: !this.state.show})
    };
    edit = () => {

    };
    delete = () => {
        let id = this.props.id;
        data.collection(`users`).doc(id).delete();
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
                        <li className={"userMenuElement"}>
                            <div className={"userMenuDel"} onClick={this.delete()}/>
                            <span>Usuń</span>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return <div className={"userMenu"} onClick={this.show}/>
        }
    }
}

export default UserMenu