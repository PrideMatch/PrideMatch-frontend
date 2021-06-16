import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { NOTIFICATION_TIMER } from "../../constants"

export class ConfirmAddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = { showConfirmation: false}
    }

    handleSubmit = () => {
        // TODO make API request to add friend
        this.setState({showConfirmation: false})
        NotificationManager.success("user added as friend!", "", NOTIFICATION_TIMER)
    }

    handleConfirmation = () => {
        this.setState({showConfirmation: true})
    }

    handleClose = () => {
        this.setState({showConfirmation: false})
    }

    render() {
        return (
            <div>
                <Button block variant="info" onClick={this.handleConfirmation}>Add Friend</Button>
                <Modal show={this.state.showConfirmation} onHide={this.handleClose}>
                    <Modal.Header>Add Friend Confirmation</Modal.Header>
                    <Modal.Body>
                        <text>Would you like to add this user?</text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>No</Button>
                        <Button variant="info" onClick={this.handleSubmit}>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default (ConfirmAddFriend)