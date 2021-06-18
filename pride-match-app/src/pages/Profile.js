import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import myProfile from "../assets/myProfile.png";
import {Container, Image, Row, Col} from "react-bootstrap";
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
                <Container className="profile-layout">
                    <Container as={Row}>
                        {this.props.state.profilePicture === "" || !this.props.state.profilePicture
                            ? <span className="no-display">Could Not Load Profile Picture</span>
                            : <Image className="profile-picture" src={this.props.state.profilePicture} alt="Profile Picture"/>
                        }
                        <Container as={Col}>
                            <h1 className="profile-name">{this.props.state.name}</h1>
                        </Container>
                    </Container>
                    <div className="profile-info">
                        <p>About Me:</p>
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
    }else {
        console.log("no state present")
    }
    return (
        <Profile state={state} setState={setState}/>
    )
}


export default (FunctionalProfile);