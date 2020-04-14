import React, {Component} from "react";
import Calendar from 'react-calendar/dist/entry.nostyle'
import data from "../Firebase/Firebase";
import CalendarDate from "../CalendarDate/CalendarDate";
import CalendarAddEvent from "../CalendarAddEvent/CalendarAddEvent";
import CalendarEventList from "../CalendarEventList/CalendarEventList";

class CalendarPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            events: [],
            eventDates: [],
            loaded: false,
            dataFetched : false,
            addEventMarkerOnCalendar : ""
        }
    };

    onChange = (date) => this.setState({date});

    tileContent = (view) => {

        let event = false;
        let eventsThisDay = 0;
        this.state.eventDates.map(eventDate => {
            if ((view.view === 'month') && (view.date.toLocaleDateString() === eventDate)) {

                event = true;
                eventsThisDay +=1;
            }
        });
        if (event === true) {
            return <div className={"calendarPartIndicator"}>{eventsThisDay}</div>
        }
    };

    addEventMarkerOnCalendar = (update)=> {
        return this.setState({addEventMarkerOnCalendar : update})

    };

    render() {
        return (
            <div className={"calendarPart"}>
                <div className={"calendarPartLeft"}>
                    {this.state.dataFetched &&
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                        tileContent={this.tileContent}
                    />
                    }
                </div>
                <div className={"calendarPartRight"}>
                    <div className={"calendarEvents"}>
                        <div className={"calendarEventsCnt"}>
                            <div className={"calendarEventsTop"}>
                                <CalendarDate date={this.state.date}/>
                                <CalendarAddEvent
                                    date={this.state.date}
                                    addEventMarkerOnCalendar ={this.addEventMarkerOnCalendar}/>
                            </div>
                            <CalendarEventList date={this.state.date}
                                               events={this.state.events}
                                               addEventMarkerOnCalendar ={this.addEventMarkerOnCalendar}/>
                        </div>
                    </div>
                    <h2 className={"calendarPartTitle"}>Kalendarz</h2>
                </div>
            </div>);
    }

    componentDidMount() {

        data.collection(`sub`).onSnapshot((querySnapshot) => {

            querySnapshot.docChanges().map((change) => {

                this.state.eventDates.push(change.doc.data().date);

                if (change.type === "added") {
                    return this.setState({
                        events: this.state.events.concat(change.doc),
                    });
                }
                if (change.type === "removed") {
                    const filtered = this.state.events.filter(event => event.id !== change.doc.id);
                    return this.setState({events: filtered});
                }
            });
            this.setState({dataFetched : true})
        }).error = (error) => {
            return console.log(error)
        };
    }
    ;
}

export default CalendarPart