import {Component} from "react"
import {Card, Col, Image, Button} from "react-bootstrap"
import sampleUser from "../../assets/SampleUserIcon.png"
import ConfirmAddTeammate from "./ConfirmAddTeammate"
import DeleteTeammate from "./DeleteTeammate"
import {getHobby} from "../../helpers"

export class IndividualTeammate extends Component {
    constructor(props) {
        super(props);
        this.state = { twitter: "yuukeyyx", facebook: "yuukeyyx", instagram: "yuukeyyx"}
    }

    render() {
        const index = this.props.index
        const array = this.props.array
        return (
            <Col xs={4}>
                <Card className="teammate-card">
                    <Image
                        roundedCircle={true}
                        className="teammate-img"
                        src={sampleUser}
                        alt="User Pic"/>
                    <Card.Title className="teammate-title">{array[index].name} {array[index].display_pronouns
                        ? "(" + array[index].pronouns + ")"
                        : ""
                    }
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted teammate-text">
                        {array[index].display_orientation
                            ? " • " + array[index].orientation
                            : ""
                        }
                        {array[index].display_gender
                            ? " • " + array[index].gender
                            : ""
                        }</Card.Subtitle>
                    <Card.Body>
                        <Card.Text className="teammate-text">
                            {array[index].games.map((game, index) => {
                                return getHobby(array[index].games, game, index)
                            })}
                        </Card.Text>
                        <Card.Text className="teammate-text">
                            {array[index].interests.map((interest, index) => {
                                return getHobby(array[index].interests, interest, index)
                            })}
                        </Card.Text>
                        <Card.Text>Discord: {array[index].name}#0000</Card.Text>
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