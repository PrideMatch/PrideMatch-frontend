import {Component} from "react"
import {Row} from "react-bootstrap"
import "../../App.css"
import IndividualTeammate from "./IndividualTeammate";
import { teammates } from "../../sampleData"

export class DisplayTeammates extends Component {
    constructor(props) {
        super(props);
        this.state = { arrayToDisplay: teammates }
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
                    ? <span className="no-display">No Teammates to Display</span>
                    : this.state.arrayToDisplay.map((item, index) => {
                    return <IndividualTeammate array={this.state.arrayToDisplay} type={this.props.type} index={index}
                                               key={index}/>
                    })
                }
            </Row>
        )
    }
}

export default (DisplayTeammates)