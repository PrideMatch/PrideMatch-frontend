import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import myProfile from "../assets/myProfile.png";
import {Container, Image, Row, Col, Card} from "react-bootstrap";
import "../components/profile/profile.css"
import "../App.css"

// Global State
import { Context, LoadStateFromLocal } from "../store";
import React, { useContext } from "react";

export class Profile extends Component {
    render() {
        console.log(this.props.state)
        console.log(this.props.userState)
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={myProfile} alt="My Profile"/>
                <Container fluid className="profile-layout">
                    <div className="info-container">
                        <Row>
                            <div className="profile-header">
                                {this.props.state.profilePicture === "" || !this.props.state.profilePicture
                                    ? <span className="no-display">Could Not Load Profile Picture</span>
                                    : <img className="profile-picture" src={this.props.state.profilePicture}
                                           alt="Profile Picture"/>
                                }
                            </div>
                            <div>
                                <h1 className="profile-name">{this.props.state.name}</h1>
                            </div>
                        </Row>
                        <br/>
                        <Row className="header-container">
                            <h4>Pride</h4>
                        </Row>
                        <Row className="row-container">
                            <Col className="prof-lgbtq-info" lg={3}>
                                <p>Pronouns: She</p>
                            </Col>
                            <Col className="prof-lgbtq-info" lg={3}>
                                <p>Orientation: Heterosexual</p>
                            </Col>
                            <Col className="prof-lgbtq-info" lg={3}>
                                <p>Gender: Cisgender</p>
                            </Col>
                        </Row>
                        <Row className="row-container">
                            <Col className="prof-textarea-about" lg={3}>
                                <p>About Me</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </Col>
                            <Col className="prof-textarea-games" lg={3}>
                                <p>Games I Play</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </Col>
                            <Col className="prof-textarea-interest" lg={3}>
                                <p>My Interests</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="header-container">
                            <h4>Socials</h4>
                        </Row>
                        <Row className="social-container">
                            <Col className="prof-lgbtq-info" lg={2}>
                                <p>Facebook: yuukeyyx</p>
                            </Col>
                            <Col className="prof-lgbtq-info" lg={2}>
                                <p>Instagram: yuukeyyx</p>
                            </Col>
                            <Col className="prof-lgbtq-info" lg={2}>
                                <p>Twitter: yuukeyyx</p>
                            </Col>
                            <Col className="prof-lgbtq-info" lg={2}>
                                <p>Discord: yuukeyyx#0000</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

const FunctionalProfile = () => {
    const {state, setState} = useContext(Context)
    if (state) {
        LoadStateFromLocal(setState)
    }
    return (
        <Profile state={state} setState={setState}/>
    )
}


export default (FunctionalProfile);