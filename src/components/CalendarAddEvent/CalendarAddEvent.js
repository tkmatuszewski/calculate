import React, {Component} from "react";
import CalendarEventForm from "../CalendarEventForm/CalendarEventForm";

class CalendarAddEvent extends Component {
    state = {
        show: false
    };

    toggleForm = () => {
        this.setState({show: !this.state.show})
    };

    render() {
        return (
            <>
                <button className={"calendarAddEvent"}
                        onClick={this.toggleForm}/>
                {this.state.show && <CalendarEventForm
                    date={this.props.date}
                    monthName = {this.props.monthName}
                    toggleForm={this.toggleForm}
                    addEventMarkerOnCalendar={this.props.addEventMarkerOnCalendar}/>}
            </>
        )
    }
}

export default CalendarAddEvent