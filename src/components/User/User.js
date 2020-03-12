import React from "react";
import data from "../Firebase/Firebase";
import TotalTime from "../UserTotalTime/UserTotalTime";
import UserEvents from "../UserEvents/UserEvents";

class User extends React.Component {
    _isMounted = false;
    state = {
        events: [],
        bonusHours: 0
    };
    // edit = () => {
    //     let id  = e.target.closest("li").getAttribute("data-id");
    //     db.collection(`users`).doc(id).update();
    // };
    additionalCount = () => {
        const user = this.props.user.data();
        let counter = 0;
        this.state.events.forEach(event => {
            if (event.inPlus === user.fullName) {
                counter += Number(event.count);
            }
            if (event.inMinus === user.fullName) {
                counter -= Number(event.count);
            }
        });
        this.setState({bonusHours: Number(counter)});
    };
    delete = (e) => {
        let id = e.target.closest("li").getAttribute("data-id");
        e.target.closest("li").remove();
        data.collection(`users`).doc(id).delete();
    };

    render() {
        return (
            <>
                <li key={this.props.surname} data-id={this.props.user.id} className={"user"}>
                    <div className={"userContainer"}>
                        <div className={"userNames"}>
                            <div className={"userName"}>{this.props.user.data().name}</div>
                            <div className={"userSurname"}>{this.props.user.data().surname}</div>
                        </div>
                        <TotalTime businessDays={this.props.businessDays}
                                   dailyTime={this.props.user.data().dailyTime}
                                   bonusHours={this.state.bonusHours}/>
                        <div className={"userButtons"}>
                            <button className={"userDelete"} onClick={this.delete}/>
                        </div>
                    </div>
                    <div className={"userLowerContainer"}>
                        <UserEvents events={this.state.events} user={this.props.user.data()}/>
                    </div>
                </li>
            </>
        )
    }

    componentDidMount() {
        this._isMounted = true;
        data.collection(`sub`).get().then((el) => {
                el.docs.map((doc) => {
                    return this.setState({events: this.state.events.concat(doc.data())}, () => {
                        this.additionalCount();
                    })
                });
            }
        )
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default User