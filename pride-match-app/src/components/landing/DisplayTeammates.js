import {Component} from "react"
import {Row} from "react-bootstrap"
import IndividualTeammate from "./IndividualTeammate";

export class DisplayTeammates extends Component {
    render() {
        return (
            <Row>
                {/*TODO map through all teammates*/}
                <IndividualTeammate />
                <IndividualTeammate />
                <IndividualTeammate />
                <IndividualTeammate />
                <IndividualTeammate />
                <IndividualTeammate />
                <IndividualTeammate />
                <IndividualTeammate />
            </Row>
        )
    }
}

export default (DisplayTeammates)