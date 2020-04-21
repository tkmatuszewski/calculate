import React, {Component} from "react";
import Event from "../Event/Event";

class CalendarEventList extends Component {

    dayEvents = () => {
        let selectedDate = this.props.date.toLocaleDateString();
        return this.props.events.map(event => {

            let eventThisDay = "";

            if (event.data().date === selectedDate) {
                eventThisDay = <Event
                    event={event}
                    key={event.id}
                    addEventMarkerOnCalendar={this.props.addEventMarkerOnCalendar}
                />
            }
            return eventThisDay
        });
    };

    render() {
        return (
            <ul className={"calendarEventList"}>
                {this.dayEvents()}
            </ul>
        )
    }
}

export default CalendarEventList