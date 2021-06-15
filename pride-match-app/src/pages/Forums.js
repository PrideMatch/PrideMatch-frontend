import {Component} from "react";
import NavigationBar from "../components/NavigationBar";

export class Forums extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <h1>Forums</h1>
            </div>
        )
    }
}

export default (Forums);