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
        let index = this.props.index
        let array = this.props.games
        return (
            <Col className="games-padding">
                <Card className={"game-card"}>
                    <Card.Img src={array[index].image} alt={array[index].name}/>
                    <Card.Body>
                        <Card.Title>{array[index].name}</Card.Title>
                        <Card.Text>{array[index].description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <FindTeammatesModal gameName={array[index].name}/>
                    </Card.Footer>
                </Card>
            </Col>
        )
    }
}

export default (GameCard)