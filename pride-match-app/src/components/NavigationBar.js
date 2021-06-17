import {Component} from "react";
// import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import rainbowLogo from "../assets/PrideMatchRainbow30x30.png"
import prideMatchWords from "../assets/PrideMatchWords.png"
import sampleUser from "../assets/SampleUserIcon.png"
import "./NavigationBar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Login from "../pages/Login"
// Global State
import {Context} from "../store";
import React, {useContext} from "react";

// Google Signin
import socialMediaAuth from '../service/auth'
import { googleProvider, signOutUser } from '../firebase_config/authMethod';

export class NavigationBar extends Component {
    renderUserNav() {
        return (
            <div>
                 {this.props.user.isLoggedIn && 
                  <div id="user-nav">
                  <NavDropdown
                      // title={this.props.name}
                      className="" id="basic-nav-dropdown"  title={this.props.user.name}>
                      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                      <Nav.Link as={Link} to="/friends">Friends</Nav.Link>
                      <Nav.Link as={Link} to="/games">My Games</Nav.Link>
                      <NavDropdown.Divider />
      
                      {/* make this dynamic, depending if user is logged in */}
                      {/* <Nav.Link as={Link} to="/logout">Logout</Nav.Link> */}
                      {/*<a href="#" onClick={this.props.logout}> Logout </a>*/}
                      
                  </NavDropdown>
                  </div>
                 }
            </div>

        )
    };

    renderUserPic() {
        return (
            <Nav.Item>
                <Nav.Link as={Link} to="/profile">
                    <img src={this.props.user.profilePicture} width="30" height="30" alt="Pride Match logo"/>
                </Nav.Link>
            </Nav.Item>
        )
    }

    render() {
        const handleUserLog = async (provider) => {
            if (!(this.props.user.isLoggedIn)) {
                const res = await socialMediaAuth(provider);
                this.props.setState({...this.props.user, 
                                        isLoggedIn: true, 
                                        name: res.displayName,
                                        profilePicture: res.photoURL,
                                        sessionToken: res.refreshToken
                                    })
                console.log(res)
            } else if (this.props.user.isLoggedIn) {
                await signOutUser
                this.props.setState({...this.props.user, 
                                        isLoggedIn: false, 
                                        name: "",
                                        profilePicture: ""                            
                                    })
            }

        }
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
                                <Switch>
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    </Switch>
                                <Nav.Link as={Link} to="/forums">Forums</Nav.Link>
                            </Nav>
                            
                            <Nav>
                                {
                                (this.props.user.isLoggedIn) ? 
                                (<Nav.Link onClick={() => handleUserLog(googleProvider)}>Logout</Nav.Link>)
                                : 
                                // (<Nav.Link onClick={() => handleUserLog(googleProvider)}>Login</Nav.Link>)
                                <Route>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </Route>
                                }
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
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
    console.log(state)

    return <NavigationBar user={state} setState={setState}/>
}

export default (FunctionalNavigationBar)