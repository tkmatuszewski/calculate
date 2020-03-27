import React from "react";

class UserEventsFullName extends React.Component {

    render() {
        if (this.props.showFullName) {
            return <div className={"userEventsFullName"}>
                {this.props.fullName}
            </div>
        } else {
            return null
        }
    }
}

export default UserEventsFullName