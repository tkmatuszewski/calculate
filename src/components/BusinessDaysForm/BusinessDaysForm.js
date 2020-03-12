import React from "react";
import data from "../Firebase/Firebase";

class BusinessDaysForm extends React.Component {
    state = {
        businessDays: "",
        show: true
};
inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
};
submitHandler = (e) => {
    e.preventDefault();
    this.props.update(this.state.businessDays);
    data.collection(`businessDays`).doc("hvcziTCipJEMkNgYIxRt").set(this.state);
    this.props.toggleForm();
};

render()
{
    return (
        <form className={"businessDaysForm"} onSubmit={this.submitHandler}>
            <div className={"businessDaysFormTop"}>
                <h3 className={"businessDaysFormTitle"}>Liczba dni pracujących w miesiącu</h3>
                <button className={"businessDaysFormClose"} onClick={this.closeForm}/>
            </div>
            <div className={"businessDaysFormBottom"}>
                <input type="number" name="businessDays" className={"businessDaysFormInput"}
                       onChange={this.inputHandler} placeholder={this.state.businessDays}/>
                <button className={"businessDaysFormBtn"}>
                    <div className={"businessDaysFormBtnIcon"}/>
                </button>
            </div>
        </form>
    )
}
}

export default BusinessDaysForm