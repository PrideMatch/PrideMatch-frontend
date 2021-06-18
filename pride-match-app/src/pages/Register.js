import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import {Image, Nav} from "react-bootstrap"
import logo from "../assets/PrideMatchLogoCropped.png"
import register from "../assets/Register.png"
import RegisterForm from "../components/register/RegisterForm"
import "../components/register/Register.css"
import  { Redirect } from 'react-router-dom'

// Global State
import { LoginContext } from "../store";
import React, { useContext } from "react";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
    }

    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={logo} alt="Pride Match Logo"/>
                <br/>
                <Image src={register} alt="register"/>
                <br/>
                <RegisterForm />
                <br/>
                <div className="login-label">
                    <label >Already registered?</label>
                    <Nav>
                        <Nav.Item className="reference">
                            <Nav.Link href="/login">Click Here!</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                {this.props.userState.completed ? <Redirect to="/" /> : ""}
            </div>
        )
    }
}

const FunctionalRegister = () => {
    const {userState, setUserState} = useContext(LoginContext);

    return (
        <Register userState={userState}/>
    )
}

export default (FunctionalRegister);