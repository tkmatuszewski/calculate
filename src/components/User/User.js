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

    handleHours = () => {
        const user = this.props.user;

        const positiveEffect = () => {
            const positive = (a) => {
                return a.data().inPlus === user.data().fullName
            };

            let positiveCount = 0;

            this.props.events.filter(positive).map(e => {
                return positiveCount += e.data().count
            });
            return Number(positiveCount)
        };

        const negativeEffect = () => {
            const negative = (a) => {
                return a.data().inMinus === user.data().fullName
            };
            let negativeCount = 0;

            this.props.events.filter(negative).map(e => {
                return negativeCount += e.data().count
            });
            return Number(negativeCount)
        };

        const result = positiveEffect() - negativeEffect();

        return this.setState({
            bonusHours: result
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
                                user={person}
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
                                       bonusHours={this.state.bonusHours}
                                       rate={person.rate}/>
                        </div>
                    </div>
                </li>
            </>
        )
    }

    componentDidMount() {
        this.handleHours()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.events !== prevProps.events) {
            this.handleHours();
        }
        if (this.props.verificationResetClicked !== prevProps.verificationResetClicked) {
            this.setState({verified: false})
        }
    }
}

export default User