import React from "react";
import data from "../Firebase/Firebase";

class BusinessDays extends React.Component {
    state = {
        show: false,
        businessDays: 0,
        error: ""
    };
    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.props.update(e.target.value);
    };
    submitHandler = (e) => {
        e.preventDefault();
        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").set(this.state);
        this.setState({show: false});
    };
    showInput = () => {
        this.setState({show: !this.state.show})
    };

    render() {
        if (this.state.show) {
            return (
                <>
                    <span className={"businessDaysName"}>Dni robocze</span>
                    <div className={"businessDays"} onClick={this.showInput}>
                        <div className={"businessDaysVal"}>
                            <span>{this.state.businessDays}</span>
                        </div>
                    </div>
                    <form className={"businessDaysForm"} onSubmit={this.submitHandler}>
                        <input type="number" name="businessDays" className={"businessDaysInput"}
                               onChange={this.inputHandler} placeholder={this.state.businessDays}/>
                        <button className={"businessDaysBtn"}>
                            <div className={"businessDaysBtnIcon"}/>
                        </button>
                        {this.state.error}
                    </form>
                </>
            )
        } else {
            return (
                <>
                    <span className={"businessDaysName"}>Dni robocze</span>
                    <div className={"businessDays"} onClick={this.showInput}>
                        <div className={"businessDaysVal"}>{this.state.businessDays}</div>
                    </div>
                </>
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
