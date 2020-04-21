import React, {Component} from "react";
import CalendarToggle from "../CalendarToggle/CalendarToggle";
import UserPart from "../UserPart/UserPart";
import ArchivedFiles from "../ArchivedFiles/ArchivedFiles";
import CalendarPart from "../CalendarPart/CalendarPart";

class AppContent extends Component {
    state = {
        archiveMode: false,
        showCalendar: true
    };

    handleArchive = () => {
        this.setState({archiveMode: !this.state.archiveMode})
    };

    handleCalendar = (option) => {
        this.setState({showCalendar: option})
    };

    render() {
        return (
            <section className={"appContent"}>
                {this.state.archiveMode &&
                <>
                    <ArchivedFiles handleArchive={this.handleArchive}/>
                </>}
                {!this.state.archiveMode &&
                <>
                    <CalendarToggle handleCalendar={this.handleCalendar}/>
                    {this.state.showCalendar && <CalendarPart/>}
                    <UserPart handleArchive={this.handleArchive}/>
                </>}
            </section>
        )
    }
}


export default AppContent