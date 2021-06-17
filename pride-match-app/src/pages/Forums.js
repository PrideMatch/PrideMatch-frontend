import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import forums from "../assets/forums.png";
import games from "../assets/games.png";
import general from "../assets/general.png";
import {Image} from "react-bootstrap";

export class Forums extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={forums} alt="Forums"/>
                <br/>
                <Image src={games} alt="Games"/>
                <br/>
                <Image src={general} alt="General"/>
            </div>
        )
    }
}

export default (Forums);