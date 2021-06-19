import { Component } from "react";
import { Container } from "react-bootstrap";
import "./Forum.css"
import "../../App.css"
import { renderForumPost, renderForumLink} from "../../helpers";
import { gameForums } from "../../sampleGameForumData"
import { generalForums } from "../../sampleGeneralForumData"

export class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = { allGamePosts: gameForums, allGeneralPosts: generalForums}
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
                return <div>
                    {renderForumPost(newestGamePosts, type)}
                    {this.state.allGamePosts.length === 0
                        ? ""
                        : renderForumLink("/forums/games", "See All Posts", "link-colour")}
                </div>
            case 'general':
                let newestGeneralPosts = this.state.allGeneralPosts.slice(0, displayNumPosts)
                return <div>
                    {renderForumPost(newestGeneralPosts, type)}
                    {this.state.allGeneralPosts.length === 0
                        ? ""
                        : renderForumLink("/forums/general", "See All Posts", "link-colour")}
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