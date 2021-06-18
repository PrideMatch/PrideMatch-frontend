import {Component} from "react";
import "./notifications.css"
import "../landing/Landing.css"
import NotificationPost from "./NotificationPost";

export class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {allNotifications: ["notif1", "notif2", "notif3", "notif4", "notif5", "notif6"]}
    }

    render() {
        return (
            <div>
                {this.state.allNotifications.length === 0
                    ? <span className="no-display">No Notifications to Display</span>
                    : this.state.allNotifications.map((notif, index) => {
                        return <NotificationPost key={index}/>
                    })
                }
            </div>
        )
    }
}

export default (Notification)