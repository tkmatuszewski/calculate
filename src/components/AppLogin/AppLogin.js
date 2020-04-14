import React, {useCallback, useContext, useState} from "react";
import {Link} from "react-router-dom";
import app from "firebase";
import {AuthContext} from "../Firebase/FirebaseAuth";
import {Redirect} from "react-router-dom";


const AppLogin = ({history}) => {

    const [errorMsg, setErrorMsg] = useState(null);

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/")
        } catch (error) {
            setErrorMsg(error.message);
            setTimeout(function() {
                setErrorMsg(null)
            }, 5000);
        }
    }, [history]);

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>
    }
    return (
        <>
            <div className="appLoginBg">
                <div className="appLoginBgLeft">
                    <form className="appLogin" onSubmit={handleLogin}>
                        <h3 className="appLoginTitle">Zaloguj się</h3>
                        <span className="appLoginError">{errorMsg}</span>
                        <label className="appLoginLabel">Email
                            <input name="email" type="email" className="appLoginInput"/>
                        </label>
                        <label className="appLoginLabel">Hasło
                            <input name="password" type="password" className="appLoginInput"/>
                        </label>
                        <span className="appLoginInfo">Nie masz konta?
                                <Link to="/register">Zarejestruj się</Link>
                            </span>
                        <button type="submit" className="appLoginBtn">Zaloguj</button>
                    </form>
                </div>
                <div className="appLoginBgRight"/>
            </div>
        </>
    )
};

export default AppLogin