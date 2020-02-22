import React from "react";

class CalendarDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        };
    }

    formatDate = () => {
        const dayNumber = this.props.date.toLocaleDateString().split(`.`)[0];
        const dayNamesArr = [
            "Niedz",
            "Pon",
            "Wt",
            "Śr",
            "Czw",
            "Pt",
            "Sob"
        ];
        const dayName = dayNamesArr[this.props.date.getDay()];
        const monthsArr = [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień"
        ];
        const monthName = monthsArr[this.props.date.getMonth()];
        return (
            <div className={"calendarDate"}>
                <h2 className={"calendarDate_dayName"}>{dayName}</h2>
                <span className={"calendarDate_day"}>{dayNumber}</span>
                <span className={"calendarDate_month"}>{monthName}</span>
            </div>
        )
    };

    render() {
        const date = this.formatDate();
        return (
            <div>{date}</div>
        )
    }
}

export default CalendarDate