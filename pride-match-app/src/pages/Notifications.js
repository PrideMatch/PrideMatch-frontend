import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import notifications from "../assets/notifications.png";
import {Button, Container, Image} from "react-bootstrap";
import "../components/notifications/notifications.css"
import Notification from "../components/notifications/Notification"

export class Notifications extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={notifications} alt="Notifications"/>
                <br/>
                <Container className="notification-layout">
                    <Notification />
                </Container>
            </div>
        )
    }
}

export default (Notifications)