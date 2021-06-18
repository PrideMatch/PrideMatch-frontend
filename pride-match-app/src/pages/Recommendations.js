import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import IndividualTeammate from "../components/landing/IndividualTeammate";
import {Image, Row} from "react-bootstrap";
import teammate from "../assets/teammate.png";
import recommendations from "../assets/recommendations.png";
import "../components/recommendations/recommendations.css"
import TeammatesTabs from "../components/recommendations/TeammatesTabs";
import DisplayTeammates from "../components/landing/DisplayTeammates";
export class Recommendations extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={teammate} alt="Teammate"/>
                <Image className="level-off" src={recommendations} alt="Recommendations"/>
                <TeammatesTabs />
                <Row className="game-container">
                    {/*TODO make recommendations dynamic*/}
                    {/*note: recommended teammates will come from recommended API call*/}
                    <DisplayTeammates type="recommend"/>
                </Row>
            </div>
        )
    }
}

export default (Recommendations);