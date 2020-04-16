import React from "react";
import data from "../Firebase/Firebase";

class UserAddForm extends React.Component {
    state = {
        name: "",
        surname: "",
        fullName: "",
        dailyTime: 0,
        rate: 0,
        show: true,
        message: "",
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

        const user = {
            name: this.state.name,
            surname: this.state.surname,
            fullName: this.state.fullName,
            dailyTime: this.state.dailyTime,
            rate: this.state.rate
        };

        if ((this.state.name === "") || (this.state.surname === "")) {
            this.setState({message: "Pola Imię oraz Nazwisko muszą być uzupełnione!"});
            setTimeout(() => {
                return this.setState({message: ""})
            }, 3000)
        } else {
            e.preventDefault();
            this.generateFullName();
            data.collection(`users`).add(user);
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