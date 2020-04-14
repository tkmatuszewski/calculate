import React, {Component} from "react";
import classNames from 'classnames';

class CalendarToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCalendar: true,
        }
    };

    toggleCalendar = () => {
        this.setState({showCalendar: !this.state.showCalendar},
            () => {
                this.props.handleCalendar(this.state.showCalendar)
            }
        )
    };

    render() {
        const calendarToggler = classNames({
            calendarToggleIcon: true,
            calendarMode: this.state.showCalendar
        });
        return (
            <div className={"calendarToggle"} onClick={this.toggleCalendar}>
                <div className={calendarToggler}/>
            </div>
        )
    }
}

export default CalendarToggle