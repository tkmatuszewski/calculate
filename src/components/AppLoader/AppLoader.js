import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppContent from "../AppContent/AppContent";
import AppFooter from "../AppFooter/AppFooter";

class AppLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="appLoader">
                    < div className="appLoaderImg">
                        <div className="appLoaderLogo">Calculate</div>
                    </div>
                </div>
            )
        } else
            return (
                <>
                    <AppHeader/>
                    <AppContent/>
                    <AppFooter/>
                </>
            )
    }

    componentDidMount() {
        setTimeout(function loader() {
            this.setState({loading: false})
        }.bind(this), 2000);
    }
}

export default AppLoader