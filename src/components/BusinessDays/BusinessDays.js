import React from "react";
import BusinessDaysForm from "../BusinessDaysForm/BusinessDaysForm";
import data from "../Firebase/Firebase";

class BusinessDays extends React.Component {
    state = {
        show: false,
        businessDays: 0
    };

    toggleForm = () => {
        this.setState({show: !this.state.show})
    };

    passToggleForm = (state) => {
        this.setState({show : state})
    };

    update = (state) => {
        this.setState({businessDays: state})
    };
    renderTile = () => {
        return (
            <div className={"businessDays"} onClick={this.toggleForm}>
                <div className={"businessDaysIcon"}>
                    <div className={"businessDaysVal"}>{this.state.businessDays}</div>
                </div>
                <div className={"businessDaysDsc"}>Dni robocze</div>
            </div>
        )
    };

    render() {
        if (this.state.show) {
            return (
                <>
                    {this.renderTile()}
                    <BusinessDaysForm
                        passToggleForm = {this.passToggleForm}
                        update={this.update}
                        businessDays={this.state.businessDays}/>
                </>
            )
        } else {
           return this.renderTile()
        }
    }

    componentDidMount() {
        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").get()
            .then((doc) => {
                this.setState({businessDays: doc.data().businessDays});
                this.props.update(this.state.businessDays);
            })
            .catch((error => {
                console.log(error)
            }));
    }
}

export default BusinessDays
