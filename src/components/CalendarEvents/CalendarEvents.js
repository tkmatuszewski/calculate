import React from "react";
import CalendarDate from "../CalendarDate/CalendarDate";
import CalendarAddEvent from "../CalendarAddEvent/CalendarAddEvent"

class CalendarEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0
        }
    };

    onAdded = () => {
        this.setState({
            key: Math.random()
        });
    };

    render() {
        return (
            <div className={"calendarEvents"}>
                <div className={"calendarEventsCnt"}>
                    <CalendarDate date={this.props.date}/>
                    <CalendarAddEvent date={this.props.date} onAdded={this.onAdded}
                              tileContent={this.tileContent}/>
                    {/*<CalendarEventList date={this.props.date} key={this.state.key}/>*/}
                </div>
            </div>
        )
    }
}

export default CalendarEvents