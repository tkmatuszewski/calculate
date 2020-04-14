import React, {Component} from "react";
import ArchiveEventsModal from "../ArchiveEventsModal/ArchiveEventsModal";

class ArchiveEvents extends Component {
    state = {
        show: false,
        showTileDescription: false
    };
    toggle = () => {
        this.setState({show: !this.state.show})
    };
    closeModal = (state) => {
        this.setState({show: state})
    };
    handleMouseover = () => {
        this.setState({showTileDescription: !this.state.showTileDescription})
    };

    renderTile = () => {
        return (
            <div className={"archiveEvents"}
                 onClick={this.toggle}
                 onMouseEnter={this.handleMouseover}
                 onMouseLeave={this.handleMouseover}>
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
                    closeModal={this.closeModal}
                />}
            </>
        )
    }
}

export default ArchiveEvents