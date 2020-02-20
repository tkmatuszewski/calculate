import React from "react";
import CalendarPart from "../CalendarPart/CalendarPart";

class CalendarToggle extends React.Component {
    state = {
        show: false
    };
    toggle = () => {
        this.setState({show: !this.state.show})
    };
    showCalendar = () => {
        this.toggle();
    };

    render() {
        // if (this.state.show) {
            return (
                <div>
                    <div className={"calendarToggle"} onClick={this.showCalendar}>
                        <div className={"calendarToggleIconHide"}/>
                    </div>
                    <CalendarPart/>
                </div>)
    //         )
    //     } else {
    //         return (
    //             <div className={"calendarToggle"} onClick={this.showCalendar}>
    //                 <div className={"calendarToggleIconShow"}/>
    //             </div>
    //         )

    }
}

export default CalendarToggle