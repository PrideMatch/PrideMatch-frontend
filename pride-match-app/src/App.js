import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import {Image, Row } from "react-bootstrap";
import DisplayGames from "./components/landing/DisplayGames"
import "./components/landing/Landing.css"
import React, { useContext, useEffect } from "react";
import topGames from "./assets/topGames.png";

import { Context, LoadStateFromLocal } from "./store";

function App() {
    const {state, setState} = useContext(Context);
    if (!state) {
        LoadStateFromLocal(setState)
    }else {
        console.log("no state present")
    }
    
    return (
        <div className="App background">
            <NavigationBar/>
            <Image src={topGames} alt="Top Games"/>
            <DisplayGames />
        </div>
    )
}

export default App;
