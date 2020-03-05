import React from "react";
import data from "../Firebase/Firebase";

class BusinessDaysForm extends React.Component{
    state = {
      businessDays : 0
    };
    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.props.update(e.target.value);
    };
    submitHandler = (e) => {
        e.preventDefault();
        data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").set(this.state);
        this.toggle.toggleForm();
    };

    render() {
        return (
            <form className={"businessDaysForm"} onSubmit={this.submitHandler}>
                <input type="number" name="businessDays" className={"businessDaysFormInput"}
                       onChange={this.inputHandler} placeholder={this.state.businessDays}/>
                <button className={"businessDaysFormBtn"}>
                    <div className={"businessDaysFormBtnIcon"}/>
                </button>
            </form>
        )
    }
}

export default BusinessDaysForm