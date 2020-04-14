import React, {Component} from "react";
import data from "../Firebase/Firebase";

class ArchiveEventsModal extends Component {
    state = {
        show: true,
        message: ""
    };
    toggleHandler = () => {
        this.setState({show: false});
        this.props.closeModal();
    };
    submitHandler = (e) => {
        e.preventDefault();
        this.archiveEvents();
        this.setState({message: "Przeniesiono wydarzenia do archiwum"});
        setTimeout(() => {
            this.toggleHandler();
        }, 2000)
    };

    archiveEvents = () => {

        this.props.events.map(e => {

                const event = e.data();

                const single ={
                    date: event.date,
                    inMinus: event.inMinus,
                    inPlus: event.inPlus,
                    count: event.count
                };

                data.collection('archive').add(single);

                return data.collection('sub').doc(e.id).delete()
            }
        );
    };

    render() {
        return (
            <div className={"archiveEventsModalMask"}>
                <div className={"archiveEventsModal"}>
                    <div className={"userAddFormTop"}>
                        <button className={"userAddFormClose"} type="button" onClick={this.toggleHandler}/>
                    </div>
                    <h3 className={"userAddTitle"}>Zarchiwizować?</h3>
                    <div className={"archiveEventsModalMsg"}>{this.state.message}</div>
                    <p className={"archiveEventsModalContent"}>
                        Archiwizacja spowoduje przeniesienie wszystkich wprowadzonych zastępstw do archiwum
                    </p>
                    <div className={"archiveEventsModalBtnCnt"}>
                        <button className={"archiveEventsModalBtn"} type="button"
                                onClick={this.toggleHandler}> Rezygnuj
                        </button>
                        <button className={"archiveEventsModalBtn"} type="button"
                                onClick={this.submitHandler}>Archiwizuj
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArchiveEventsModal