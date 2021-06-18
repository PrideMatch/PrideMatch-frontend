import {Component} from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap"
import { NotificationManager } from "react-notifications"; // commented out for now
import { NOTIFICATION_TIMER, ORIENTATION_LIST, GENDER_LIST, PRONOUNS_LIST } from "../../constants" // commented out for now
import "../login/Login.css"
import { sendRegistrationPost } from "../../helpers"

// Google Login
import {googleProvider, signOutUser} from "../../firebase_config/authMethod";
import socialMediaAuth from "../../service/auth"

// Global State
import { Context, LoginContext, LoadStateFromLocal, SaveStateToLocal } from "../../store";
import React, { useContext } from "react";

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            confirmEmail: "",
            orientation: ORIENTATION_LIST[0],
            age: "",
            pronouns: PRONOUNS_LIST[0],
            gender: GENDER_LIST[0],
            display_pronouns: false,
            display_orientation: false,
            display_gender: false,
            games: "",
            interests: "",
            discord_id: "",
            twitter: "",
            instagram: "",
            facebook: "",
            about_me: ""

        }
        this.listStates = {
            orientationList: ORIENTATION_LIST,
            genderList: GENDER_LIST,
            pronounsList: PRONOUNS_LIST
        }
    }

    handleSubmit = () => {

        let requiredStates = [this.state.username, this.state.password, this.state.confirmPassword, this.state.email,
            this.state.confirmEmail,this.state.reg_orientation, this.state.age, this.state.pronouns, this.state.gender]
        if (requiredStates.includes("") || this.state.games.length === 0) {
            NotificationManager.warning("Please fill out all required (*) information!")
        } else if (this.state.email.toLowerCase() !== this.state.confirmEmail.toLowerCase()) {
            NotificationManager.warning("Emails do not match!", "", NOTIFICATION_TIMER)
        } else if (this.state.password.toLowerCase() !== this.state.confirmPassword.toLowerCase()) {
            NotificationManager.warning("Passwords do not match!", "", NOTIFICATION_TIMER)
        } else {

            let registrationFormatted = {
                "username": this.state.username, 
                "password": this.state.password,
                "email": this.state.email,
                "gender": this.state.gender,
                "age": this.state.age,
                "orientation": this.state.reg_orientation,
                "pronouns": this.state.pronouns,
                "about_me": this.state.about_me,
                "display_orientation": this.state.display_orientation,
                "display_gender": this.state.display_gender,
                "display_pronouns": this.state.display_pronouns,
                "socials": 
                    {
                        "facebook": this.state.facebook,
                        "instagram": this.state.instagram,
                        "twitter": this.state.twitter,
                        "discord_id": this.state.discord_id
                    },
                "interests": this.state.interests.split(',').map(interest => interest.toLowerCase()),
                "games": this.state.games.split(',').map(game => game.toLowerCase())
                
            }
            // TODO change this.props.state's profilePicture and sessionToken
            this.props.setState({
                ...this.props.state,
                isLoggedIn: true,
                name: this.state.username,
                email: this.state.email
            })
            this.props.setUserState({...this.props.userState, completed: true})
            NotificationManager.success("Welcome to Pride Match, " + this.state.username + "!", "", NOTIFICATION_TIMER)
            sendRegistrationPost(registrationFormatted)
        }
        SaveStateToLocal(this.props.state)
        // console.log(sendRegistrationPost(this.props.state))
    }

    handleGoogleAutofill = async (provider) => {
        if (!(this.props.state.isLoggedIn)) {
            const res = await socialMediaAuth(provider);
            this.props.setState({...this.props.state,
                isLoggedIn: true,
                isRegistered: true,
                name: res.displayName,
                email: res.email,
                profilePicture: res.photoURL,
                sessionToken: res.refreshToken
            })
            this.setState({username: res.displayName, email: res.email, confirmEmail: res.email})

            this.props.setUserState({...this.props.userState,
                googleFill: true})

        } else if (this.props.state.isLoggedIn) {
            await signOutUser
            this.props.setState({...this.props.state,
                isLoggedIn: false,
                name: "",
                profilePicture: "",
                email: ""
            })
        }
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

    setAge = (e) => {
        this.setState({age: e.target.value})
    }

    setPronouns = (e) => {
        this.setState({pronouns: e.target.value})
    }

    handlePronounsDisplay = (e) => {
        let prevPronounsDisplay = this.state.displayy_pronouns
        this.setState({display_gender: !prevPronounsDisplay})
    }

    setGender = (e) => {
        this.setState({gender: e.target.value})
    }

    handleGenderDisplay = () => {
        let prevGenderDisplay = this.state.display_gender
        this.setState({display_gender: !prevGenderDisplay})
    }

    setOrientation = (e) => {
        this.setState({regOrientation: e.target.value})
    }

    handleOrientationDisplay = () => {
        let prevOrientationDisplay = this.state.display_orientation
        this.setState({display_orientation: !prevOrientationDisplay})
    }

    setGames = (e) => {
        this.setState({games: e.target.value})
    }

    setInterests = (e) => {
        this.setState({interests: e.target.value})
    }

    setDiscord = (e) => {
        this.setState({discord_id: e.target.value})
    }

    setTwitter = (e) => {
        this.setState({twitter: e.target.value})
    }

    setInstagram = (e) => {
        this.setState({instagram: e.target.value})
    }

    setFacebook = (e) => {
        this.setState({facebook: e.target.value})
    }

    setAboutMe = (e) => {
        this.setState({about_me: e.target.value})
    }
    render() {
        return (
            <div>
                {this.props.userState.googleFill
                    ? ""
                    :
                    <Button
                        className="colourful-button"
                        onClick={() => this.handleGoogleAutofill(googleProvider)}>Register with Google</Button>
                }
                <Container className="register-form">
                    <Form id="register-form">
                        <Row>
                            <Col>
                                <h3>Or... Register with Pride Match</h3>
                                <Form.Text muted>* required</Form.Text>
                                <Form.Group id="register-username">
                                    <Form.Label>*Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={this.setUsername}
                                        placeholder="Enter username"
                                        value={this.state.username}/>
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
                                        placeholder="Enter email"
                                        value={this.state.email}/>
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
                                        placeholder="Confirm email"
                                        value={this.state.confirmEmail}/>
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
                                <Form.Group id="register-email">
                                    <Form.Label>*Age</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={this.setAge}
                                        placeholder="Enter age"
                                        value={this.state.age}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group id="register-gender">
                                    <Form.Label>*Pronouns</Form.Label>
                                    <Form.Control
                                        onChange={this.setPronouns}
                                        as="select"
                                        single>
                                        <option defaultValue="N/A" disabled>Choose...</option>
                                        {this.listStates.pronounsList.map((pronouns, index) => {
                                            return <option key={index} value={pronouns}>{pronouns}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Check
                                    onChange={this.handlePronounsDisplay}
                                    type="switch"
                                    id="pronouns-switch"
                                    label="Display on Profile"
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group id="register-gender">
                                    <Form.Label>*Gender</Form.Label>
                                    <Form.Control
                                        onChange={this.setGender}
                                        as="select"
                                        single>
                                        <option defaultValue="N/A" disabled>Choose...</option>
                                        {this.listStates.genderList.map((gender, index) => {
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
                                        {this.listStates.orientationList.map((orient, index) => {
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
                                    <Form.Text muted>Please separate games with commas</Form.Text>
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
                                    <Form.Text muted>Please separate interests with commas</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group id="register-interests">
                                    <Form.Label>About Me</Form.Label>
                                    <Form.Control
                                        rows={2}
                                        as="textarea"
                                        onChange={this.setAboutMe}
                                        placeholder="Add anything extra!"/>
                                    <Form.Text muted>Max 255 Characters</Form.Text>
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
                                <Form.Group id="register-discord">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={this.setFacebook}
                                        placeholder="Enter Facebook username"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
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
            </div>
        )
    }
}

const FunctionalRegisterForm = () => {
    const {state, setState} = useContext(Context)
    const {userState, setUserState} = useContext(LoginContext)

    if (state) {
        LoadStateFromLocal(setState)
    }

    return (
        <RegisterForm userState={userState} setUserState={setUserState} state={state} setState={setState}/>
    )
}

export default (FunctionalRegisterForm);