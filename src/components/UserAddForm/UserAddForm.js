import React, {Component} from "react";
import data from "../Firebase/Firebase";
import {app} from "../Firebase/Firebase";

class UserAddForm extends Component {
    state = {
        name: "",
        surname: "",
        fullName: "",
        dailyTime: 0,
        rate: 0,
        author: "",
        message: "",
    };
    generateFullName = () => {
        this.setState({fullName: this.state.name + " " + this.state.surname})
    };
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.generateFullName);
    };
    submitHandler = (e) => {

        e.preventDefault();
        const userId = app.auth().currentUser.uid;

        const user = {
            name: this.state.name,
            surname: this.state.surname,
            fullName: this.state.fullName,
            dailyTime: this.state.dailyTime,
            rate: this.state.rate,
            author: userId
        };

        if ((this.state.name === "") || (this.state.surname === "")) {
            this.setState({message: "Pola Imię oraz Nazwisko muszą być uzupełnione!"});
            setTimeout(() => {
                return this.setState({message: ""})
            }, 3000)
        } else {
            e.preventDefault();

            data.collection(`users`).add(user).then(() => {
                this.setState({message: "Dodano nowego użytkownika!"});
                setTimeout(() => {
                    this.closeForm();
                    return this.setState({message: ""})
                }, 3000);
            });
        }
    };
    closeForm = () => {
        this.props.toggleForm();
    };

    render() {
        return (
            <div className={"userAddFormMask"}>
                <form className={"userAddForm"} onSubmit={this.submitHandler}>
                    <button className={"userAddFormClose"} type="button" onClick={this.closeForm}/>
                    <div className="userAddFormCnt">
                        <h3 className={"userAddTitle"}>Nowy pracownik</h3>
                        <div className={"userAddMsg"}>{this.state.message}</div>
                        <label className={"userAddLabel-1"}> Imię
                            <input onChange={this.inputHandler} name="name" type="text" id="name"/>
                        </label>
                        <label className={"userAddLabel-2"}> Nazwisko
                            <input onChange={this.inputHandler} name="surname" type="text" id="surname"/>
                        </label>
                        <label className={"userAddLabel-3"}> Dzienny wymiar pracy
                            <input onChange={this.inputHandler} name="dailyTime" type="number" id="dailyTime"
                                   placeholder={"W godzinach"}/>
                        </label>
                        <label className={"userAddLabel-4"}> Stawka godzinowa
                            <input onChange={this.inputHandler} name="rate" type="number" id="rate"
                                   placeholder={"W zł"}/>
                        </label>
                        <button className={"userAddBtn"} type="submit">Dodaj</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default UserAddForm