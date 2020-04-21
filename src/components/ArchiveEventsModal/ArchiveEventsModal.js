import React, {Component} from "react";
import data from "../Firebase/Firebase";

class ArchiveEventsModal extends Component {
    state = {
        show: true,
        selectedMonthValue: "",
        selectedMonthName: "",
        message: ""
    };
    toggleHandler = () => {
        this.setState({show: false});
        this.props.closeModal();
    };
    submitHandler = (e) => {
        e.preventDefault();
        if ((this.state.selectedMonth !== "") && (this.state.selectedMonth !== "placeholder")) {
            this.archiveEvents();
            this.setState({message: "Przeniesiono wydarzenia do archiwum"});
            setTimeout(() => {
                this.toggleHandler();
            }, 2000)
        } else {
            return this.setState({message: "Zaznacz miesiąc który chcesz przenieść do archiwum"},
                () => {
                    setTimeout(() => {
                        this.setState({message: ""})
                    }, 3000)
                })
        }

    };

    inputHandler = (e) => {
        let monthValue = e.target.value.split(",")[0];
        let monthName = e.target.value.split(",")[1];
        this.setState({
            selectedMonthValue: monthValue,
            selectedMonthName: monthName
        })
    };


    renderMonths = () => {
        const months = [
            {name: "styczeń", value: "01"},
            {name: "luty", value: "02"},
            {name: "marzec", value: "03"},
            {name: "kwiecień", value: "04"},
            {name: "maj", value: "05"},
            {name: "czerwiec", value: "06"},
            {name: "lipiec", value: "07"},
            {name: "sierpień", value: "08"},
            {name: "wrzesień", value: "09"},
            {name: "październik", value: "10"},
            {name: "listopad", value: "11"},
            {name: "grudzień", value: "12"}
        ];
        return months.map(month => {
            return <option key={month.name}
                           value={[month.value, month.name]}>
                {month.name}
            </option>
        });
    };
    archiveEvents = () => {

        const matchSelectedMonth = (month) => {
            const eventMonth = month.data().date.split(".")[1];
            return eventMonth === this.state.selectedMonthValue;
        };

        const eventsToBeArchived = this.props.events.filter(matchSelectedMonth);

        eventsToBeArchived.map(e => {

                const event = e.data();

                data.collection('archive').doc(this.state.selectedMonthName).collection('events').add({
                        date: event.date,
                        inMinus: event.inMinus,
                        inPlus: event.inPlus,
                        count: event.count
                    }
                );
                return data.collection('sub').doc(e.id).delete()
            }
        );
    };

    render() {
        return (
            <div className={"archiveEventsModalMask"}>
                <form className={"archiveEventsModal"}>
                    <button className={"userAddFormClose"}
                            type="button"
                            onClick={this.toggleHandler}/>
                    <div className={"archiveEventsModalCnt"}>
                        <h3 className={"userAddTitle"}>Zarchiwizować?</h3>
                        <div className={"archiveEventsModalMsg"}>{this.state.message}</div>
                        <select id="months"
                                value={this.state.selectedMonthName}
                                onChange={this.inputHandler}>
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
                                    onClick={this.toggleHandler}> Rezygnuj
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ArchiveEventsModal