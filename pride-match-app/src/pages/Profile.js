import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import myProfile from "../assets/myProfile.png";
import {Image} from "react-bootstrap";

export class Profile extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={myProfile} alt="My Profile"/>
            </div>
        )
    }
}

export default (Profile);