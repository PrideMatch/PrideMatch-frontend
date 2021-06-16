import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import { Image, Button, Container } from "react-bootstrap"
import LoginForm from "../components/login/LoginForm";
import logo from "../assets/PrideMatchLogoCropped.png"
import login from "../assets/Login.png"
import {googleProvider} from "../firebase_config/authMethod";
import socialMediaAuth from "../service/auth"

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
    }

    render() {
        const handleOnClick = async (provider) => {
            const res = await socialMediaAuth(provider);
            console.log(res);
        }
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={logo} alt="Pride Match Logo"/>
                <br/>
                <Image src={login} alt="Login"/>
                <br/>
                <Container>
                    <Button
                        className="colourful-button"
                        onClick={() => handleOnClick(googleProvider)}>Login with Google!</Button>
                </Container>
                <br/>
                <br/>
                <LoginForm />
            </div>
        )
    }
}

export default (Login);