import React from "react";

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
                </>
            )
        } else {
            return <button className={"calendarAddEvent"} onClick={this.showForm}/>
        }
    }
}

export default CalendarAddEvent