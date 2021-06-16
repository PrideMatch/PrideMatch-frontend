import {Component} from "react";
import {Card, Col} from "react-bootstrap";
import "./Landing.css"
import FindTeammatesModal from "./FindTeammatesModal";

export class GameCard extends Component {
    constructor(props) {
        super(props)
        this.state = {showModal: false}
    }

    render() {
        return (
            <Col className="games-padding">
                <Card className={"game-card"}>
                    <Card.Img src={this.props.gamePic} alt="LoL"/>
                    <Card.Body>
                        <Card.Title>{this.props.gameName}</Card.Title>
                        <Card.Text>Game Description</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <FindTeammatesModal gameName={this.props.gameName}/>
                    </Card.Footer>
                </Card>
            </Col>
        )
    }
}

export default (GameCard)