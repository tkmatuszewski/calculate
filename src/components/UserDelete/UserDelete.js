import React from "react";
import data from "../Firebase/Firebase";

class UserDelete extends React.Component {
    delete = (e) => {
        e.stopPropagation();
        let id = this.props.id;
        data.collection(`users`).doc(id).delete().then(function() {
            console.log("Usunięto pracownika!");
        }).catch(function(error) {
            console.error("Wystąpił błąd podczas usuwania pracownika: ", error);
        });
    };

    render() {
        return (
            <li className={"userDelete"} onClick={this.delete}>
                <div className={"userDeleteIcon"}/>
                <span>Usuń</span>
            </li>
        )
    }
}

export default UserDelete