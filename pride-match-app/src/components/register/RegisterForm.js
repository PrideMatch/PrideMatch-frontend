import {Component} from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap"
import { NotificationManager } from "react-notifications";
import { NOTIFICATION_TIMER, ORIENTATION_LIST, GENDER_LIST } from "../../constants"
import "../login/Login.css"

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { orientationList: ORIENTATION_LIST, genderList: GENDER_LIST, username: "", password: "",
            confirmPassword: "", email: "", confirmEmail: "", regOrientation: "", gender: "", displayOrientation: false,
            displayGender: false, games: [], interests: [], discord: "", twitter: "", instagram: ""}
    }

    handleSubmit = () => {
        // TODO go to landing page
        NotificationManager.success("Welcome back!", "", NOTIFICATION_TIMER)
        NotificationManager.warning("Incorrect username or password", "", NOTIFICATION_TIMER)
    }

    setUsername = (e) => {
        this.setState({username: e.target.value})
    }

    setEmail = (e) => {
        this.setState({email: e.target.value})
    }

    setConfirmEmail = (e) => {
        this.setState({confirmEmail: e.target.value})
    }

    setPassword = (e) => {
        this.setState({password: e.target.value})
    }

    setConfirmPassword = (e) => {
        this.setState({confirmPassword: e.target.value})
    }

    setGender = (e) => {
        this.setState({gender: e.target.value})
    }

    handleGenderDisplay = () => {
        let prevGenderDisplay = this.state.displayGender
        this.setState({displayGender: !prevGenderDisplay})
    }


    setOrientation = (e) => {
        this.setState({regOrientation: e.target.value})
    }

    handleOrientationDisplay = () => {
        let prevOrientationDisplay = this.state.displayOrientation
        this.setState({displayOrientation: !prevOrientationDisplay})
    }

    setGames = (e) => {
        this.setState({games: e.target.value})
    }

    setInterests = (e) => {
        this.setState({interests: e.target.value})
    }

    setDiscord = (e) => {
        this.setState({discord: e.target.value})
    }

    setTwitter = (e) => {
        this.setState({twitter: e.target.value})
    }

    setInstagram = (e) => {
        this.setState({instagram: e.target.value})
    }


    render() {
        return (
            <Container className="register-form">
                <Form id="register-form">
                    <Row>
                        <Col>
                            <Form.Text muted>* required</Form.Text>
                            <Form.Group id="register-username">
                                <Form.Label>*Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={this.setUsername}
                                    placeholder="Enter username"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group id="register-email">
                                <Form.Label>*Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={this.setEmail}
                                    placeholder="Enter email"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group id="register-password">
                                <Form.Label>*Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    onChange={this.setPassword}
                                    placeholder="Enter password"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group id="register-confirm-email">
                                <Form.Label>*Confirm Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={this.setConfirmEmail}
                                    placeholder="Confirm email"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group id="register-confirm-password">
                                <Form.Label>*Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    onChange={this.setConfirmPassword}
                                    placeholder="Confirm password"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group id="register-gender">
                                <Form.Label>*Gender</Form.Label>
                                <Form.Control
                                    onChange={this.setGender}
                                    as="select"
                                    single>
                                    <option defaultValue="N/A" disabled>Choose...</option>
                                    {this.state.genderList.map((gender, index) => {
                                        return <option key={index} value={gender}>{gender}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Check
                                onChange={this.handleGenderDisplay}
                                type="switch"
                                id="gender-switch"
                                label="Display on Profile"
                            />
                        </Col>
                        <Col>
                            <Form.Group id="register-orientation">
                                <Form.Label>*Orientation</Form.Label>
                                <Form.Control
                                    onChange={this.setOrientation}
                                    as="select"
                                    single>
                                    <option defaultValue="N/A" disabled>Choose...</option>
                                    {this.state.orientationList.map((orient, index) => {
                                        return <option key={index} value={orient}>{orient}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Check
                                onChange={this.handleOrientationDisplay}
                                type="switch"
                                id="orientation-switch"
                                label="Display on Profile"
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Group id="register-games">
                                <Form.Label>*Games I Play</Form.Label>
                                <Form.Control
                                    rows={2}
                                    as="textarea"
                                    onChange={this.setGames}
                                    placeholder="Enter the game(s) you play"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group id="register-interests">
                                <Form.Label>My Interests</Form.Label>
                                <Form.Control
                                    rows={2}
                                    as="textarea"
                                    onChange={this.setInterests}
                                    placeholder="Enter your interest(s)"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group id="register-discord">
                                <Form.Label>Discord</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={this.setDiscord}
                                    placeholder="ex: discordTag#0000"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group id="register-twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={this.setTwitter}
                                    placeholder="Enter Twitter username"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group id="register-discord">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={this.setInstagram}
                                    placeholder="Enter Instagram username"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload Image for Profile Picture</Form.Label>
                                <Form.Control type="file"/>
                                <Form.Text muted>*must be in PNG or JPG</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <br/>
                    <Button className="colourful-button" onClick={this.handleSubmit}>Register</Button>
                </Form>
            </Container>
        )
    }
}

export default (RegisterForm);