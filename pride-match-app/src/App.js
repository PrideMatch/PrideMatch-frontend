import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import { Row } from "react-bootstrap";
import GameCard from "./components/landing/GameCard"
import LoL1 from "./assets/LoLGame.jpg";
import valorant from "./assets/valorant.jpg";
import "./components/landing/Landing.css"

function App() {
    const game1 = "League of Legends"
    const game2 = "Valorant"
    const Lol1 = LoL1
    const Lol2 = valorant
    return (
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
    );

}

export default App;
