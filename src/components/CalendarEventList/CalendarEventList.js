import React from "react";
import Event from "../Event/Event";

class CalendarEventList extends React.Component {

    dayEvents = () => {
        let selectedDate = this.props.date.toLocaleDateString();
        return this.props.events.map(event => {

            if (event.data().date === selectedDate) {
                return <Event
                    event={event}
                    key={event.id}
                    addEventMarkerOnCalendar ={this.props.addEventMarkerOnCalendar}
                />
            } else {
                return null
            }
        });
    };

    render() {
        return (
            <>
                <ul className={"calendarEventList"}>
                    {this.dayEvents()}
                </ul>
            </>
        )
    }
}

export default CalendarEventList