import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import {Image, Nav} from "react-bootstrap"
import logo from "../assets/PrideMatchLogoCropped.png"
import register from "../assets/Register.png"
import RegisterForm from "../components/register/RegisterForm"
import "../components/register/Register.css"

// Google Login
import {googleProvider, signOutUser} from "../firebase_config/authMethod";
import socialMediaAuth from "../service/auth"

// Global State
import { Context } from "../store";
import React, {useContext, useState} from "react";

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
                </div>
        )
    }
}

const FunctionalRegister = () => {
    // const [state, setState] = useContext(Context);
    console.log("context: ", Context);
    console.log("useContext(context): ", useContext(Context));

    return (
        <Register/>
    )

    
}

export default (FunctionalRegister);