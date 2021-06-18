import {Component} from "react";
import NavigationBar from "../../components/NavigationBar";
import forums from "../../assets/forums.png";
import games from "../../assets/games.png";
import {Image} from "react-bootstrap";
import Forum from "../../components/forums/Forum"

// Global State
import { Context, LoadStateFromLocal } from "../../store";
import React, { useContext } from "react";

export class GamesForum extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={forums} alt="Forums"/>
                <br/>
                <Image src={games} alt="Games"/>
                <Forum type="allGames"/>
            </div>
        )
    }
}

const FunctionalGamesForum = () => {
    const {state, setState} = useContext(Context);
    if (state) {
        LoadStateFromLocal(setState)
        console.log("loaded!")
    } else {
        console.log("no state present")
    }

    return (
        <GamesForum state={state} setState={setState} />
    )
}


export default (FunctionalGamesForum);