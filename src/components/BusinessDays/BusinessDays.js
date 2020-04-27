import React, {Component} from "react";
import BusinessDaysForm from "../BusinessDaysForm/BusinessDaysForm";
import data from "../Firebase/Firebase";
import {app} from "../Firebase/Firebase";

class BusinessDays extends Component {
    state = {
        show: false,
        showTileDescription: false,
        businessDays: 0
    };

    toggleForm = () => {
        this.setState({show: !this.state.show})
    };

    updateBusinessDaysIcon = (input) => {
        this.setState({businessDays: input})
    };
    handleTileDescription = () => {
        this.setState({showTileDescription: !this.state.showTileDescription})
    };

    render() {
        return (
            <>
                <div className={"businessDays"}
                     onClick={this.toggleForm}
                     onMouseEnter={this.handleTileDescription}
                     onMouseLeave={this.handleTileDescription}>
                    <div className={"businessDaysIcon"}>
                        <span className={"businessDaysVal"}>{this.state.businessDays}</span>
                    </div>
                    {this.state.showTileDescription && <div className={"businessDaysDsc"}>Dni robocze</div>}
                    <span className={"userAddMobile"}>Dni robocze
                    <span className={"businessDaysDecor"}/>
                </span>
                </div>
                {this.state.show && <BusinessDaysForm
                    toggleForm={this.toggleForm}
                    updateBusinessDaysIcon={this.updateBusinessDaysIcon}
                    businessDaysToUserPart={this.props.businessDaysToUserPart}
                    businessDays={this.state.businessDays}
                />}
            </>
        )
    }

    componentDidMount() {

        const user = app.auth().currentUser;

        data.collection(`businessDays`).where("author", "==", user.uid).get().then((doc) => {
            const fetched = doc.docs[0].data();

            this.setState({businessDays: fetched.businessDays},
                () => this.props.businessDaysToUserPart(fetched.businessDays));

        }).catch(error => {
            console.log(error)
        });
    }
}

export default BusinessDays
