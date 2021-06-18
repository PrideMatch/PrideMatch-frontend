import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import {Image, Row, Button} from "react-bootstrap";
import teammate from "../assets/teammate.png";
import recommendations from "../assets/recommendations.png";
import "../components/recommendations/recommendations.css"
import DisplayTeammates from "../components/landing/DisplayTeammates";
export class Recommendations extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={teammate} alt="Teammate"/>
                <Image className="level-off" src={recommendations} alt="Recommendations"/>
                <br/>
                <Button className="colourful-button" variant="link">View All My Teammates</Button>
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