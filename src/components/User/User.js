import React from "react";
import data from "../Firebase/Firebase";
import UserMenu from "../UserMenu/UserMenu";
import TotalTime from "../UserTotalTime/UserTotalTime";
import UserEvents from "../UserEvents/UserEvents";

const classNames = require('classnames');

class User extends React.Component {
    _isMounted = false;
    state = {
        events: [],
        bonusHours: 0,
        verified: false
    };

    passVerification = (state) => {
        this.setState({verified: state})
    };

    render() {
        let user = classNames({
            user: true,
            'verified': this.state.verified
        });

        const person = this.props.user.data();

        return (
            <>
                <li className={user}>
                    <div className={"userCnt"}>
                        <div className={"userCntTop"}>
                            <div className={"userNames"}>
                                <div className={"userName"}>{person.name}</div>
                                <div className={"userSurname"}>{person.surname}</div>
                                <div className={"userDaily"}>{person.dailyTime}h</div>
                            </div>
                            <UserMenu
                                id={this.props.user.id}
                                passVerification={this.passVerification}/>
                        </div>
                        <div className={"userCntBottom"}>
                            <div className={"userCntBottomEvents"}>
                                <UserEvents
                                    events={this.state.events}
                                    user={this.props.user.data()}/>
                            </div>
                            <TotalTime businessDays={this.props.businessDays}
                                       dailyTime={person.dailyTime}
                                       bonusHours={this.state.bonusHours}/>
                        </div>
                    </div>
                </li>
            </>
        )
    }

    componentDidMount() {
        this._isMounted = true;

        data.collection(`sub`).onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().map((change) => {
                if (change.type === "added") {
                    return this.setState({
                        events: this.state.events.concat(change.doc),
                    });
                }
                if (change.type === "modified") {
                    return console.log("Zmodyfikowano wydarzenie: ", change.doc.data());
                }
                if (change.type === "removed") {
                    const filtered = this.state.events.filter(event => event.id !== change.doc.id);
                    return this.setState({events: filtered});
                }
            })
        }).error = (error) => {
            return console.log(error)
        };
    };

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default User