import React, {Component} from "react";
import app from "firebase"

class AppSignOut extends Component {
    state = {
        renderSign: false
    };

    renderSign = () => {
        return this.setState({renderSign: !this.state.renderSign});
    };

    render() {
        return (
            <button className="appSignOutBtn" onClick={() => app.auth().signOut()}
                    onMouseEnter={this.renderSign}
                    onMouseLeave={this.renderSign}>
                {this.state.renderSign && <span className="appSignOutInfo">Wyloguj</span>}
                <div className="appSignOutIcon"/>
            </button>
        )
    }
}

export default AppSignOut