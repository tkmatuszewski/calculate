import React, {Component} from "react";

class UserEventsFullName extends Component {

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