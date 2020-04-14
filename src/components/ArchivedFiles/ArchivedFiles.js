import React, {Component} from "react";
import data from "../Firebase/Firebase";

class ArchivedFiles extends Component {
    state = {
        archive: [],
        selectedMonth: ""
    };

    quitArchiveMode = () => {
        this.props.handleArchive()
    };

    renderArchived = () => {
        function compareNumbers(a, b) {
            return a - b
        }

        const archivesSorted = this.state.archive.sort(compareNumbers);

        return archivesSorted.map(e => {
            const event = e.data();
            return <li className={"archivedEvent"} key={e.id}>
                <div className={"archivedEventLeft"}>
                    <span className={"eventDate"}>{event.date}</span>
                </div>
                <div className="archivedEventRight">
                    <div className="archivedEventRightCnt">
                        <div>{event.inMinus}</div>
                        <div className={"eventCount"}>{event.count}h</div>
                        <div>{event.inPlus}</div>
                    </div>
                </div>
            </li>
        })
    };

    render() {
        return (
            <section className={"archivedFiles"}>
                <div className={"archivedFilesCnt"}>
                        <div className={"archivedFilesTop"}>
                            <button className={"archivedFilesBtn"} onClick={this.quitArchiveMode}/>
                            <h2 className={"archivedFilesTitle"}>Archiwum zastępstw</h2>
                        </div>
                        <ul className={"archivedFilesList"}>

                            {this.renderArchived()}
                        </ul>
                </div>
            </section>
        )
    }

    componentDidMount() {
        data.collection(`archive`).onSnapshot((querySnapshot) => {

            querySnapshot.docChanges().map((change) => {
                let archivedEvent = "";
                if (change.type === "added") {
                    archivedEvent = this.setState({
                        archive: this.state.archive.concat(change.doc),
                    });
                }
                // if (change.type === "removed") {
                //     const filtered = this.state.archive.filter(user => user.id !== change.doc.id);
                //     archivedEvent = this.setState({archive: filtered});
                // }
            return archivedEvent;
            })
        }).error = (error) => {
            return console.log(error)
        }
    }
}

export default ArchivedFiles;