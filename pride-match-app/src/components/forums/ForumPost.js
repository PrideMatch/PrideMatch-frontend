import { Component } from "react";
import { Container, Card, Nav } from "react-bootstrap";
import "./Forum.css"

export class ForumPost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className="forum-post">
                {this.props.type === "games"
                    ? <h5>Game Post Title</h5>
                    : <h5>General Post Title</h5>
                }
                <Card border="light" key={this.props.index}>
                    <small className="text-muted">Posted by: user1</small>
                    <Card.Text muted>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Card.Text>
                </Card>
            </Container>
        )
    }
}
export default (ForumPost)