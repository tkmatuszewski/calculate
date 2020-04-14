import React, {Component} from "react";
import UserEventsFullName from "../UserEventsFullname/UserEventsFullName";

class UserEvents extends Component {
    state = {
        count: 0,
        showFullName: false,
    };

    toggleFullName = () => {
        this.setState({showFullName: !this.state.showFullName})
    };

    shortenUsers = (name) => {
        if (name === "Inne") {
            return "Inne"
        } else {
            const separateNames = name.split(" ");

            return separateNames[0][0] + separateNames[1][0];
        }
    };

    render() {

        return this.props.events.map(e => {

                const event = e.data();
                const user = this.props.user;

                const day = event.date.split(".");
                const date = day[0] + "." + day[1];

                const initialsInMinus = this.shortenUsers(event.inMinus);
                const initialsInPlus = this.shortenUsers(event.inPlus);

                let matchedEmployee = null;

                if (event.inPlus === user.fullName) {

                    matchedEmployee = (
                        <div className={"userEvents"}
                             key={Math.random()}
                             onClick={this.toggleFullName}>
                            <div className={"userEventsDate"}>{date}</div>
                            <div className={"userEventsCountPlus"}>
                                <span className={"userEventsInPlusIcon"}/>
                                {event.count}</div>
                            <div className={"userEventsInMinus"}>
                                <span className={"userEventsInMinusIcon"}/>
                                {initialsInMinus}
                            </div>
                            <UserEventsFullName
                                fullName={event.inMinus}
                                showFullName={this.state.showFullName}/>
                        </div>
                    )
                }
                if (event.inMinus === user.fullName) {
                    matchedEmployee = (
                        <div className={"userEvents"}
                             key={Math.random()}
                             onClick={this.toggleFullName}>
                            <div className={"userEventsDate"}>{date}</div>
                            <div className={"userEventsCountMinus"}>
                                <span className={"userEventsInMinusIcon"}/>
                                {event.count}</div>
                            <div className={"userEventsInPlus"}>
                                <span className={"userEventsInPlusIcon"}/>
                                {initialsInPlus}
                            </div>
                            <UserEventsFullName
                                fullName={event.inPlus}
                                showFullName={this.state.showFullName}/>
                        </div>
                    );
                }
                return matchedEmployee
            }
        )
    };
}

export default UserEvents
