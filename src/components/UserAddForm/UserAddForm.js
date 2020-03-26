import React from "react";
import data from "../Firebase/Firebase";

class UserAddForm extends React.Component {
    state = {
        name: "",
        surname: "",
        fullName: "",
        dailyTime: 0,
        totalTime: 0,
        show: true,
        message: "",
        id: ""
    };
    generateFullName = () => {
        this.setState({fullName: this.state.name + " " + this.state.surname})
    };
    countTotal = () => {
        let total = this.state.dailyTime * this.props.businessDays;
        return this.setState({totalTime: {total}})
    };
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.generateFullName();
        this.countTotal();
    };
    submitHandler = (e) => {
        e.preventDefault();
        if ((this.state.name === "") || (this.state.surname === "")) {
            this.setState({message: "Pola Imię oraz Nazwisko muszą być uzupełnione!"});
            setTimeout(() => {
                return this.setState({message: ""})
            }, 3000)
        } else {
            e.preventDefault();
            this.generateFullName();
            data.collection(`users`).add(this.state);
            this.setState({message: "Dodano nowego użytkownika!"});

            setTimeout(() => {
                this.closeForm();
                return this.setState({message: ""})
            }, 3000);
        }
    };
    closeForm = () => {
        this.setState({show: false});
        return this.props.passToggleForm(false);
    };

    render() {
        return (
            <div className={"userAddFormMask"}>
                <div className={"userAddForm"}>
                    <div className={"userAddFormTop"}>
                        <button className={"userAddFormClose"} type="button" onClick={this.closeForm}/>
                    </div>
                    <h3 className={"userAddTitle"}>Nowy pracownik</h3>
                    <div className={"userAddMsg"}>{this.state.message}</div>
                    <form className={"userAddFormForm"} onSubmit={this.submitHandler}>
                        <label className={"userAddLabel"}> Imię
                            <input onChange={this.inputHandler} name="name" type="text" id="name"/>
                        </label>
                        <label className={"userAddLabel"}> Nazwisko
                            <input onChange={this.inputHandler} name="surname" type="text" id="surname"/>
                        </label>
                        <label className={"userAddLabel"}> Dzienny wymiar pracy
                            <input onChange={this.inputHandler} name="dailyTime" type="number" id="dailyTime"
                                   placeholder={"W godzinach"}/>
                        </label>
                        <button className={"userAddBtn"} type="submit">Dodaj</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default UserAddForm