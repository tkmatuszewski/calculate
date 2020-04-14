import React from 'react';
import './components/App/App.scss'
import AppLoader from "./components/AppLoader/AppLoader";
import AppLogin from "./components/AppLogin/AppLogin";
import AppSignUp from "./components/AppSignUp/AppSignUp";
import AppContributions from "./components/AppContributions/AppContributions";
import {BrowserRouter, Route} from "react-router-dom";
import {AuthProvider} from "./components/Firebase/FirebaseAuth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className={"App"}>
                    <PrivateRoute exact path={"/"} component={AppLoader}/>
                    <Route exact path={"/login"} component={AppLogin}/>
                    <Route exact path={"/register"} component={AppSignUp}/>
                    <Route exact path={"/contributions"} component={AppContributions}/>
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App