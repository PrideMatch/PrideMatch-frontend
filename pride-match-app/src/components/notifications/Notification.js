import {Component} from "react";
import {Button, Card, Container, Image} from "react-bootstrap";
import "./notifications.css"
import NotificationPost from "./NotificationPost";

export class Notification extends Component {
    render() {
        return (
            <div>
                <NotificationPost key="1"/>
                <NotificationPost key="2"/>
                <NotificationPost key="3"/>
                <NotificationPost key="4"/>
                <NotificationPost key="5"/>
                <NotificationPost key="6"/>
                <NotificationPost key="7"/>
                <NotificationPost key="8"/>
                <NotificationPost key="9"/>
                <NotificationPost key="10"/>
            </div>
        )
    }
}

export default (Notification)