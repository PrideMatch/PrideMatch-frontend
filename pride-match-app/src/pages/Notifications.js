import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import notifications from "../assets/notifications.png";
import {Button, Container, Image} from "react-bootstrap";
import "../components/notifications/notifications.css"
import Notification from "../components/notifications/Notification"

// Global State
import { Context, LoadStateFromLocal } from "../store";
import React, { useContext } from "react";

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

const FunctionalNotifications = () => {
    const {state, setState} = useContext(Context);
    if (state) {
        LoadStateFromLocal(setState)
        console.log("loaded!")
    } else {
        console.log("no state present")
    }
    return (
        <Notifications state={state} setState={setState}/>
    )
}

export default (FunctionalNotifications)