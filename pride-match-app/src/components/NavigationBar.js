import {Component} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import rainbowLogo from "../assets/PrideMatchRainbow30x30.png"
import prideMatchWords from "../assets/PrideMatchWords.png"
import sampleUserIcon from "../assets/SampleUserIcon.png"
import "./NavigationBar.css"
import {
    Link
} from "react-router-dom";

// Global State
import {Context, LoginContext, SaveStateToLocal} from "../store";
import React, {useContext} from "react";

// Google Signin
import socialMediaAuth from '../service/auth'
import { googleProvider, signOutUser } from '../firebase_config/authMethod';

export class NavigationBar extends Component {
    renderUserNav() {
        return (
            <div>
                {(this.props.user.isLoggedIn && this.props.user.isRegistered)
                    ?
                    <div id="user-nav">
                        <NavDropdown
                            id="basic-nav-dropdown"  title={this.props.user.name}>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
                            <Nav.Link as={Link} to="/teammates">My Teammates</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link onClick={() => this.handleUserLog(googleProvider)}>Logout</Nav.Link>
                        </NavDropdown>
                    </div>
                    : ""
                }
            </div>
        )
    }

    renderUserPic() {
        return (
            <div>
                {(this.props.user.isLoggedIn && this.props.userState.completed)
                    ?
                    <Nav.Item>
                        <Nav.Link as={Link} to="/profile">
                            {this.props.user.profilePicture === ""
                            ? <img src={sampleUserIcon} width="30" height="30" alt="Profile Pic"/>
                            : <img src={this.props.user.profilePicture} width="30" height="30" alt="Profile Pic"/>
                            }
                        </Nav.Link>
                    </Nav.Item>
                    : 
                    <div></div>
                }
            </div>
        )
    }

    handleUserLog = async (provider) => {
        if (!(this.props.user.isLoggedIn)) {
            const res = await socialMediaAuth(provider);
            this.props.setState({...this.props.user,
                isLoggedIn: true,
                isRegistered: false,
                name: res.displayName,
                profilePicture: res.photoURL,
                sessionToken: res.refreshToken
            })
            this.props.setUserState({...this.props.userState,
                completed: true
            })

            window.location.reload();

        } else if (this.props.user.isLoggedIn) {
            await signOutUser
            this.props.setState({...this.props.user,
                isLoggedIn: false,
                email:"",
                isRegistered: false,
                name: "",
                profilePicture: ""
            })
            this.props.setUserState({
                email: "",
                password: "",
                firstTime: true,
                googleFill: false,
                completed: false
            })
            window.location.reload();
        }

        SaveStateToLocal(this.props.user)

    }

    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={rainbowLogo}
                        className="d-inline-block align-top"
                        alt="Pride Match logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={prideMatchWords}
                        height="30"
                        className="d-inline-block align-top"
                        alt="Pride Match logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Games</Nav.Link>
                        <Nav.Link as={Link} to="/recommendations">Teammates</Nav.Link>
                        <Nav.Link as={Link} to="/forums">Forums</Nav.Link>
                    </Nav>
                    <Nav>
                        {(this.props.user.isLoggedIn && this.props.userState.firstTime)
                            ? ""
                            :
                            <Nav>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </Nav>
                        }
                    </Nav>
                    {this.renderUserNav()}
                    {this.renderUserPic()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const FunctionalNavigationBar = () => {
    const {state, setState} = useContext(Context);
    const {userState, setUserState} = useContext(LoginContext);

    return <NavigationBar user={state} setState={setState} userState={userState} setUserState={setUserState}/>
}

export default (FunctionalNavigationBar)