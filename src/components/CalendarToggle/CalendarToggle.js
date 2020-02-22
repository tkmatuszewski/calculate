import React from "react";
import CalendarPart from "../CalendarPart/CalendarPart";
import classNames from 'classnames';

class CalendarToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    };

    toggle = () => {
        this.setState({show: !this.state.show})
    };
    showCalendar = () => {
        this.toggle();
    };

    render() {
        const toggleBtn =
            <div className={"calendarToggle"} onClick={this.showCalendar}>
                <div className="calendarToggleMask">
                    <div className={classNames("calendarToggleIcon", {hide: this.state.show === true})}/>
                </div>
            </div>;
        if (this.state.show) {
            return (
                <>
                    {toggleBtn}
                    <CalendarPart/>
                </>
            )
        } else {
            return toggleBtn
        }
    }
}

export default CalendarToggle