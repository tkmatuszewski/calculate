import React, {useState} from "react";

const Archives = (props) => {

    const [tileDescription, setTileDescription] = useState(false);

    const handleClick = () => {
        props.handleArchive();
    };


    const handleMouseEnter = () => {
        setTileDescription(true)
    };

    const handleMouseLeave = () => {
        setTileDescription(false)
    };

    return (
        <div className={"archives"}
             onClick={handleClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <span className={"userAddMobile"}>Przeglądaj archiwum
                    <span className={"archivesMobileDecor"}/>
                </span>
            <div className={"archivesIcon"}/>
            {tileDescription && <span className={"archivesDsc"}>Archiwum</span>}
        </div>
    )
};

export default Archives