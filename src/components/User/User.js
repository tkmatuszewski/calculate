import React, {Component} from "react";
import UserMenu from "../UserMenu/UserMenu";
import TotalTime from "../UserTotalTime/UserTotalTime";
import UserEvents from "../UserEvents/UserEvents";
const classNames = require('classnames');

class User extends Component {
    state = {
        bonusHours: 0,
        verified: false,
    };

    passVerification = () => {
        this.setState({verified: !this.state.verified})
    };

    calculateAdditionalHours = () => {
        const user = this.props.user.data();

        let counterPlus = 0;
        let counterMinus = 0;

        this.props.events.map(e => {
            const event = e.data();

            if (event.inPlus === user.fullName) {
                counterPlus += Number(event.count);
            }
            if (event.inMinus === user.fullName) {
                return  counterMinus += Number(event.count);
            }
        });

        return this.setState({
            bonusHours : counterPlus-counterMinus
        })
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
                                    events={this.props.events}
                                    user={person}/>
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
        this.calculateAdditionalHours()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.events !== prevProps.events) {
            this.calculateAdditionalHours();
        }
    }
}

export default User