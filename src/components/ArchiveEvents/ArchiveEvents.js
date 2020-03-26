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
        this.setState({show: state})
    };
    renderTile = () => {
        return (
            <div className={"archiveEvents"} onClick={this.toggle}>
                <div className={"archiveEventsCnt"}>
                    <div className={"archiveEventsIcon"}/>
                    <div className={"archiveEventsDesc"}>Archiwizuj zastępstwa</div>
                </div>
            </div>
        )
    };

    render() {
        if (this.state.show) {
            return (
                <>
                    {this.renderTile()}
                    <ArchiveEventsModal closeModal={this.closeModal}/>
                </>
            )
        } else {
            return this.renderTile()
        }
    }
}

export default ArchiveEvents