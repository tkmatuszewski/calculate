import React from "react";
import CalendarAddEvent from "../CalendarAddEvent/CalendarAddEvent";

const CalendarDate = (props) => {

    let monthName = "";

    const formatDate = (date) => {
        const dayNumber = date.toLocaleDateString().split(`.`)[0];
        const dayNames = [
            "Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"
        ];
        const dayName = dayNames[date.getDay()];
        const monthNames = [
            "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
            "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
        ];
        monthName = monthNames[date.getMonth()];

        return (
            <div className={"calendarDate"}>
                <h2 className={"calendarDate_dayName"}>{dayName}</h2>
                <span className={"calendarDate_day"}>{dayNumber}</span>
                <span className={"calendarDate_month"}>{monthName}</span>
            </div>
        )
    };

    return (
        <div className={"calendarEventsTop"}>
            {formatDate(props.date)}
            <CalendarAddEvent
                date={props.date}
                monthName={monthName}
                addEventMarkerOnCalendar={props.addEventMarkerOnCalendar}/>
        </div>
    )
};

export default CalendarDate