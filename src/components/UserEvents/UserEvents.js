import React from "react";
import UserEventsFullName from "../UserEventsFullname/UserEventsFullName";

class UserEvents extends React.Component {
    state = {
        count: 0,
        showFullName: false,
    };

    showFullName = () => {
        this.setState({showFullName: true})
    };
    hideFullName = () => {
        this.setState({showFullName: false})
    };

    shortenUsers = (name) => {
        const separateNames = name.split(" ");

        return separateNames[0][0] + separateNames[1][0];
    };

    render() {
        return this.props.events.map(evnt => {

                const event = evnt.data();
                const user = this.props.user;

                const day = event.date.split(".");
                const date = day[0] + "." + day[1];

                const initialsInMinus = this.shortenUsers(event.inMinus);
                const initialsInPlus = this.shortenUsers(event.inPlus);

                if (event.inPlus === user.fullName) {
                    return (
                        <div className={"userEvents"}
                             key={Math.random()}
                             onMouseEnter={this.showFullName}
                             onMouseLeave={this.hideFullName}>
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
                    return (
                        <div className={"userEvents"}
                             key={Math.random()}
                             onMouseEnter={this.showFullName}
                             onMouseLeave={this.hideFullName}>
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
                    )
                }
            }
        )
    };
}

export default UserEvents
