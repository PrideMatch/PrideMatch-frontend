import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import { Row } from "react-bootstrap";
import GameCard from "./components/landing/GameCard"
import LoL1 from "./assets/LoLGame.jpg";
import valorant from "./assets/valorant.jpg";
import "./components/landing/Landing.css"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Forums from "./pages/forums/Forums"
import Profile from "./pages/Profile"
import Recommendations from "./pages/Recommendations"
import GamesForum from "./pages/forums/GamesForum";
import GeneralForum from "./pages/forums/GeneralForum";
import React from "react";


function App() {
    const game1 = "League of Legends"
    const game2 = "Valorant"
    const Lol1 = LoL1
    const Lol2 = valorant

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/forums">
                    <Forums />
                </Route>
                <Route exact path="/teammates">
                    <Recommendations />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/forums/games">
                    <GamesForum />
                </Route>
                <Route exact path="/forums/general">
                    <GeneralForum />
                </Route>
                <Route exact path="/">
                    <div className="App background">
                        <NavigationBar/>
                        <h1>Add Search Form?</h1>
                        <h2>Top 10 Games</h2>
                        <Row className="game-container" xs={1} md={2} lg={4}>
                            {/*TODO make games dynamic*/}
                            <GameCard gameID={"1"} gameName={game1} gamePic={Lol1}/>
                            <GameCard gameID={"2"} gameName={game2} gamePic={Lol2}/>
                        </Row>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
