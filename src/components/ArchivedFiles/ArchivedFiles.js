import React, {Component} from "react";
import data from "../Firebase/Firebase";
import AppFooter from "../AppFooter/AppFooter";

const classNames = require('classnames');

class ArchivedFiles extends Component {
    state = {
        archive: [],
        selectedMonth: null
    };

    quitArchiveMode = () => {
        this.props.handleArchive()
    };

    inputHandler = (e) => {

        this.setState({
            selectedMonth: e.target.id,
            archive: []
        });

        data.collection(`archive`).doc(e.target.id).collection('events').get().then(querySnapshot => {

            let downloadedEvent = "";

            querySnapshot.docs.map((doc) => {
                return downloadedEvent = this.setState({archive: this.state.archive.concat(doc)});

            });

            return downloadedEvent
        })
            .error = (error) => {
            return console.log(error)
        }
    };

    monthToChoose = () => {

        const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
            "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

        return months.map(month => {
            return <li
                className={classNames("archivedFilesMonth", {"selectedMonth": month === this.state.selectedMonth})}
                id={month} key={month}
                onClick={this.inputHandler}>{month}</li>
        })
    };

    renderArchived = () => {
        if ((this.state.selectedMonth !== null) && (this.state.archive.length < 1)) {
            return <li className={"archivedEventEmpty"}>Pusto</li>
        }
        else {
            const sortDates = (a, b) => {
                return Number(a.data().date) - Number(b.data().date);
            };

            const archivesSorted = this.state.archive.sort(sortDates);

            return archivesSorted.map(e => {
                const event = e.data();
                return <li className={"archivedEvent"} key={e.id}>
                    <span className={"archivedEventDate"}>{event.date}</span>
                    <div className="archivedEventCnt">
                        <span>{event.inMinus}</span>
                        <div className={"eventCount"}>{event.count}h</div>
                        <span>{event.inPlus}</span>
                    </div>
                </li>
            })
        }
    };

    render() {

        return (
            <>
                <section className={"archivedFiles"}>
                    <div className={"archivedFilesCnt"}>
                        <div className={"archivedFilesTop"}>
                            <button className={"archivedFilesBackBtn"} onClick={this.quitArchiveMode}/>
                            <h2 className={"archivedFilesTitle"}>Archiwum zastępstw</h2>
                        </div>
                        <div className={"archivedFilesContent"}>
                            <ul className={classNames("archivedFilesList", {"narrow": this.state.selectedMonth !== null})}>
                                {this.monthToChoose()}
                            </ul>
                            <ul className={classNames("archivedFilesList", {"wide": this.state.selectedMonth !== null})}>
                                {this.renderArchived()}
                            </ul>
                        </div>
                    </div>
                </section>
                <AppFooter/>
            </>
        )
    }
}

export default ArchivedFiles;