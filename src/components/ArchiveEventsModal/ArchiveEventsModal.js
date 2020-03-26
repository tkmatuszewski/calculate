import React from "react";

class ArchiveEventsModal extends React.Component {
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
        this.setState({message: "Przeniesiono wydarzenia do archiwum"});
        setTimeout(() => {
            this.toggleHandler();
        }, 2000)
    };
    // archiveEvents = () =>  {
    //     this.props.map((event)=>{
    //         return this.setState({archive : this.state.archive.concat(event)})
    //     })
    // };
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