import { Component } from "react";
import { Container } from "react-bootstrap";
import "./Forum.css"
import { renderForumPost, renderForumLink} from "../../helpers";

export class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = { allGamePosts:[ "game1", "game2", "game3", "game4", "game4", "game5", "game6", "game7"],
            allGeneralPosts: ["general1", "general2", "general3", "general4"],
            someGeneralPosts: ["general1", "general2", "general3"]}
    }

    renderSwitch(type) {
        var displayNumPosts = 3
        switch(type) {
            case 'allGames':
                return <div>
                    {renderForumPost(this.state.allGamePosts, type)}
                </div>
            case 'general':
                return <div>
                    {renderForumPost(this.state.someGeneralPosts, type)}
                    {renderForumLink("/forums/general", "See All Posts", "link-colour")}
                </div>
            case 'games':
                let newestGamePosts = this.state.allGamePosts.slice(0, displayNumPosts)
                console.log(newestGamePosts)
                return <div>
                    {renderForumPost(newestGamePosts, type)}
                    {renderForumLink("/forums/games", "See All Posts", "link-colour")}
                </div>
            default:
                break
        }
    }

    render() {
        return (
            <Container className="forum-layout">
                <h4 className="forum-title">Currently Posted...</h4>
                {this.renderSwitch(this.props.type)}
            </Container>
        )
    }
}
export default (Forum)