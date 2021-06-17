import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import { Image, Button, Container } from "react-bootstrap"
import LoginForm from "../components/login/LoginForm";
import logo from "../assets/PrideMatchLogoCropped.png"
import login from "../assets/Login.png"
import {googleProvider, signOutUser} from "../firebase_config/authMethod";
import socialMediaAuth from "../service/auth"

// Global State
import { Context } from "../store";
import React, {useContext, useState} from "react";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
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
            <div className="App background">
                <NavigationBar/>
                <Image src={logo} alt="Pride Match Logo"/>
                <br/>
                <Image src={login} alt="Login"/>
                <br/>
                <Container>
                    <Button
                        className="colourful-button"
                        onClick={() => handleUserLog(googleProvider)}>Login with Google!</Button>
                </Container>
                <br/>
                <br/>
                <LoginForm />
            </div>
        )
    }
}

const FunctionalLogin = () => {
    const {state, setState} = useContext(Context);
    console.log("context: ", Context);
    console.log("useContext(context): ", useContext(Context));
    return (
        <Login user={state} setState={setState}/>
    )
}

export default (FunctionalLogin);