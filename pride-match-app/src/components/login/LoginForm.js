import {Component} from "react";
import { Form, Button, Col, Container, Nav } from "react-bootstrap"
import "./login.css"

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
    }

    handleClick = () => {
        // TODO handle login
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
                                onChange={this.state.loginUsername}
                                placeholder="Enter username"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group id="login-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={this.state.loginPassword}
                                placeholder="Enter password"/>
                        </Form.Group>
                    </Col>
                    <br/>
                    <Button className="colourful-button" onClick={this.handleSubmit}>Login</Button>
                    <br/>
                    <br/>
                    <Nav className="justify-content-center">
                        <Nav.Item className = "reference">
                            <text>Not registered?</text>
                            <Nav.Link href="/register">Click Here!</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Form>
            </Container>
        )
    }
}

export default (LoginForm);