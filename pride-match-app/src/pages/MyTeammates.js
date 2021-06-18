import { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import myTeammates from "../assets/my-teammates.png";
import {Button, Image, Row, Form} from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import DisplayTeammates from "../components/landing/DisplayTeammates";
import { renderForumLink } from "../helpers"
import "../components/landing/Landing.css"
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ConfirmAddFriend from "../components/landing/ConfirmAddFriend";

export class MyTeammates extends Component {
    constructor(props) {
        super();
        this.state = {users: ["user1", "user2", "user3", "user4", "user5", "user5", "user6", "user7"], userToAdd: "",
            menuOpen: false, currUser: ""
        }
    }

    //TODO get list of recommended users and users that are not friends with current user {this.props.user.username}?

    setUserToAdd = (e) => {
        this.setState({userToAdd: e[0], menuOpen: false})
    }

    render() {
        return (
            <div className="App background">
                <NavigationBar/>
                <Image src={myTeammates} alt="My Teammates"/>
                <br/>
                {renderForumLink("/recommendations", "See All Recommendations", "colourful-button")}
                <div className="teammate-typeahead">
                    <Form inline>
                        <Typeahead
                            className="search-typeahead"
                            id={"teammate-typeahead"}
                            options={this.state.users}
                            onChange={this.setUserToAdd}
                            placeholder="Add a new teammate"
                        >
                        </Typeahead>
                        <ConfirmAddFriend />
                    </Form>
                </div>
                <Row className="game-container">
                    <DisplayTeammates type={"teammates"}/>
                </Row>
            </div>
        )
    }
}

export default (MyTeammates)