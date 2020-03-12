import React from "react";
import data from "../Firebase/Firebase";

class CalendarEventForm extends React.Component {
    state = {
        date: "",
        inPlus: "Wybierz pracownika",
        inMinus: "Wybierz pracownika",
        count: 0,
        show: true,
        users: [],
        error: "",
        success: ""
    };
    setDate = () => {
        const date = this.props.date.toLocaleDateString();
        this.setState({date: date})
    };
    selectPerson1 = () => {
        return this.state.users.map((person) => {
            return (
                <option key={Math.random()} value={person.fullName}>{person.fullName}</option>
            )
        })
    };
    selectPerson2 = () => {
        return this.state.users.map((person) => {
            return (
                <option key={Math.random()} value={person.fullName}>{person.fullName}</option>
            )
        })
    };
    inputHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
    };
    hoursHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
        this.setDate()
    };
    submitHandler = (e) => {
        if (this.state.error === "") {
            e.preventDefault();
            this.props.onAdded();
            this.setState({success: "Dodano nowe zastępstwo!"});
            data.collection(`sub`).add(this.state);
            setTimeout(() => {
                this.props.hide();
            }, 4000);
        }
        if ((this.state.inPlus === "Wybierz pracownika") || (this.state.inMinus === "Wybierz pracownika")) {
            e.preventDefault();
            this.setState({error: "Wybierz pracownika z listy"})
        }
        if (this.state.inPlus === this.state.inMinus) {
            e.preventDefault();
            this.setState({error: "Pola osoby zastępującej i zastępowanej nie mogą mieć tej samej wartości!"});
        }
        if ((this.state.count === "") || (this.state.count <= 0)) {
            e.preventDefault();
            this.setState({error: "Pole godzin nie może być puste ani mniejsze od 0!"});
        }
    };
    closeForm = () => {
        this.setState({show: false});
        this.props.hide();
    };

    render() {
        return (
            <div className={"eventForm"}>
                <form onSubmit={this.submitHandler} className={"eventFormForm"}>
                    <h3 className={"eventFormTitle"}>Nowe zastępstwo</h3>
                    <div className={"eventFormError"}>{this.state.error}</div>
                    <div className={"eventFormSuccess"}>{this.state.success}</div>
                    <label className={"eventFormLabel1"}>Osoba zastępowana
                        <select id="inMinus" className={"eventFormSct"} onChange={this.inputHandler}
                                value={this.state.inMinus}>
                            <option value="Wybierz pracownika">Wybierz pracownika</option>
                            <option value="Inne">Inne</option>
                            {this.selectPerson1()}
                        </select>
                    </label>
                    <label className={"eventFormLabel2"}>Osoba zastępująca
                        <select id="inPlus" className={"eventFormSct"} onChange={this.inputHandler}
                                value={this.state.inPlus}>
                            <option value={"Wybierz pracownika"}>Wybierz pracownika</option>
                            {this.selectPerson2()}
                        </select>
                    </label>
                    <input id="count" className={"eventFormInput"} onChange={this.hoursHandler}
                           placeholder="Ile godzin?">
                    </input>
                    <button type="submit" className={"eventFormBtn"}>Zatwierdź</button>
                    <button className={"eventFormClose"} onClick={this.closeForm}/>
                </form>
            </div>
        )
    }

    componentDidMount() {
        data.collection(`users`).get()
            .then((collection) => {
                    return collection.docs.map((doc) => {
                        return this.setState({
                            users: this.state.users.concat(doc.data())
                        })
                    })
                }
            )
            .catch((error) => console.error('Error:', error))
    }
}

export default CalendarEventForm