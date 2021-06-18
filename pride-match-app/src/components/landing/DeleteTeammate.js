import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import "./Landing.css"
import "../../App.css"

export class DeleteTeammate extends Component {
    constructor(props) {
        super(props);
        this.state = {showConfirmation: false}
    }

    handleDelete = () => {
        // TODO delete teammate of id {this.props.teammateId}
        this.setState({ showConfirmation: false })
    }

    handleConfirmationDelete = () => {
        this.setState( {showConfirmation: true })
    }

    handleClose = () => {
        this.setState( {showConfirmation: false })
    }

    render() {
        return (
            <div>
                <Button className="delete-teammate" variant="outline-danger" onClick={this.handleConfirmationDelete}>Remove Teammate</Button>
                <Modal show={this.state.showConfirmation} onHide={this.handleClose}>
                    <Modal.Header>Remove Teammate Confirmation</Modal.Header>
                    <Modal.Body>
                        <text>Remove this user form your team?</text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>No</Button>
                        <Button variant="info" onClick={this.handleDelete}>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default (DeleteTeammate)