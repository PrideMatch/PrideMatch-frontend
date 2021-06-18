import {Component} from "react"
import {Card, Col, Image} from "react-bootstrap"
import sampleUser from "../../assets/SampleUserIcon.png"
import ConfirmAddFriend from "./ConfirmAddFriend"
import {getHobby} from "../../helpers";

export class IndividualTeammate extends Component {
    constructor(props) {
        super(props);
        this.state = { games: ["League of Legends", "MW3", "BattleField", "Rainbow Six Siege"],
        interests: ["Swimming", "Sewing", "Drawing"]}
    }

    render() {
        return (
            <Col xs={4}>
                <Card className="teammate-card" key={this.props.index}>
                    <Image
                        roundedCircle={true}
                        className="teammate-img"
                        src={sampleUser}
                        alt="User Pic"/>
                    <Card.Title className="teammate-title">User (Ze)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted teammate-text">Orientation</Card.Subtitle>
                    <Card.Body>
                        <Card.Text className="teammate-text">
                            {this.state.games.map((game, index) => {
                                return getHobby(this.state.games, game, index)
                            })}
                        </Card.Text>
                        <Card.Text className="teammate-text">
                            {this.state.interests.map((interest, index) => {
                                return getHobby(this.state.interests, interest, index)
                            })}
                        </Card.Text>
                    </Card.Body>
                    <ConfirmAddFriend />
                </Card>
            </Col>
        )
    }
}

export default (IndividualTeammate)