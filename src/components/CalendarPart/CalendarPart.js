import React from "react";
// import Calendar from 'react-calendar/dist/entry.nostyle';
import CalendarEvents from "../CalendarEvents/CalendarEvents";

class CalendarPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    };

    onChange = date => this.setState({date});
    tileContent = (date, view) => {
        if (view === `month` && date.getDay() === 0) {
            return console.log('date');
        }
    };

    render() {
        return (
            <div className={"calendarPart"}>
                {/*<Calendar*/}
                {/*    onChange={this.onChange}*/}
                {/*    value={this.state.date}/>*/}
                <CalendarEvents date={this.state.date} tileContent={this.tileContent}/>
            </div>
        );
    }
}

export default CalendarPart