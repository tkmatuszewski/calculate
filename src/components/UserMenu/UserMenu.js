import React from "react";
import data from "../Firebase/Firebase";

class UserMenu extends React.Component {
    state = {
        show: false
    };
    show = () => {
        this.setState({show: !this.state.show})
    };
    delete = () => {
        // let id = this.props.id;
        // data.collection(`users`).doc(id).delete();
        console.log(this.props.id)
    };

    render() {
        if (this.state.show) {
            return (
                <ul className={"userMenu"} onClick={this.show}>
                    <li className={"userMenuElement"}>
                        <div className={"userMenuEdit"}/>
                        <span>Edytuj</span>
                    </li>
                    <li className={"userMenuElement"}>
                        <div className={"userMenuDel"} onClick={this.delete()}/>
                        <span>Usuń</span>
                    </li>
                </ul>
            )
        } else {
            return <ul className={"userMenu"} onClick={this.show}/>
        }
    }
}

export default UserMenu