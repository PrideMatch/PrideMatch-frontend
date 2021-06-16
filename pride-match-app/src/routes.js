import {Switch, Route} from "react-router-dom"
import Forums from "./pages/Forums"
import Profile from "./pages/Profile"
import App from "./App"
import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from "react-notifications"

export const Routes = (props) => {

    return (
        <div>
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
            </Switch>
        </div>
    )
}

export default (Routes)