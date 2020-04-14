import React, {Component} from "react";

class TotalTime extends Component {

    state = {
        totalTime: ""
    };

    render() {

        const totalTime = (this.props.businessDays * this.props.dailyTime) + this.props.bonusHours;

        return <div className={"totalTime"}> {totalTime}
            <span>h</span>
        </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.businessDays !== prevProps.businessDays) {
            this.setState({reloadOnPropsChange: Math.random()})
        }
    }
}

export default TotalTime