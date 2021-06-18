import {Component} from "react";
import {Button, Card, Container, Image} from "react-bootstrap";
import "./notifications.css"
import { NotificationManager } from "react-notifications";
import {NOTIFICATION_TIMER} from "../../constants";

export class NotificationPost extends Component {

    highlightedStyles = {
        color: 'peru'
    }

    handleAccept = () => {
        NotificationManager.success("User added!", "",NOTIFICATION_TIMER)
    }

    handleDelete = () => {
        // TODO make API call to delete this notification and remove from recommendations
    }

    render() {
        return (
            <Container className="notification-post">
                <Card border="light">
                    <Card.Body>
                        <Card.Text className="notification-text" muted>
                            <span style={this.highlightedStyles}> User </span> wants to add you!
                            They also play <span style={this.highlightedStyles}> [enter 3 games]
                            </span> and enjoy <span style={this.highlightedStyles}> [3 interests]</span>.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="notification-footer">
                        <small className="text-muted">Requested on June 18th, 2021</small>
                        <Button className="notification-button" variant="outline-info" onClick={this.handleAccept}>Accept</Button>
                        <Button className="notification-button" variant="outline-danger" onClick={this.handleDecline}>Decline</Button>
                    </Card.Footer>
                </Card>
            </Container>
        )
    }
}
export default (NotificationPost)
