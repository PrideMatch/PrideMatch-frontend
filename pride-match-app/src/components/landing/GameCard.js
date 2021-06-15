import {Component} from "react";
import {Card} from "react-bootstrap";

export class GameCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Card>
                <Card.Title>{this.props.gameName}</Card.Title>
            </Card>
        )
    }
}

export default (GameCard)