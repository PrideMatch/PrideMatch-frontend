import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import myTeammates from "../assets/my-teammates.png";
import {Button, Image, Row} from "react-bootstrap";
import DisplayTeammates from "../components/landing/DisplayTeammates";
import { renderForumLink } from "../helpers"

// Global State
import { Context, LoadStateFromLocal } from "../store";
import React, { useContext } from "react";

export class MyTeammates extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={myTeammates} alt="My Teammates"/>
                <br/>
                {renderForumLink("/recommendations", "See All Recommendations", "colourful-button")}
                <Row className="game-container">
                    <DisplayTeammates type={"teammates"}/>
                </Row>
            </div>
        )
    }
}

const FunctionalMyTeammates = () => {
    const {state, setState} = useContext(Context);
    if (state) {
        LoadStateFromLocal(setState)
        console.log("loaded!")
    } else {
        console.log("no state present")
    }
    return (
        <MyTeammates state={state} setState={setState}/>
    )
}


export default (FunctionalMyTeammates)