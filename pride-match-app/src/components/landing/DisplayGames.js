import React, {Component} from "react";
import {Row} from "react-bootstrap";
import "./Landing.css"
import GameCard from "./GameCard";
import { games } from "../../sampleData"
import "../../App.css"

export class DisplayGames extends Component {
    constructor(props) {
        super(props)
        this.state = { allGames: games }
    }

    render() {
        return (
            <Row className="game-container" xs={1} md={2} lg={4}>
                {this.state.allGames.length === 0
                ? <span className="no-display">No Games to Display</span>
                : //TODO make API call for games
                    this.state.allGames.map((game, index) => {
                    return <GameCard games={this.state.allGames} key={index} index={index}/>
                    })
                }
            </Row>
        )
    }
}

export default (DisplayGames)