import React from "react";
import { Grid, Header, Segment, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default function UserList({ users }) {
    return (
        <Grid columns="4" style={{ marginTop: "1em" }}>
            {users &&
                users.map((item, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Segment textAlign="center">
                                <Image src={item.avatar_url} size="small" circular centered />
                                <Header as="h4">{item.login}</Header>
                                <Button fluid content="Click Here" color="teal" as={Link} to={`/${item.login}`} />
                            </Segment>
                        </Grid.Column>
                    );
                })}
        </Grid>
    );
}
