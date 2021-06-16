import {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import rainbowLogo from "../assets/PrideMatchRainbow30x30.png"
import prideMatchWords from "../assets/PrideMatchWords.png"
import sampleUser from "../assets/SampleUserIcon.png"
import "./NavigationBar.css"

export class NavigationBar extends Component {
    renderUserNav() {
        return (
            <div id="user-nav">
                <NavDropdown
                    // title={this.props.name}
                    className="" id="basic-nav-dropdown"  title={"user"}>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/friends">Friends</Nav.Link>
                    <Nav.Link as={Link} to="/games">My Games</Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    {/*<a href="#" onClick={this.props.logout}> Logout </a>*/}
                </NavDropdown>
            </div>
        )
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
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/forums">Forums</Nav.Link>
                    </Nav>
                    {this.renderUserNav()}
                    <Nav.Item>
                        <Nav.Link as={Link} to="/profile">
                        <img src={sampleUser} width="30" height="30" alt="Pride Match logo"/>
                        </Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default (NavigationBar)