import { Component } from "react";
import { Container } from "react-bootstrap";
import "./Forum.css"
import "../../App.css"
import { renderForumPost, renderForumLink} from "../../helpers";

export class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = { allGamePosts:[ "game1", "game2", "game3", "game4", "game4", "game5", "game6", "game7" ],
            allGeneralPosts: [ "general1", "general2", "general3", "general4", "general5", "general6", "general7" ]}
    }

    renderSwitch(type) {
        var displayNumPosts = 3
        switch(type) {
            case 'allGames':
                return <div>
                    {renderForumPost(this.state.allGamePosts, type)}
                </div>
            case 'allGeneral':
                return <div>
                    {renderForumPost(this.state.allGeneralPosts, type)}
                </div>
            case 'games':
                let newestGamePosts = this.state.allGamePosts.slice(0, displayNumPosts)
                console.log(newestGamePosts)
                return <div>
                    {renderForumPost(newestGamePosts, type)}
                    {this.state.allGamePosts.length === 0
                        ? ""
                        : renderForumLink("/forums/games", "See All Posts", "link-colour")}
                </div>
            case 'general':
                let newestGeneralPosts = this.state.allGeneralPosts.slice(0, displayNumPosts)
                console.log(newestGeneralPosts)
                return <div>
                    {renderForumPost(newestGeneralPosts, type)}
                    {this.state.allGeneralPosts.length === 0
                        ? ""
                        : renderForumLink("/forums/games", "See All Posts", "link-colour")}
                </div>
            default:
                break
        }
    }

    render() {
        return (
            <Container className="forum-layout">
                <h4 className="forum-title">Currently Posted...</h4>
                {this.state.allGamePosts.length === 0
                ? <span className="no-display">No Game Posts to Display</span>  : ""}
                {this.state.allGeneralPosts.length === 0
                    ? <span className="no-display">No General Posts to Display</span>  : ""}
                {this.renderSwitch(this.props.type)}
            </Container>
        )
    }
}
export default (Forum)