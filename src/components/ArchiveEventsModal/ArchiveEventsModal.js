import React, {Component} from "react";
import data from "../Firebase/Firebase";
import {app} from "../Firebase/Firebase";

class ArchiveEventsModal extends Component {
    state = {
        selectedMonth: "",
        message: ""
    };

    renderMonths = () => {
        const months = [
            "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
            "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień",
        ];
        return months.map(month => {
            return (
                <option key={month} value={month}>
                    {month}
                </option>
            )
        });
    };

    handleChange = (e) => {

        this.setState({
            selectedMonth: e.target.value
        })
    };

    archiveEvents = () => {

        const matchSelectedMonthToEvent = (month) => {
            const eventMonthName = month.data().monthName.toLowerCase();
            return eventMonthName === this.state.selectedMonth
        };

        this.props.events.filter(matchSelectedMonthToEvent).map(e => {

                const event = e.data();

                data.collection('archive').doc(this.state.selectedMonth).collection('events').add({
                        date: event.date,
                        inMinus: event.inMinus,
                        inPlus: event.inPlus,
                        count: event.count,
                        author: app.auth().currentUser.uid
                    }
                ).then(
                    () => {
                        this.setState({message: "Przeniesiono wydarzenia do archiwum"});
                        setTimeout(() => {
                            this.setState({message: ""});
                            this.closeForm();
                        }, 2000)
                    }
                ).catch(error => {
                    console.log(error)
                });

                return data.collection('sub').doc(e.id).delete()
            }
        );
    };

    submitHandler = (e) => {
        e.preventDefault();
        if ((this.state.selectedMonth !== "") && (this.state.selectedMonth !== "placeholder")) {
            this.archiveEvents();

        } else {
            return this.setState({message: "Zaznacz miesiąc który chcesz przenieść do archiwum"},
                () => {
                    setTimeout(() => {
                        this.setState({message: ""})
                    }, 3000)
                }
            )
        }
    };
    closeForm = () => {
        this.props.toggleForm();
    };

    render() {
        return (
            <div className={"archiveEventsModalMask"}>
                <form className={"archiveEventsModal"}>
                    <button className={"userAddFormClose"}
                            type="button"
                            onClick={this.closeForm}/>
                    <div className={"archiveEventsModalCnt"}>
                        <h3 className={"userAddTitle"}>Zarchiwizować?</h3>
                        <div className={"archiveEventsModalMsg"}>{this.state.message}</div>
                        <select id="months"
                                value={this.state.selectedMonth}
                                onChange={this.handleChange}>
                            <option value="placeholder">Wybierz miesiąc</option>
                            {this.renderMonths()}
                        </select>
                        <p className={"archiveEventsModalContent"}>
                            Archiwizacja spowoduje przeniesienie wszystkich
                            wydarzeń z<span> wybranego miesiąca</span> do archiwum
                        </p>
                        <div className={"archiveEventsModalBtnCnt"}>
                            <button className={"archiveEventsModalBtn"}
                                    type="button"
                                    onClick={this.submitHandler}>Archiwizuj
                            </button>
                            <button className={"archiveEventsModalBtn"}
                                    type="button"
                                    onClick={this.closeForm}> Rezygnuj
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ArchiveEventsModal