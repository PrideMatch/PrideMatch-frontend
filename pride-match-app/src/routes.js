import {Switch, Route} from "react-router-dom"
import Forums from "./pages/Forums"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import App from "./App"
import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from "react-notifications"
import Register from "./pages/Register";

// Global State
import Store from "./store";
import { Context } from "./store";
import React, {useContext, useState} from "react";

export const Routes = (props) => {

    return (
        <div>
            <Store>
                <NotificationContainer/>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route exact path="/forums">
                        <Forums />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Store>
        </div>
    )
}

export default (Routes)