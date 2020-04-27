import React, {Component} from "react";
import data from "../Firebase/Firebase";

class UserMenu extends Component {
    state = {
        show: false
    };

    clickHandler = () => {
        return this.setState({show: !this.state.show});
    };

    verify = () => {
        this.props.passVerification();
    };

    delete = (e) => {
        e.stopPropagation();
        let id = this.props.id;
        data.collection(`users`).doc(id).delete().then(()=> {
            console.log("Usunięto pracownika!");
        }).catch(function (error) {
            console.error("Wystąpił błąd podczas usuwania pracownika: ", error);
        });
    };

    render() {
        return (
            <div className={"userMenu"}
                 onClick={this.clickHandler}>
                {this.state.show &&
                <ul className={"userMenuList"}>
                    <li className={"userMenuElement"} onClick={this.verify}>
                        <div className={"userMenuElementCnt"}>
                            <div className={"userMenuVerify"}/>
                            <span>{this.state.verified ? "Zatwierdzony" : "Zatwierdź"}</span>
                        </div>
                    </li>
                    <li className={"userMenuElement"} onClick={this.delete}>
                        <div className="userMenuElementCnt">
                            <div className={"userMenuDel"}/>
                            <span>Usuń</span>
                        </div>
                    </li>
                </ul>}
            </div>
        )
    }
}

export default UserMenu