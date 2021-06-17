import {Switch, Route} from "react-router-dom"
import Forums from "./pages/Forums"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import App from "./App"
import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from "react-notifications"
import Register from "./pages/Register";
import Recommendations from "./pages/Recommendations";
import GamesForum from "./pages/GamesForum";
import GeneralForum from "./pages/GeneralForum";

export const Routes = (props) => {

    return (
        <div>
            <NotificationContainer/>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/teammates">
                    <Recommendations />
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
                <Route exact path="/forums/games">
                    <GamesForum />
                </Route>
                <Route exact path="/forums/general">
                    <GeneralForum />
                </Route>
            </Switch>
        </div>
    )
}

export default (Routes)