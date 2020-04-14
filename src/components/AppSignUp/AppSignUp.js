import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import app from "firebase";

const AppSignUp = ({history}) => {

    const [errorMsg, setErrorMsg] = useState(null);

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/")
        } catch (error) {
            setErrorMsg(error.message);
            setTimeout(function() {
                setErrorMsg(null)
            }, 5000);
        }
    }, [history]);

    return (
        <div className="appSignUpBg">
            <div className="appSignUpBgLeft">
                <form className="appSignUp" onSubmit={handleSignUp}>
                    <h3 className="appSignUpTitle">Utwórz konto</h3>
                    <span className="appLoginError">{errorMsg}</span>
                    <label className="appSignUpLabel">Name
                        <input name="name" type="text" className="appSignUpInput"/>
                    </label>
                    <label className="appSignUpLabel">Email
                        <input name="email" type="email" className="appSignUpInput"/>
                    </label>
                    <label className="appSignUpLabel">Hasło
                        <input name="password" type="password" className="appSignUpInput"/>
                    </label>
                    <span className="appSignUpInfo">Masz już konto?
                            <Link to="/login">Zaloguj się</Link>
                        </span>
                    <button type="submit" className="appSignUpBtn">Utwórz</button>
                </form>
            </div>
            <div className="appSignUpBgRight"/>
        </div>
    );
};

export default AppSignUp