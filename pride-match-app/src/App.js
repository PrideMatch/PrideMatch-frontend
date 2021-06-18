import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import {Image, Row } from "react-bootstrap";
import DisplayGames from "./components/landing/DisplayGames"
import "./components/landing/Landing.css"
import React from "react";
import top10games from "./assets/top10games.png";


function App() {
    return (
        <div className="App background">
            <NavigationBar/>
            <Image src={top10games} alt="Top 10 Games"/>
            <h3>Add Search Form?</h3>
            <DisplayGames />
        </div>
    )
}

export default App;
