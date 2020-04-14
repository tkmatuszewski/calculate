import React, {Component} from "react";
import User from "../User/User";
import data from "../Firebase/Firebase";

class UserList extends Component {
    _isMounted = false;
    state = {
        users: [],
    };

    renderUsers = () => {
        return this.state.users.map((user) => {
            return <User
                user={user}
                businessDays={this.props.businessDays}
                events={this.props.events}
                key={user.id}/>
        })
    };

    render() {
        return (
            <>
                {!this.props.archiveMode && <ul className={"userList"}>
                    {this.state.users.length > 0 && <li className="userListSide">Pracownicy</li>}
                    {this.renderUsers()}
                </ul>}
            </>
        )
    }

    componentDidMount() {
        this._isMounted = true;

        data.collection(`users`).onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().map((change) => {
                let userData = "";
                if (change.type === "added") {
                    userData = this.setState({
                        users: this.state.users.concat(change.doc),
                    });
                }
                if (change.type === "modified") {
                    return console.log("Zmodyfikowano pracownika: ", change.doc);
                }
                if (change.type === "removed") {
                    const filtered = this.state.users.filter(user => user.id !== change.doc.id);
                    userData = this.setState({users: filtered});
                }
                return userData;
            })
        }).error = (error) => {
            return console.log(error)
        };
    };

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default UserList