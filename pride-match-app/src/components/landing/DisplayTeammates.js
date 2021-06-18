import {Component} from "react"
import {Row} from "react-bootstrap"
import IndividualTeammate from "./IndividualTeammate";

export class DisplayTeammates extends Component {
    render() {
        return (
            <Row>
                {/*TODO map through all teammates*/}
                {/*TODO test different # of interests for card size*/}
                <IndividualTeammate key={"1"}/>
                <IndividualTeammate key={"2"}/>
                <IndividualTeammate key={"3"}/>
                <IndividualTeammate key={"4"}/>
                <IndividualTeammate key={"5"}/>
                <IndividualTeammate key={"6"}/>
                <IndividualTeammate key={"7"}/>
                <IndividualTeammate key={"8"}/>
            </Row>
        )
    }
}

export default (DisplayTeammates)