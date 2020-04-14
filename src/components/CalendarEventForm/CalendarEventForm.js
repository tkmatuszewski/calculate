import React from "react";
import data from "../Firebase/Firebase";

class CalendarEventForm extends React.Component {
    state = {
        date: "",
        inPlus: "Wybierz pracownika",
        inMinus: "Wybierz pracownika",
        count: "",
        show: true,
        users: [],
        message: "",
        error: false,
        valid: false
    };

    setDate = () => {
        const date = this.props.date.toLocaleDateString();
        this.setState({date})
    };
    selectPerson1 = () => {
        return this.state.users.map((person) => {
            return (
                <option key={person.fullName + "InMinus"} value={person.fullName}>{person.fullName}</option>
            )
        })
    };
    selectPerson2 = () => {
        return this.state.users.map((person) => {
            return (
                <option key={person.fullName + "inPlus"} value={person.fullName}>{person.fullName}</option>
            )
        })
    };
    inputHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    validateForm = () => {

        let formIsValid = true;

        if (this.state.inPlus === this.state.inMinus) {
            this.setState({
                message: "Zaznacz dwie różne osoby!",
            });
            formIsValid = false
        }
        if ((this.state.inMinus === "Wybierz pracownika") || (this.state.inPlus === "Wybierz pracownika")) {
            this.setState({
                message: "Wybierz pracowników"
            });
            formIsValid = false
        }
        if ((this.state.count === "") || (this.state.count <= 0)) {
            this.setState({
                message: "Pole godzin musi być większe od 0!",
            });
            formIsValid = false
        }
        return formIsValid
    };

    submitHandler = (e) => {
        e.preventDefault();

        const event = {
            date: this.state.date,
            inPlus: this.state.inPlus,
            inMinus: this.state.inMinus,
            count: this.state.count
        };

        if (this.validateForm()) {
            this.setState({message: "Dodano nowe zastępstwo!"});
            this.props.addEventMarkerOnCalendar(Math.random());
            data.collection(`sub`).add(event);
            setTimeout(() => {
                this.setState({
                    message: ""
                }, this.props.hide);
            }, 2000);
        }
    };
    closeForm = () => {
        this.setState({show: false});
        this.props.hide();
    };

    render() {
        return (
            <div className={"eventFormMask"}>
                <div className={"eventForm"}>
                    <div className={"userAddFormTop"}>
                        <button className={"userAddFormClose"} type="button" onClick={this.closeForm}/>
                    </div>
                    <h3 className={"eventFormTitle"}>Nowe zastępstwo</h3>
                    <div className={"eventFormMsg"}>{this.state.message}</div>
                    <form className={"eventFormForm"} onSubmit={this.submitHandler}>
                        <label className={"eventFormLabel"}>Osoba zastępowana
                            <select id="inMinus" className={"eventFormSct"} onChange={this.inputHandler}
                                    value={this.state.inMinus}>
                                <option value="Wybierz pracownika">Wybierz pracownika</option>
                                <option value="Inne">Inne</option>
                                {this.selectPerson1()}
                            </select>
                        </label>
                        <label className={"eventFormLabel"}>Osoba zastępująca
                            <select id="inPlus" className={"eventFormSct"} onChange={this.inputHandler}
                                    value={this.state.inPlus}>
                                <option value={"Wybierz pracownika"}>Wybierz pracownika</option>
                                {this.selectPerson2()}
                            </select>
                        </label>
                        <label className={"eventFormLabel"}>Czas
                            <input id="count" className={"eventFormInput"} onChange={this.inputHandler}
                                   placeholder="W godzinach">
                            </input>
                        </label>
                        <button className={"eventFormBtn"} type="submit">Dodaj</button>
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount() {
        data.collection(`users`).get()
            .then((collection) => {
                    this.setDate();
                    return collection.docs.map((doc) => {
                        return this.setState({
                            users: this.state.users.concat(doc.data())
                        });
                    })
                }
            )
            .catch((error) => console.error('Error:', error))
    }
}

export default CalendarEventForm