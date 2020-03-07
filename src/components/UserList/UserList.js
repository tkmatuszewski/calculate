import React from "react";
import User from "../User/User";
import data from "../Firebase/Firebase";

class UserList extends React.Component {
    state = {
        users: [],
    };
    renderUsers = () => {
        return this.state.users.map((el) => {
            return <User user={el} businessDays={this.props.businessDays} key={Math.random()} liveR={this.liveR}/>
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
        data.collection(`users`).get().then((el) => {
                el.docs.map((doc) => {
                    this.setState({
                        users: this.state.users.concat(doc),
                    });
                })
            }
        ).catch(error => console.log(error))
    };
}

export default UserList