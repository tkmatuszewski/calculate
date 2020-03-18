import React from "react";

class UserEvents extends React.Component {
    state = {
        count: 0
    };

    render() {
        return this.props.events.map((el) => {
                const user = this.props.user;
                const day = el.date.split(".");
                const date = day[0] + "." + day[1];

                if (el.inPlus === user.fullName) {
                    return (
                        <div className={"userEvents"} key={Math.random()}>
                            <div className={"userEventsDate"}>{date}</div>
                            <div className={"userEventsCountPlus"}>+{el.count}</div>
                            <div className={"userEventsInMinus"}>{el.inMinus}</div>
                        </div>
                    )
                }
                if (el.inMinus === user.fullName) {
                    return (
                        <div className={"userEvents"} key={Math.random()}>
                            <div className={"userEventsDate"}>{date}</div>
                            <div className={"userEventsCountMinus"}>-{el.count}</div>
                            <div className={"userEventsInPlus"}>{el.inPlus}</div>
                        </div>
                    )
                }
            }
        )
    };
}

export default UserEvents
