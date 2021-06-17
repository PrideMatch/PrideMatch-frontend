import {Component} from "react";
import NavigationBar from "../../components/NavigationBar";
import forums from "../../assets/forums.png";
import general from "../../assets/general.png";
import {Image} from "react-bootstrap";
import Forum from "../../components/forums/Forum"

export class GeneralForum extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={forums} alt="Forums"/>
                <br/>
                <Image src={general} alt="Games"/>
                <Forum type="allGeneral"/>
            </div>
        )
    }
}

export default (GeneralForum);