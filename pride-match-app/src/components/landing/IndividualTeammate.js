import {Component} from "react"
import {Card, Col, Image, Button} from "react-bootstrap"
import sampleUser from "../../assets/SampleUserIcon.png"
import ConfirmAddTeammate from "./ConfirmAddTeammate"
import DeleteTeammate from "./DeleteTeammate"
import {getHobby} from "../../helpers"

export class IndividualTeammate extends Component {
    constructor(props) {
        super(props);
        this.state = { games: ["League of Legends", "MW3", "BattleField", "Rainbow Six Siege"],
            interests: ["Swimming", "Sewing", "Drawing"], twitter: "yuukeyyx", facebook: "yuukeyyx",
        discord: "yuukeyyx#0000", instagram: "yuukeyyx"}
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
                                return getHobby(this.state.games, game, index)
                            })}
                        </Card.Text>
                        <Card.Text className="teammate-text">
                            {this.state.interests.map((interest, index) => {
                                return getHobby(this.state.interests, interest, index)
                            })}
                        </Card.Text>
                        <Card.Text>Discord: {this.state.discord}</Card.Text>
                        <a href={"https://twitter.com/"+this.state.twitter} target="_blank">Twitter </a>
                        <a href={"https://instagram.com/"+this.state.instagram} target="_blank">Instagram </a>
                        <a href={"https://facebook.com/"+this.state.facebook} target="_blank">Facebook </a>
                    </Card.Body>
                    {this.props.type === "teammates"
                        ? <DeleteTeammate teammateId="1"/>
                        : <ConfirmAddTeammate />
                    }
                </Card>
            </Col>
        )
    }
}

export default (IndividualTeammate)