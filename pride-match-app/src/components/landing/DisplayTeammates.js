import {Component} from "react"
import {Row} from "react-bootstrap"
import IndividualTeammate from "./IndividualTeammate";

export class DisplayTeammates extends Component {
    render() {
        return (
            <Row>
                {/*TODO map through all teammates*/}
                {/*TODO test different # of interests for card size*/}
                <IndividualTeammate index={"1"}/>
                <IndividualTeammate index={"2"}/>
                <IndividualTeammate index={"3"}/>
                <IndividualTeammate index={"4"}/>
                <IndividualTeammate index={"5"}/>
                <IndividualTeammate index={"6"}/>
                <IndividualTeammate index={"7"}/>
                <IndividualTeammate index={"8"}/>
            </Row>
        )
    }
}

export default (DisplayTeammates)