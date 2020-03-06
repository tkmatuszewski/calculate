import React from "react";
import data from "../Firebase/Firebase";

class Event extends React.Component {
    state = {
        shortInMin: "",
        shortInPls: ""
    };
    eventDelete = (e) => {
        const eventId = e.target.parentElement.getAttribute("data-id");
        data.collection(`sub`).doc(eventId).delete();
        e.target.parentElement.remove();
        this.render()
    };
    // shortenUsers  =()=> {
    //     let name = this.props.event.data();
    //     let shortinMin = name.inMinus.split("");
    //     // shortMin = shortinMin[0][0]+shortinMin[1][0]
    //     console.log(shortinMin);
    //     return shortinMin
    // ;
    render() {
        let event = this.props.event;
        return (
            <li key={event} className={"eventEl"}>
                <div data-id={event.id} className={"eventContainer"}>
                    <div className={"eventUser1"}>{event.data().inMinus}</div>
                    <div className={"eventCount"}>{event.data().count}</div>
                    <div className={"eventUser2"}>{event.data().inPlus}</div>
                    <button onClick={this.eventDelete} className={"eventDel"}/>
                </div>
            </li>
        )
    }
}

export default Event