import React from "react";
import BusinessDaysForm from "../BusinessDaysForm/BusinessDaysForm";
import data from "../Firebase/Firebase";

class BusinessDays extends React.Component {
    state = {
        show: false,
        businessDays: 0,
    };

    toggleForm = () => {
        this.setState({show: !this.state.show})
    };

    render() {
        if (this.state.show) {
            return (
                <>
                    <div className={"businessDays"} onClick={this.toggleForm}>
                        <div className={"businessDaysIcon"}>
                            <div className={"businessDaysVal"}>{this.state.businessDays}</div>
                        </div>
                        <div className={"businessDaysDsc"}>Dni robocze</div>
                        <BusinessDaysForm toggle = {this.toggleForm}/>
                    </div>
                </>
            )
        } else {
            return (
                <div className={"businessDays"}>
                    <div className={"businessDaysIcon"} onClick={this.toggleForm}>
                        <div className={"businessDaysVal"}>{this.state.businessDays}</div>
                    </div>
                    <div className={"businessDaysDsc"}>Dni robocze</div>
                </div>
            )
        }
    }

    componentDidMount() {
        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").get().then((doc) => {
            this.setState({businessDays: doc.data().businessDays});
            this.props.update(this.state.businessDays);
        });
    }
}

export default BusinessDays
