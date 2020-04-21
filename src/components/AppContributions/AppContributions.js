import React, {useState} from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

const AppContributions = () => {

    const [language, setLanguage] = useState("PL");
    const [languageBtn, setLanguageBtn] = useState("EN");

    const handleLanguage = () => {
        if (language === "PL") {
            setLanguageBtn("PL");
            return setLanguage("EN")
        }
        if (language === "EN") {
            setLanguageBtn("EN");
            return setLanguage("PL")
        }
    };

    return (
        <>
            <AppHeader/>
            <button className={"contributionsBtn"} onClick={handleLanguage}>{languageBtn}</button>
            <section className={"contributions"}>
                <div className={"contributionsCnt"}>
                    {language === "PL" &&
                    <div className={"contributionsLeft"}>
                        <h2 className={"contributionsTitle"}>Podziękowania</h2>
                        <p className={"contributionsContent"}>Projekt zrealizowano z wykorzystaniem ikon, grafik
                            wektorowych wielu artystów. Między innymi dzięki Nim interfejsy aplikacji są dla
                            użytwkowników znacznie atrakcyjniejsze i bardziej czytelne.
                        </p>
                    </div>}
                    {language === "EN" &&
                    <div className={"contributionsLeft"}>
                        <h2 className={"contributionsTitle"}>Contributions</h2>
                        <p className="contributionsContent">This project was was brought to you thanks to some great
                            work of many artists. All these icons and illustrations make app UI so much more user
                            friendly and attractive.
                        </p>
                    </div>}
                    <ul className={"contributionsRight"}>
                        <li><a href="https://iconscout.com/icons/arrow" rel="noopener noreferrer" target="_blank">Arrow
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/elegant-themes" rel="noopener noreferrer"
                            target="_blank">Elegant Themes</a>
                        </li>
                        <li><a href="https://fontawesome.com/icons/trash-alt" rel="noopener noreferrer" target="_blank">Trash
                            Icon Fontawsome</a>
                        </li>
                        <li><a href="https://iconscout.com/icons/verified" rel="noopener noreferrer" target="_blank">Verified
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/benjamin-j-sperry">Benjamin J Sperry</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/icons/power" rel="noopener noreferrer" target="_blank">Power
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/jemismali">Jemis Mali</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/icons/menu" rel="noopener noreferrer" target="_blank">Menu
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/google-inc">Google Inc.</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/icons/down" rel="noopener noreferrer" target="_blank">Down
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/dario-ferrando">Dario Ferrando</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/icons/close" rel="noopener noreferrer" target="_blank">Close
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/google-inc" rel="noopener noreferrer"
                            target="_blank">Google Inc.</a></li>
                        <li><a href="https://iconscout.com/icons/briefcase" rel="noopener noreferrer" target="_blank">Briefcase
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/font-awesome">Font Awesome</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/icons/navigate-before" rel="noopener noreferrer"
                               target="_blank">Navigate Before
                            Icon</a> by <a href="https://iconscout.com/contributors/google-inc"
                                           rel="noopener noreferrer" target="_blank">Google
                            Inc.</a></li>
                        <li>
                            <a href="https://iconscout.com/icons/archive" rel="noopener noreferrer" target="_blank">Archive
                                Icon</a> by <a
                            href="https://iconscout.com/contributors/amit-jakhu">Amit Jakhu</a> on <a
                            href="https://iconscout.com">Iconscout</a>
                        </li>
                        <li>
                            <a href="https://iconscout.com/icons/archive" rel="noopener noreferrer" target="_blank">Archive
                                Icon</a> by <a
                            href="https://iconscout.com/contributors/ruxandra-cavescu">Ruxandra Cavescu</a> on <a
                            href="https://iconscout.com">Iconscout</a>
                        </li>
                        <li>
                            <a href="https://fontawesome.com/license">user-plus from Fontawsome </a>
                        </li>
                        <li>
                            <a href="https://iconscout.com/icons/add" rel="noopener noreferrer" target="_blank">Add
                                Icon</a> by <a
                            href="https://iconscout.com/contributors/jemismali">Jemis Mali</a> on <a
                            href="https://iconscout.com">Iconscout</a>
                        </li>
                        <li>
                            <a href="https://iconscout.com/illustrations/relax" rel="noopener noreferrer"
                               target="_blank">Relax and Spa Room
                                Illustration</a> by <a href="https://iconscout.com/contributors/tanahair-studio"
                                                       rel="noopener noreferrer" target="_blank">TanahAir Studio</a>
                        </li>
                        <li>
                            <a href="https://pl.freepik.com/darmowe-zdjecie-wektory/biznes">Biznes plik wektorowy
                                utworzone <br/>przez fullvector - pl.freepik.com</a>
                        </li>
                        <li>
                            <a href="https://iconscout.com/illustrations/calendar" rel="noopener noreferrer"
                               target="_blank">Calendar
                                Illustration</a> by <a href="https://iconscout.com/contributors/manypixels-gallery"
                                                       rel="noopener noreferrer" target="_blank">Manypixels Gallery</a>
                        </li>
                        <li>
                            <a href="https://pl.freepik.com/darmowe-zdjecie-wektory/tlo">Tło plik wektorowy utworzone
                                przez freepik - pl.freepik.com</a>
                        </li>
                        <li><a href="https://iconscout.com/icons/menu" rel="noopener noreferrer" target="_blank">Menu
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/eva-icons">Eva Icons</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/icons/logout" rel="noopener noreferrer" target="_blank">Logout
                            Icon</a> by <a
                            href="https://iconscout.com/contributors/theicontree">Diacanvas Studio</a> on <a
                            href="https://iconscout.com">Iconscout</a></li>
                        <li><a href="https://iconscout.com/illustrations/time-management" rel="noopener noreferrer"
                               target="_blank">Time
                            Management Illustration</a> by <a
                            href="https://iconscout.com/contributors/manypixels-gallery" rel="noopener noreferrer"
                            target="_blank">Manypixels
                            Gallery</a></li>
                        <li><a href="https://iconscout.com/illustrations/authentication" rel="noopener noreferrer"
                               target="_blank">Authentication Illustration</a> by <a
                            href="https://iconscout.com/contributors/manypixels-gallery"
                            rel="noopener noreferrer" target="_blank">Manypixels Gallery</a></li>
                    </ul>
                </div>
            </section>
            <AppFooter/>
        </>
    )
};

export default AppContributions