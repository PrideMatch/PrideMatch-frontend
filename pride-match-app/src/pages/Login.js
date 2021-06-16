import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import { Image } from "react-bootstrap"
import LoginForm from "../components/login/LoginForm";
import logo from "../assets/PrideMatchLogoCropped.png"
import login from "../assets/Login.png"

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loginUsername: "", loginPassword: ""}
    }

    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={logo} alt="Pride Match Logo"/>
                <br/>
                <Image src={login} alt="Login"/>
                <LoginForm />
            </div>
        )
    }
}

export default (Login);