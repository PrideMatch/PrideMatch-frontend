import {Component} from "react"
import {Row} from "react-bootstrap"
import "../../App.css"
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
                const gameName = this.props.gameName
                // TODO use gameName to get LIST of teammates who play this game
                break;
            case 'recommend':
                // TODO get LIST of recommended teammates with similar games and interests
                break;
            case 'teammates':
                // TODO get LIST of friends
                break;
        }
    }

    render() {
        return (
            <Row>
                {/*TODO map through all teammates*/}
                {/*TODO test different # of interests for card size*/}
                {this.state.arrayToDisplay.length === 0
                    ? <span className="no-display">No Recommendations to Display</span>
                    : this.state.arrayToDisplay.map((item, index) => {
                    return <IndividualTeammate type={this.props.type} key={index}/>
                    })
                }
            </Row>
        )
    }
}

export default (DisplayTeammates)