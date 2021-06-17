import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import IndividualTeammate from "../components/landing/IndividualTeammate";
import {Row} from "react-bootstrap";

export class Recommendations extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <h1>Teammate Recommendations</h1>
                <Row className="game-container" xs={1} md={2} lg={4}>
                    {/*TODO make recommendations dynamic*/}
                    <IndividualTeammate />
                    <IndividualTeammate />
                </Row>
            </div>
        )
    }
}

export default (Recommendations);