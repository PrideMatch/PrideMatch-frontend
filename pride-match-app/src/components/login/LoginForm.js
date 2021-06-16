import {Component} from "react";
import { Form, Button, Col, Container, Nav } from "react-bootstrap"
import { NotificationManager } from "react-notifications";
import { NOTIFICATION_TIMER } from "../../constants"
import "./Login.css"

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
    }

    handleSubmit = () => {
        // TODO go to landing page
        NotificationManager.success("Welcome back!", "", NOTIFICATION_TIMER)
        NotificationManager.warning("Incorrect username or password", "", NOTIFICATION_TIMER)
    }

    setLoginUsername = (e) => {
        this.setState({loginUsername: e.target.value})
    }

    setLoginPassword = (e) => {
        this.setState({loginPassword: e.target.value})
    }

    render() {
        return (
            <Container className="login-form">
                <Form id="login-form">
                    <Col>
                        <Form.Group id="login-username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={this.setLoginUsername}
                                placeholder="Enter username"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group id="login-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={this.setLoginPassword}
                                placeholder="Enter password"/>
                        </Form.Group>
                    </Col>
                    <br/>
                    <Button className="colourful-button" onClick={this.handleSubmit}>Login</Button>
                    <br/>
                    <br/>
                    <br/>
                    <Nav className="justify-content-center">
                        <Nav.Item className = "reference">
                            <label>Not registered?</label>
                            <Nav.Link href="/register">Click Here!</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Form>
            </Container>
        )
    }
}

export default (LoginForm);