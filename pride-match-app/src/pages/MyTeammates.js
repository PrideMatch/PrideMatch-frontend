import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import myTeammates from "../assets/my-teammates.png";
import {Button, Image, Row} from "react-bootstrap";
import DisplayTeammates from "../components/landing/DisplayTeammates";
import { renderForumLink } from "../helpers"

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

export default (MyTeammates)