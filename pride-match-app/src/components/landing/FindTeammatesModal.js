import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import "./landing.css"

export class FindTeammatesModal extends Component {
    constructor(props) {
        super(props)
        this.state = {showModal: false}
    }

    handleFind = () => {
        this.setState({showModal: true})
    }

    handleClose = () => {
        this.setState({showModal: false})
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleFind}>Find Teammates!</Button>
                <Modal size={"lg"} show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Title>
                        Find Teammates for {this.props.gameName}
                    </Modal.Title>
                    <Modal.Body>
                        User1
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default (FindTeammatesModal)