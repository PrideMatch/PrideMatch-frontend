import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import {Container, Row, Col, Card} from "react-bootstrap";
import GameCard from "./components/landing/GameCard"

function App() {
    const game1 = "Game 1!"
    return (
        <div className="App">
            <NavigationBar/>
            <h1>Add Search Form?</h1>
                <h2>Top 10 Games</h2>
                <Row className="game-container" xs={1} md={3} lg={5}>
                        <Col className="games-padding">
                            <GameCard gameName={game1}/>
                        </Col>
                </Row>
        </div>
    );
}

export default App;
