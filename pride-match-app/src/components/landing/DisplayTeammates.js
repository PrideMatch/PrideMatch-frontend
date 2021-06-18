import {Component} from "react"
import {Row} from "react-bootstrap"
import IndividualTeammate from "./IndividualTeammate";

export class DisplayTeammates extends Component {
    constructor(props) {
        super(props);
        this.state = { arrayToDisplay: ["user1", "user2", "user3", "user4", "user5", "user6", "user7"] }
    }

    componentDidMount() {
        switch(this.props.type) {
            // TODO setState for arraytoDisplay

            case 'games':
                // TODO use {this.props.gameName} to get LIST of teammates who play this game
                break;
            case 'recommend':
                // TODO get LIST of recommended teammates with similar games and interests
                break;
            case 'friends':
                // TODO get LIST of friends
                break;
        }
    }

    render() {
        return (
            <Row>
                {/*TODO map through all teammates*/}
                {/*TODO test different # of interests for card size*/}
                {this.state.arrayToDisplay.map((item, index) => {
                    if (this.state.arrayToDisplay.length === 0) {
                        return "No Teammates to Display"
                    } else {
                        return <IndividualTeammate index={index} />
                    }
                })}
            </Row>
        )
    }
}

export default (DisplayTeammates)