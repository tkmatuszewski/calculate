import React from "react";
import data from "../Firebase/Firebase";

class BusinessDaysForm extends React.Component {
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
        this.props.update(this.state.businessDays);
        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").set(this.state);
        this.setState({message: "Zaktualizowano liczbę dni roboczych"});

        setTimeout(() => {
            this.props.passToggleForm(false);
            return this.setState({message: ""})
        }, 3000);
    };

    closeForm = () => {
        this.setState({show: false});
        this.props.passToggleForm(false);
    };

    render() {
        return (
            <div className={"businessDaysFormMask"}>
                <form className={"businessDaysForm"} onSubmit={this.submitHandler}>
                    <div className={"businessDaysFormTop"}>
                        <button className={"businessDaysFormClose"} type="button" onClick={this.closeForm}/>
                    </div>
                    <h3 className={"businessDaysFormTitle"}>Dni robocze</h3>
                    <div className={"businessDaysFormMsg"}>{this.state.message}</div>
                    <div className={"businessDaysFormBottom"}>
                        <label className={"businessDaysFormLabel"}>Podaj liczbę dni roboczych w miesiącu
                            <input type="number" name="businessDays" className={"businessDaysFormInput"}
                                   onChange={this.inputHandler} placeholder={this.state.businessDays}/>
                        </label>
                        <button className={"businessDaysFormBtn"} type={"submit"}>Zatwierdź
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BusinessDaysForm