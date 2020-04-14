import React, {Component} from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppContent from "../AppContent/AppContent";

class AppLoader extends Component {
    constructor(props) {
        super(props);
        this.loaderTimer = null;
        this.state = {
            loading: true
        };
    }

    showLoader = () => {
        this.loaderTimer = setTimeout(() => {
            this.setState({loading: false})
        }, 2500);
    };

    render() {
        if (this.state.loading) {
            return (
                <section className="appLoader">
                    <div className="appLoaderImg">
                        <span className="appLoaderLogo">Calculate</span>
                    </div>
                </section>
            )
        } else {
            return (
                <>
                    <AppHeader/>
                    <AppContent/>
                </>
            )
        }
    }

    componentDidMount() {
        this.showLoader()
    }

    componentWillUnmount() {
        clearTimeout(this.loaderTimer)
    }
}

export default AppLoader