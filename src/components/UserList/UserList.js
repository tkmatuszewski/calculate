import React from "react";
import User from "../User/User";
import data from "../Firebase/Firebase";

class UserList extends React.Component {
    state = {
        users: [],
    };
    renderUsers = () => {
        return this.state.users.map((el) => {
            return <User user={el} businessDays={this.props.businessDays} key={el.id}/>
        })
    };

    render() {
        return (
            <>
                <ul className={"userList"}>
                    {this.renderUsers()}
                </ul>
            </>
        )
    }

    componentDidMount() {

        data.collection(`users`).onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().map((change) => {
                if (change.type === "added") {
                    return this.setState({
                        users: this.state.users.concat(change.doc),
                    });
                }
                if (change.type === "modified") {
                    return console.log("Zmodyfikowano pracownika: ", change.doc.data());
                }
                if (change.type === "removed") {
                    const filtered = this.state.users.filter(user => user.id !== change.doc.id);
                    return this.setState({users: filtered});
                }
            })
        }).error = (error) => {
            return console.log(error)
        };
    };
}

export default UserList