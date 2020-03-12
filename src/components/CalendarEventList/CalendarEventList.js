import React from "react";
import data from "../Firebase/Firebase";
import Event from "../Event/Event";


class CalendarEventList extends React.Component {
    state = {
        events: []
    };
    dayEvents = () => {
        let selectedDate = this.props.date.toLocaleDateString();
        return this.state.events.map((event) => {
            if (event.data().date === selectedDate) {
                return <Event event={event} key={event.id}/>
            }
        });
    };

    render() {
        return (
            <>
                <ul className={"calendarEventList"}>
                    {this.dayEvents()}
                </ul>
            </>
        )
    }

    componentDidMount() {
        console.log("mount");
        data.collection(`sub`).get()
            .then((el) => {
                el.docs.map((doc) => {
                    return  this.setState({
                        events: this.state.events.concat(doc),
                    });
                })
            })
            .catch((error) => console.error('Error:', error))
    }
}


export default CalendarEventList