import React from "react";
import ArchiveEventsModal from "../ArchiveEventsModal/ArchiveEventsModal";

class ArchiveEvents extends React.Component {
    state = {
        show: false
    };
    toggle = () => {
        this.setState({show: !this.state.show})
    };
    closeModal = (state) => {
        this.setState({show : state})
    };

    render() {
        if (this.state.show) {
            return (
                <>
                    <div className={"archiveEvents"} onClick={this.toggle}>
                        <div className={"archiveEventsIcon"}/>
                        <div className={"archiveEventsDesc"}>Archiwizuj zastępstwa</div>
                    </div>
                    <ArchiveEventsModal closeModal = {this.closeModal}/>
                </>
            )
        } else {
            return (
                <div className={"archiveEvents"} onClick={this.toggle}>
                    <div className={"archiveEventsIcon"}/>
                    <div className={"archiveEventsDesc"}>Archiwizuj zastępstwa</div>
                </div>
            )
        }
    }
}

export default ArchiveEvents