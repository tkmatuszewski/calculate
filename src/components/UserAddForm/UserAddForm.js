import React from "react";
import data from "../Firebase/Firebase";

class UserAddForm extends React.Component {
    state = {
        name: "",
        surname: "",
        fullName: "",
        nick: "",
        dailyTime: 0,
        totalTime: 0,
        subs: [],
        show: true,
        message : ""
    };
    generateNick = () => {
        this.setState({nick: this.state.name[0] + this.state.surname[0]})
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
        this.generateNick();
        this.generateFullName();
        this.countTotal();
    };
    clearForm = () => {
        document.querySelector("#name").value = "";
        document.querySelector("#surname").value = "";
        document.querySelector("#dailyTime").value = "";
    };
    addUser = (e) => {
        e.preventDefault();
        // if ((this.state.name === "") || (this.state.surname === "")) {
        //     this.setState({message : "Pola Imię oraz Nazwisko muszą być uzupełnione!"});
        // }
        // else {
            e.preventDefault();
            this.setState({show: false});
            this.props.passToggleForm(this.state.show);
            this.generateFullName();

            data.collection(`users`).add(this.state);
            this.setState({message : "Dodano nowego użytkownika!"});
            this.clearForm();
        // }
    };

    closeForm = () => {
        this.setState({show: false});
        this.props.passToggleForm(this.state.show);
    };

    render() {
        return (
            <div className={"userAddForm"}>
                <form className={"userAddFormForm"} onSubmit={this.addUser}>
                    <div className={"userAddFormTop"}>
                        <h3 className={"userAddTitle"}>Nowy użytkownik</h3>
                        <button className={"userAddFormClose"} onClick={this.closeForm}/>
                    </div>
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
                    <div>{this.state.message}</div>
                </form>
            </div>
        )
    }
}


export default UserAddForm