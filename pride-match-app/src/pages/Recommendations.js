import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import {Image, Row, Button, Col, Container} from "react-bootstrap";
import teammate from "../assets/teammate.png";
import recommendations from "../assets/recommendations.png";
import DisplayTeammates from "../components/landing/DisplayTeammates";
import {renderForumLink} from "../helpers";

// Global State
import { Context, LoginContext, SaveStateToLocal, LoadStateFromLocal } from "../store";
import React, { useContext } from "react";


export class Recommendations extends Component {

    handleRefresh = () => {
        //TODO get updated list of recommendations
    }

    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={teammate} alt="Teammate"/>
                <Image src={recommendations} alt="Recommendations"/>
                <br/>
                {renderForumLink("/teammates", "See All My Teammates", "colourful-button")}
                <Button className="colourful-button" onClick={this.handleRefresh}>Refresh Recommendations</Button>
                <Row className="game-container">
                    {/*TODO make recommendations dynamic*/}
                    {/*note: recommended teammates will come from recommended API call*/}
                    <DisplayTeammates type="recommend"/>
                </Row>
            </div>
        )
    }
}

const FunctionalRecommendations = () => {
    const {state, setState} = useContext(Context);

    if (state) {
        LoadStateFromLocal(setState)
    }

    return (
        <Recommendations state={state} setState={setState}/>
    )
}

export default (FunctionalRecommendations);