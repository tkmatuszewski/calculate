import React, {Component} from "react";
import Calendar from 'react-calendar/dist/entry.nostyle'
import data, {app} from "../Firebase/Firebase";
import CalendarDate from "../CalendarDate/CalendarDate";
import CalendarEventList from "../CalendarEventList/CalendarEventList";

class CalendarPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            events: [],
            eventDates: [],
            loaded: false,
            dataFetched: false,
            addEventMarkerOnCalendar: ""
        }
    };

    onChange = (date) => this.setState({date});

    tileContent = (view) => {

        let eventsThisDay = 0;
        let indicator = null;
        this.state.eventDates.map(eventDate => {
            if ((view.view === 'month') && (view.date.toLocaleDateString() === eventDate)) {

                eventsThisDay += 1;
                indicator = <div className={"calendarPartIndicator"}>{eventsThisDay}</div>
            }
            return indicator
        });
        return indicator
    };

    addEventMarkerOnCalendar = (update) => {
        return this.setState({addEventMarkerOnCalendar: update})
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
                        <CalendarDate date={this.state.date}
                                      addEventMarkerOnCalendar={this.addEventMarkerOnCalendar}/>

                        <CalendarEventList date={this.state.date}
                                           events={this.state.events}
                                           addEventMarkerOnCalendar={this.addEventMarkerOnCalendar}/>
                    </div>
                    <h2 className={"calendarPartTitle"}>Kalendarz</h2>
                </div>
            </div>);
    }

    componentDidMount() {
        const user = app.auth().currentUser;

        data.collection(`sub`).where("author", "==", user.uid).onSnapshot((querySnapshot) => {

            querySnapshot.docChanges().map((change) => {
                this.state.eventDates.push(change.doc.data().date);
                let eventsData = "";
                if (change.type === "added") {
                    eventsData = this.setState({
                        events: this.state.events.concat(change.doc),
                    });
                }
                if (change.type === "removed") {
                    const filtered = this.state.events.filter(event => event.id !== change.doc.id);
                    eventsData = this.setState({events: filtered});
                }
                return eventsData
            });
            this.setState({dataFetched: true})
        }).error = (error) => {
            return console.log(error)
        };
    }
    ;
}

export default CalendarPart