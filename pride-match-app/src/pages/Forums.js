import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import forums from "../assets/forums.png";
import games from "../assets/games.png";
import general from "../assets/general.png";
import {Image} from "react-bootstrap";
import Forum from "../components/forums/Forum"

export class Forums extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={forums} alt="Forums"/>
                <br/>
                <Image src={games} alt="Games"/>
                <Forum type="games"/>
                <br/>
                <Image src={general} alt="General"/>
                <Forum type="general"/>
            </div>
        )
    }
}

export default (Forums);