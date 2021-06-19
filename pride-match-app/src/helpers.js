import ForumPost from "./components/forums/ForumPost";
import {Nav} from "react-bootstrap";
import axios from "axios";

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
            return <ForumPost post={post} index={index} type={type} key={index}/>
        }
    })
}

export function renderForumLink(path, title, className) {
    return <Nav className="justify-content-center">
        <Nav.Item>
            <Nav.Link className={className} href={path}>{title}</Nav.Link>
        </Nav.Item>
    </Nav>
}

export async function sendRegistrationPost(registrationInfo) {

    try {
        const res = await axios.post(
            "http://localhost:5000/register",
            registrationInfo
        )
        return res

    } catch (err) {
        console.log(err) 
        // add proper http error codes
    }

}