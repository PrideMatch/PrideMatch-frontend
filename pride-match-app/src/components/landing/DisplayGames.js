import React, {Component} from "react";
import {Row} from "react-bootstrap";
import "./Landing.css"
import GameCard from "./GameCard";
import LoL1 from "../../assets/LoLGame.jpg";
import "../../App.css"
import valorant from "../../assets/valorant.jpg";

export class DisplayGames extends Component {
    constructor(props) {
        super(props)
        this.state = { allGames: [{name: "League of Legends", pic: LoL1}, {name: "Valorant", pic: valorant}] }
    }

    render() {
        return (
            <Row className="game-container" xs={1} md={2} lg={4}>
                {this.state.allGames.length === 0
                ? <span className="no-display">No Games to Display</span>
                : //TODO make API call for games
                    this.state.allGames.map((game, index) => {
                    return <GameCard gameID={"1"} gameName={game.name} gamePic={game.pic}/>
                    })
                }
            </Row>
        )
    }
}

export default (DisplayGames)