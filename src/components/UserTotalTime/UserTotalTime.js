import React, {Component} from "react";

class TotalTime extends Component {

    render() {

        const totalTime = (this.props.businessDays * this.props.dailyTime) + this.props.bonusHours;
        const totalSalary = this.props.rate * totalTime;

        return (
            <div className={"totalTime"}>
                <span className={"totalTimeHours"}>{totalTime}<span>h</span></span>
                <span className={"totalTimeSalary"}>{totalSalary}<span>zł</span></span>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.businessDays !== prevProps.businessDays) {
            this.setState({reloadOnPropsChange: Math.random()})
        }
    }
}

export default TotalTime