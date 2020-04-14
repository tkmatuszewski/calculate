import React, {Component} from "react";
import CalendarEventForm from "../CalendarEventForm/CalendarEventForm";

class CalendarAddEvent extends Component {
    state = {
        show: false
    };
    showForm = (e) => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    };
    passToggle = (state) => {
        this.setState({show: state})
    };

    render() {
        return (
            <>
                <button className={"calendarAddEvent"}
                        onClick={this.showForm}/>
                {this.state.show && <CalendarEventForm
                    date={this.props.date}
                    hide={this.passToggle}
                    addEventMarkerOnCalendar ={this.props.addEventMarkerOnCalendar}/>}
            </>
        )
    }
}

export default CalendarAddEvent