import React from "react";
import data from "../Firebase/Firebase";

class CalendarEventForm extends React.Component{
    state = {
        date: "",
        inPlus: "",
        inMinus: "",
        count: 0,
        show: true,
        users: []
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
        this.setState({[e.target.name]: e.target.value});
    };
    hoursHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.setDate()
    };
    submitHandler = (e) => {
        if (this.state.inPlus === this.state.inMinus) {
            e.preventDefault();
            alert("Pola osoby zastępującej i zastępowanej nie mogą mieć tej samej wartości")
        }
        if ((this.state.count === "") || (this.state.count <= 0)) {
            e.preventDefault();
            alert("Pole godzin nie może być puste ani mniejsze od 0!")
        } else {
            e.preventDefault();
            this.props.onAdded();
            this.setState({show: false});
            this.props.hide();
            data.collection(`sub`).add(this.state);
            alert("Dodano nowe zastępstwo!");
            // this.props.tileContent(this.state.date, month);
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
                    <label className={"eventFormLabel"}>Osoba zastępowana
                        <select name="inMinus" className={"eventFormSct"} onChange={this.inputHandler}>
                            <option value="" selected="selected">Wybierz pracownika</option>
                            <option value="Inne">Inne</option>
                            {this.selectPerson1()}
                        </select>
                    </label>
                    <label className={"eventFormLabel"}>Osoba zastępująca
                        <select name="inPlus" className={"eventFormSct"} onChange={this.inputHandler}>
                            <option value={"Wybierz pracownika"}>Wybierz pracownika</option>
                            {this.selectPerson2()}
                        </select>
                    </label>
                    <input name="count" className={"eventFormInput"} onChange={this.hoursHandler}
                           placeholder="Ile godzin?">
                    </input>
                    <button type="submit" className={"eventFormBtn"}>Zatwierdź</button>
                </form>
                <button className={"eventFormClose"} onClick={this.closeForm}/>
            </div>
        )
    }

    componentDidMount() {
        data.collection(`users`).get().then((collection) => {
                collection.docs.map((doc) => {
                    return this.setState({
                        users: this.state.users.concat(doc.data())
                    });
                })
            }
        );
    }
}

export default CalendarEventForm