import React from "react";
import data, {app} from "../Firebase/Firebase";

class CalendarEventForm extends React.Component {
    state = {
        date: "",
        inPlus: "Wybierz pracownika",
        inMinus: "Wybierz pracownika",
        count: "",
        author: "",
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
        const userId = app.auth().currentUser.uid;

        const event = {
            date: this.state.date,
            inPlus: this.state.inPlus,
            inMinus: this.state.inMinus,
            count: this.state.count,
            monthName: this.props.monthName,
            author: userId
        };

        if (this.validateForm()) {

            this.props.addEventMarkerOnCalendar(Math.random());
            data.collection(`sub`).add(event).then(() => {
                    this.setState({message: "Dodano nowe zastępstwo!"});
                    setTimeout(() => {
                        this.setState({
                            message: ""
                        }, this.props.toggleForm());
                    }, 2000);
                }
            ).catch(error => {
                console.log(error)
            });
        }
    };
    closeForm = () => {
        this.props.toggleForm();
    };

    render() {
        return (
            <div className={"eventFormMask"}>
                <form className={"eventForm"} onSubmit={this.submitHandler}>
                    <button className={"userAddFormClose"} type="button" onClick={this.closeForm}/>
                    <div className={"eventFormCnt"}>
                        <h3 className={"eventFormTitle"}>Nowe zastępstwo</h3>
                        <div className={"eventFormMsg"}>{this.state.message}</div>
                        <label className={"eventFormLabel-1"}>Osoba zastępowana
                            <select id="inMinus" className={"eventFormSct"} onChange={this.inputHandler}
                                    value={this.state.inMinus}>
                                <option value="Wybierz pracownika">Wybierz pracownika</option>
                                <option value="Inne">Inne</option>
                                {this.selectPerson1()}
                            </select>
                        </label>
                        <label className={"eventFormLabel-2"}>Osoba zastępująca
                            <select id="inPlus" className={"eventFormSct"} onChange={this.inputHandler}
                                    value={this.state.inPlus}>
                                <option value={"Wybierz pracownika"}>Wybierz pracownika</option>
                                {this.selectPerson2()}
                            </select>
                        </label>
                        <label className={"eventFormLabel-3"}>Czas
                            <input id="count" className={"eventFormInput"} onChange={this.inputHandler}
                                   placeholder="W godzinach">
                            </input>
                        </label>
                        <button className={"eventFormBtn"} type="submit">Dodaj</button>
                    </div>
                </form>
            </div>
        )
    }

    componentDidMount() {
        const user = app.auth().currentUser;

        data.collection(`users`).where("author", "==", user.uid).get().then(collection => {
                this.setDate();
                return collection.docs.map(doc => {
                    return this.setState({
                        users: this.state.users.concat(doc.data())
                    });
                })
            }
        ).catch((error) => console.error('Error:', error))
    }
}

export default CalendarEventForm