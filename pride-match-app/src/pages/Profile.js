import {Component} from "react";
import NavigationBar from "../components/NavigationBar";

export class Profile extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <h1>Profile</h1>
            </div>
        )
    }
}

export default (Profile);