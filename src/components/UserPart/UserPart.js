import React, {Component} from "react";
import UserPanel from "../UserPanel/UserPanel";
import UserList from "../UserList/UserList";
import data, {app} from "../Firebase/Firebase";

class UserPart extends Component {
    _isMounted = false;
    state = {
        businessDays: "",
        events: []
    };
    businessDaysToUserPart = (days) => {
        this.setState({businessDays: days})
    };

    render() {
        return (
            <section className={"userPart"}>
                <UserPanel
                    businessDaysToUserPart={this.businessDaysToUserPart}
                    events={this.state.events}
                    handleArchive = {this.props.handleArchive}/>
                {!this.props.archiveMode && <UserList
                    businessDays={this.state.businessDays}
                    events={this.state.events}/>}
            </section>
        )
    }

    componentDidMount() {
        this._isMounted = true;
        const user = app.auth().currentUser;

        data.collection(`sub`).where("author", "==", user.uid).onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().map((change) => {
                let data = null;
                    if (change.type === "added") {
                        data = this.setState({
                            events: this.state.events.concat(change.doc),
                        });
                    }
                    if (change.type === "modified") {
                       data = console.log("Zmodyfikowano wydarzenie: ", change.doc);
                    }
                    if (change.type === "removed") {
                        const filtered = this.state.events.filter(event => event.id !== change.doc.id);
                        data = this.setState({events: filtered});
                    }
                    return data
                }
            )
        }).error = (error) => {
            return console.log(error)
        };
    };

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default UserPart