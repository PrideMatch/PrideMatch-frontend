import ForumPost from "./components/forums/ForumPost";
import {Nav} from "react-bootstrap";

export function getColour() {
    const colours = [`rgb(255, 204, 204)`, `rgb(255, 229, 204)`, `rgb(255, 255, 204)`, `rgb(185, 238, 181)`,
        `rgb(204, 229, 255)`, `rgb(204, 204, 255)`];
    return colours[Math.floor(Math.random() * colours.length)]
}

export function getHobby(array, hobby, index) {
    if (array.length === 0) {
        return "No interests"
    } else if (array.length === 1) {
        return singleInterest(hobby)
    } else {
        if (index === array.length-1) {
            return singleInterest(hobby)
        } else {
            return multipleInterest(hobby)
        }
    }
}

export function singleInterest(hobby, index) {
    return <span key={index} style={{backgroundColor: getColour(),
        borderRadius: '5px',
        padding: '2px'}}>{hobby} </span>
}

export function multipleInterest(hobby, index) {
    return <span key={index} style={{backgroundColor: getColour(),
        borderRadius: '5px',
        padding: '2px'}}>{hobby} • </span>
}

export function renderForumPost(array, type) {
    return array.map((post, index) => {
        if (array.length === 0) {
            return ""
        } else {
            return <ForumPost type={type} post={post} index={index}/>
        }
    })
}

export function renderForumLink(path) {
    return <Nav className="justify-content-center">
        <Nav.Item>
            <Nav.Link className="link-colour" href={path}>See All Posts</Nav.Link>
        </Nav.Item>
    </Nav>
}