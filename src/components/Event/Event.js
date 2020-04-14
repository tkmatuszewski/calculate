import React from "react";
import data from "../Firebase/Firebase";

function Event(props) {

    const eventDelete = () => {
        let id = props.event.id;
        data.collection(`sub`).doc(id).delete();
        props.addEventMarkerOnCalendar(Math.random());
    };

    const event = props.event.data();
    return (
        <li key={event.id} className={"event"}>
            <div className={"eventCnt"}>
                <button onClick={eventDelete} className={"eventDel"}/>
                <div className={"eventUser1"}>{event.inMinus}</div>
                <div className={"eventCount"}>{event.count}h</div>
                <div className={"eventUser2"}>{event.inPlus}</div>
            </div>
        </li>
    )
}

export default Event