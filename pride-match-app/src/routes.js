import {Switch, Route} from "react-router-dom"
import Forums from "./pages/Forums"
import App from "./App"

export const Routes = (props) => {

    return (
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/forums">
                <Forums />
            </Route>
        </Switch>
    )
}

export default (Routes)