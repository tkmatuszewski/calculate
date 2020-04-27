import React, {Component} from "react";
import Event from "../Event/Event";

class CalendarEventList extends Component {

    selectedDayEvents = () => {
        let selectedDate = this.props.date.toLocaleDateString();

        const noEvents =
            <div className={"calendarEventEmpty"} key="CalendarEventEmpty">
                <span>Brak</span>
                <span>zastępstw</span>
            </div>;

        if (this.props.events.length === 0) {
            return noEvents
        } else {
            return this.props.events.map(event => {

                let eventThisDay = "";

                if (event.data().date === selectedDate) {
                    eventThisDay = <Event
                        event={event}
                        key={event.id}
                        addEventMarkerOnCalendar={this.props.addEventMarkerOnCalendar}
                    />
                } else {
                    eventThisDay = noEvents;
                }
                return eventThisDay
            })
        }
    };

    render() {
        return (
            <ul className={"calendarEventList"}>
                {this.selectedDayEvents()}
            </ul>
        )
    }
}

export default CalendarEventList