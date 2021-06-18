import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import myProfile from "../assets/myProfile.png";
import {Image} from "react-bootstrap";

// Global State
import { Context, LoadStateFromLocal } from "../store";
import React, { useContext } from "react";

export class Profile extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={myProfile} alt="My Profile"/>
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