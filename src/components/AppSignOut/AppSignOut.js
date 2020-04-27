import React, {Component} from "react";
import app from "firebase"

class AppSignOut extends Component {
    state = {
        renderDescription: false
    };

    renderDescription = () => {
        return this.setState({renderDescription: !this.state.renderDescription});
    };

    render() {
        return (
            <button className="appSignOutBtn" onClick={() => app.auth().signOut()}
                    onMouseEnter={this.renderDescription}
                    onMouseLeave={this.renderDescription}>
                {this.state.renderDescription && <span className="appSignOutInfo">Wyloguj</span>}
                <div className="appSignOutIcon"/>
            </button>
        )
    }
}

export default AppSignOut