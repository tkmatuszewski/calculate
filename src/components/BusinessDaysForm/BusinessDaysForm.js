import React, {Component} from "react";
import data from "../Firebase/Firebase";
import {app} from "../Firebase/Firebase";

class BusinessDaysForm extends Component {

    state = {
        businessDays: 0,
        message: "",
        author: ""
    };

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    submitHandler = (e) => {
        e.preventDefault();

        if (this.state.businessDays < 0 || this.state.businessDays > 31) {
            return this.setState({message: "Liczba dni roboczych nie może być ujemna ani większa niż 31!"},
                () => {
                    setTimeout(() => {
                        return this.setState({message: ""})
                    }, 3000);
                })
        } else {
            const userId = app.auth().currentUser.uid;

            const businessDays = {
                businessDays: this.state.businessDays,
                author: userId
            };
            this.props.updateBusinessDaysIcon(this.state.businessDays);
            this.props.businessDaysToUserPart(this.state.businessDays);

            data.collection(`businessDays`).doc(this.props.docRef).set(businessDays).then(
                () => this.setState({message: "Zaktualizowano liczbę dni roboczych"})
            ).then(() => setTimeout(() => {
                this.props.toggleForm();
                return this.setState({message: ""})
            }, 3000))
                .catch(error => console.log(error));
        }
    };

    closeForm = () => {
        this.props.toggleForm();
    };

    render() {
        return (
            <>
                <div className={"businessDaysFormMask"}/>
                <form className={"businessDaysForm"} onSubmit={this.submitHandler}>
                    <button className={"businessDaysFormClose"} type="button" onClick={this.closeForm}/>
                    <div className={"businessDaysFormCnt"}>
                        <h3 className={"businessDaysFormTitle"}>Dni robocze</h3>
                        <div className={"businessDaysFormMsg"}>{this.state.message}</div>
                        <label className={"businessDaysFormLabel"}>Podaj liczbę dni roboczych w miesiącu
                            <input type="number" name="businessDays" className={"businessDaysFormInput"}
                                   onChange={this.inputHandler} placeholder="Podaj liczbę"/>
                        </label>
                        <button className={"businessDaysFormBtn"} type={"submit"}>Zatwierdź</button>
                    </div>
                </form>
            </>
        )
    }

    componentDidMount() {
        this.setState({businessDays: this.props.businessDays})
    }
}

export default BusinessDaysForm