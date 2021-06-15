import {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import rainbowLogo from "../assets/Pride Match Rainbow 30x30.png"
import prideMatchWords from "../assets/Pride Match Words.png"

export class NavigationBar extends Component {
    renderUserNav() {
        return (
            <NavDropdown
                // title={this.props.name}
                id="basic-nav-dropdown"  title={"user"}>
                <Nav.Link as={Link} to="/user">Profile</Nav.Link>
                {/*<a href="#" onClick={this.props.logout}> Logout </a>*/}
            </NavDropdown>
        )
    }

    render() {
        return (
                <Navbar bg="light" expand="lg">
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
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default (NavigationBar)