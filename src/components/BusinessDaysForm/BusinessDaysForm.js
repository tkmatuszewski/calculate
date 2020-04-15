import React, {Component} from "react";
import data from "../Firebase/Firebase";

class BusinessDaysForm extends Component {
    state = {
        businessDays: this.props.businessDays,
        show: true,
        message: ""
    };
    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    submitHandler = (e) => {
        e.preventDefault();
        const businessDays = {
            businessDays: this.state.businessDays
        };
        this.props.updateBusinessDaysOnChange(this.state.businessDays);
        this.props.businessDaysToUserPart(this.state.businessDays);

        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").set(businessDays);
        this.setState({message: "Zaktualizowano liczbę dni roboczych"});

        setTimeout(() => {
            this.props.passToggleForm(false);
            return this.setState({message: ""})
        }, 3000);
    };

    closeForm = (e) => {
        e.stopPropagation();
        this.setState({show: false}, () => {
            this.props.passToggleForm(this.state.show)
        });
    };

    render() {
        return (
            <>
                <div className={"businessDaysFormMask"}/>
                <form className={"businessDaysForm"} onSubmit={this.submitHandler}>
                    <div className={"businessDaysFormTop"}>
                        <button className={"businessDaysFormClose"} type="button" onClick={this.closeForm}/>
                    </div>
                    <h3 className={"businessDaysFormTitle"}>Dni robocze</h3>
                    <div className={"businessDaysFormMsg"}>{this.state.message}</div>
                    <div className={"businessDaysFormBottom"}>
                        <label className={"businessDaysFormLabel"}>Podaj liczbę dni roboczych w miesiącu
                            <input type="number" name="businessDays" className={"businessDaysFormInput"}
                                   onChange={this.inputHandler} placeholder="Podaj liczbę"/>
                        </label>
                        <button className={"businessDaysFormBtn"} type={"submit"}>Zatwierdź
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default BusinessDaysForm