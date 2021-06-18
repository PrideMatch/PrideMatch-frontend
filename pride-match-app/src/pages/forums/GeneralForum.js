import {Component} from "react";
import NavigationBar from "../../components/NavigationBar";
import forums from "../../assets/forums.png";
import general from "../../assets/general.png"
import {Image, Nav} from "react-bootstrap";
import Forum from "../../components/forums/Forum"

// Global State
import { Context, LoadStateFromLocal } from "../../store";
import React, { useContext } from "react";

export class GeneralForum extends Component {
    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={forums} alt="Forums"/>
                <br/>
                <Image src={general} alt="General"/>
                <Forum type="allGeneral"/>
            </div>
        )
    }
}

const FunctionalGeneralForum = () => {
    const {state, setState} = useContext(Context);
    if (state) {
        LoadStateFromLocal(setState)
        console.log("loaded!")
    } else {
        console.log("no state present")
    }
    return (
        <GeneralForum state={state} setState={setState} />
    )
}

export default (FunctionalGeneralForum);