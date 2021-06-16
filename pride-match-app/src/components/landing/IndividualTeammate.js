import {Component} from "react"
import {Card, Col, Image, Button} from "react-bootstrap"
import sampleUser from "../../assets/SampleUserIcon.png"
import ConfirmAddFriend from "./ConfirmAddFriend"

export class IndividualTeammate extends Component {
    constructor(props) {
        super(props);
        this.state = { games: ["League of Legends", "MW3", "BattleField", "Rainbow Six Siege"]}
    }

    colours = [`rgb(255, 204, 204)`, `rgb(255, 229, 204)`, `rgb(255, 255, 204)`, `rgb(185, 238, 181)`,
        `rgb(204, 229, 255)`, `rgb(204, 204, 255)`];
    getColour = () => this.colours[Math.floor(Math.random() * this.colours.length)];

    singleInterest(game) {
        return <span style={{backgroundColor: this.getColour(),
            borderRadius: '5px',
            padding: '2px'}}>{game} </span>
    }

    multipleInterest(game) {
        return <span style={{backgroundColor: this.getColour(),
            borderRadius: '5px',
            padding: '2px'}}>{game} • </span>
    }

    render() {
        return (
            <Col xs={4}>
                <Card className="teammate-card">
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
                                if (this.state.games.length === 0) {
                                    return "No interests"
                                } else if (this.state.games.length === 1) {
                                    return this.singleInterest(game)
                                } else {
                                    if (index === this.state.games.length-1) {
                                        return this.singleInterest(game)
                                    } else {
                                        return this.multipleInterest(game)
                                    }
                                }
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