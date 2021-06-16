import {Component} from "react";
import {Button, Modal} from "react-bootstrap"
import "./landing.css"
import DisplayTeammates from "./DisplayTeammates"

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
                <Modal size={"lg"} show={this.state.showModal} onHide={this.handleClose} scrollable>
                    <Modal.Header>
                        Find Teammates for {this.props.gameName}
                    </Modal.Header>
                    <Modal.Body>
                        {/*TODO get all users interested in this.props.gameName*/}
                        <DisplayTeammates />
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