import React from "react";

function TotalTime (props) {
    let totalTime = props.businessDays * props.dailyTime + props.bonusHours;
    return <div className={"totalTime"}> {totalTime} </div>
}

export default TotalTime
