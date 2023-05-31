import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Icon, Segment} from "semantic-ui-react";

function Navbar() {
    return (
        <Segment inverted attached size='maxi'>
            <Menu inverted secondary>
                <Menu.Item as={Link} to="/" style={{ padding: "0px" }}>
                    <Menu.Header as="h1">
                        finD githuB useR
                    </Menu.Header>
                </Menu.Item>

                <Menu.Item as={Link} to="https://github.com/devrudra9" target="_blank" position="right" primary>
                    <Icon name="github" />
                    devrudra9
                </Menu.Item>

                <Menu.Item as={NavLink} to="/about"style={{border: "1px dashed white", borderRadius: "10px", padding:"8px"}}>
                    <Icon name="info" color="blue"/>
                </Menu.Item>
            </Menu>
        </Segment>
    )
}
export default Navbar;
