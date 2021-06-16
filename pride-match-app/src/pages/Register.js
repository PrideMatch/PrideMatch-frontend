import {Component} from "react";
import NavigationBar from "../components/NavigationBar";
import { Image } from "react-bootstrap"
import logo from "../assets/PrideMatchLogoCropped.png"
import register from "../assets/Register.png"

export class Register extends Component {
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
                <Image src={register} alt="register"/>
            </div>
        )
    }
}

export default (Register);