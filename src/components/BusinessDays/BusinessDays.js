import React, {Component} from "react";
import BusinessDaysForm from "../BusinessDaysForm/BusinessDaysForm";
import data from "../Firebase/Firebase";

class BusinessDays extends Component {
    state = {
        show: false,
        businessDays: 0,
        showTileDescription: false
    };

    toggleForm = () => {
        this.setState({show: !this.state.show})
    };

    passToggleForm = (state) => {
        this.setState({show: state})
    };

    updateBusinessDaysOnChange = (state) => {
        this.setState({businessDays: state})
    };
    handleMouseover = () => {
        this.setState({showTileDescription: !this.state.showTileDescription})
    };

    render() {
        return (
            <>
                <div className={"businessDays"}
                     onClick={this.toggleForm}
                     onMouseEnter={this.handleMouseover}
                     onMouseLeave={this.handleMouseover}>
                    <div className={"businessDaysIcon"}>
                        <div className={"businessDaysVal"}>{this.state.businessDays}</div>
                    </div>
                    {this.state.showTileDescription && <div className={"businessDaysDsc"}>Dni robocze</div>}
                    <span className={"userAddMobile"}>Dni robocze
                    <span className={"businessDaysDecor"}/>
                </span>
                </div>
                {this.state.show && <BusinessDaysForm
                    passToggleForm={this.passToggleForm}
                    updateBusinessDaysOnChange={this.updateBusinessDaysOnChange}
                    businessDaysToUserPart={this.props.businessDaysToUserPart}
                    businessDays={this.state.businessDays}/>}
            </>
        )
    }

    componentDidMount() {
        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").get()
            .then((doc) => {
                this.setState({businessDays: doc.data().businessDays});
                this.props.businessDaysToUserPart(this.state.businessDays)
            })
            .catch((error => {
                console.log(error)
            }));
    }
}

export default BusinessDays
