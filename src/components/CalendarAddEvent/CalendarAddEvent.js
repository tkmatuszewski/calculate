import React from "react";
import CalendarEventForm from "../CalendarEventForm/CalendarEventForm";

class CalendarAddEvent extends React.Component{
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
        if (this.state.show) {
            return (
                <>
                    <button className={"calendarAddEvent"} onClick={this.showForm}/>
                    <CalendarEventForm date={this.props.date} hide={this.passToggle} onAdded={this.props.onAdded}/>
                </>
            )
        } else {
            return <button className={"calendarAddEvent"} onClick={this.showForm}/>
        }
    }
}

export default CalendarAddEvent