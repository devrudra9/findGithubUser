import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Label } from "semantic-ui-react";

function About() {
    return (
        <Segment compact textAlign="center" color="olive" tertiary>
            <Header as="h1" content="Github User Finder Web App" />
            <h3><strong>Developed By : &nbsp;</strong>
                <Label as={Link} to="https://github.com/devrudra9" target="_blank" color="teal" image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' alt="" />
                    Rudreshwar Baranwal
                </Label>
            </h3>
            <h3>This is the website where you can search Github account of developers all over the world just by their names or usernames both and can view their profiles.</h3>
            <h4>You can see their Github stats, Followers, Popular Repos, Public Gists and much more.</h4>
            <h4>The searchbox of the searchUSer page's auto suggestions are off due to github privacy policy.</h4>
        </Segment>
    );
}
export default About;
