import React, {Component} from "react";
import ArchiveEventsModal from "../ArchiveEventsModal/ArchiveEventsModal";

class ArchiveEvents extends Component {
    state = {
        show: false,
        showTileDescription: false
    };
    toggleForm = () => {
        this.setState({show: !this.state.show})
    };
    handleTileDescription = () => {
        this.setState({showTileDescription: !this.state.showTileDescription})
    };

    renderTile = () => {
        return (
            <div className={"archiveEvents"}
                 onClick={this.toggleForm}
                 onMouseEnter={this.handleTileDescription}
                 onMouseLeave={this.handleTileDescription}>
                <span className={"userAddMobile"}>Zarchiwizuj zastępstwa
                    <span className={"archiveEventsMobileDecor"}/>
                </span>
                <div className={"archiveEventsCnt"}>
                    <div className={"archiveEventsIcon"}/>
                    {this.state.showTileDescription && <div className={"archiveEventsDesc"}>Archiwizuj zastępstwa</div>}
                </div>
            </div>
        )
    };

    render() {
        return (
            <>
                {this.renderTile()}
                {this.state.show && <ArchiveEventsModal
                    events={this.props.events}
                    toggleForm={this.toggleForm}
                />}
            </>
        )
    }
}

export default ArchiveEvents