import React from "react";

class ArchiveEventsModal extends React.Component {
    state = {
        show: true,
        message: ""
    };
    toggleHandler = () => {
        this.setState({show : false});
        this.props.closeModal();
    };
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({message : "Przeniesiono wydarzenia do archiwum"});
        setTimeout (()=> {
            this.toggleHandler();
        }, 2000)
    };
    render() {
        return (
            <form className={"archiveEventsModal"} onSubmit={this.submitHandler}>
                <div className={"archiveEventsModalTop"}>
                    <h3 className={"archiveEventsModalTitle"}>Czy na pewno zarchiwizować?</h3>
                    <button className={"archiveEventsModalClose"} onClick={this.toggleHandler}/>
                </div>
                <div className={"archiveEventsModalContent"}>Archiwizacja spowoduje przeniesienie wszystkich aktualnych
                    danych o wydarzeniach do archiwum
                </div>
                <div className={"archiveEventsBtnCnt"}>
                    <button className={"archiveEventsModalBtn"} type="submit">Archiwizuj</button>
                    <button className={"archiveEventsModalBtn"} onClick={this.toggleHandler}>Rezygnuj</button>
                </div>
                <span className={"archiveEventsModalMsg"}>{this.state.message}</span>
            </form>
        )
    }
}

export default ArchiveEventsModal