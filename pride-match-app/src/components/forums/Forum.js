import { Component } from "react";
import { Container } from "react-bootstrap";
import "./Forum.css"
import { renderForumPost, renderForumLink} from "../../helpers";

export class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = { allGamePosts:[ "game1", "game2", "game3", "game4"],
            someGamePosts: [ "game1", "game2", "game3"],
            allGeneralPosts: ["general1", "general2", "general3", "general4"],
            someGeneralPosts: ["general1", "general2", "general3"]}
    }

    renderSwitch(type) {
        switch(type) {
            case 'games':
                return <div>
                    {renderForumPost(this.state.someGamePosts, type)}
                    {renderForumLink("/forums/games")}
                </div>
            case 'general':
                return <div>
                    {renderForumPost(this.state.someGeneralPosts, type)}
                    {renderForumLink("/forums/general")}
                </div>
            default:
                break
        }
    }

    render() {
        return (
            <Container className="forum-layout">
                <h4 className="forum-title">Currently Trending...</h4>
                {this.renderSwitch(this.props.type)}
            </Container>
        )
    }
}
export default (Forum)