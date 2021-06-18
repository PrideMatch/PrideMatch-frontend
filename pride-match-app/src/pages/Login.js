import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import { Image, Button, Container } from "react-bootstrap"
import LoginForm from "../components/login/LoginForm";
import logo from "../assets/PrideMatchLogoCropped.png"
import login from "../assets/Login.png"
import  { Redirect } from 'react-router-dom'

// Google Auth
import {googleProvider, signOutUser} from "../firebase_config/authMethod";
import socialMediaAuth from "../service/auth"

// Global State
import { Context, LoginContext } from "../store";
import React, { useContext } from "react";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
    }

    render() {
        const handleUserLog = async (provider) => {
            if (!(this.props.state.isLoggedIn)) {
                const res = await socialMediaAuth(provider);
                this.props.setState({...this.props.state,
                    isLoggedIn: true,
                    name: res.displayName,
                    email: res.email,
                    profilePicture: res.photoURL,
                    sessionToken: res.refreshToken
                })
                this.props.setUserState({...this.props.userState, completed: true})
                
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
                {this.props.state.isLoggedIn ? <Redirect to="/" /> : ""}
            </div>
        )
    }
}

const FunctionalLogin = () => {
    const {state, setState} = useContext(Context);
    const {userState, setUserState} = useContext(LoginContext)

    return (
        <Login state={state} setState={setState} userState={userState} setUserState={setUserState}/>
    )
}

export default (FunctionalLogin);