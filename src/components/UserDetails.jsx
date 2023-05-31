import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Button,
    Icon,
    Segment,
    Label,
    Image,
    Header,
    List,
    Loader
} from "semantic-ui-react";

function UserDetails(props) {
    const [state, setState] = useState({
        profile: {},
        repository: [],
        loading: true
    });

    const { uid } = useParams();

    useEffect(() => {
        const getUser = async () => {
            const client_id = process.env.REACT_APP_CLIENT_ID;
            const client_secret = process.env.REACT_APP_CLIENT_SECRET;
            setState({ ...state, loading: true });
            const profileResponse = await fetch(
                `https://api.github.com/users/${uid}?client_id=${client_id}&client_secret=${client_secret}`
            );

            const repoResponse = await fetch(
                `https://api.github.com/users/${uid}/repos?per_page=15&sort=asc&client_id=${client_id}&client_secret=${client_secret}`
            );
            const profile = await profileResponse.json();
            const repos = await repoResponse.json();

            setState({ profile: profile, repository: repos, loading: false });
        };
        getUser();
        //eslint-disable-next-line
    }, [uid]);

    console.log(state);

    return (
        <React.Fragment>
            <Button fluid as={Link} to="/" content="Back To Search Page" icon="arrow left" />

            <Segment.Group horizontal raised>
                <Segment
                    textAlign="center"
                    style={{ width: "40%" }}
                    loading={state.loading}
                >
                    <Image src={state.profile.avatar_url} size="small" circular centered />
                    <Header content={state.profile.name} size="medium" />
                    <Header
                        color="brown"
                        content={`Location : ${state.profile.location}`}
                        size="small"
                        style={{ marginTop: "0px" }}
                    />
                </Segment>

                <Segment style={{ width: "60%" }} loading={state.loading}>
                    <Header content="Bio" />
                    <p>{state.profile.bio}</p>

                    <List>
                        <List.Item icon="user" content={`Github Username : ${state.profile.login}`} />
                        <List.Item icon="twitter" content={`Twitter Username : ${state.profile.twitter_username}`} />
                        <List.Item icon="linkify" content={<a href={state.profile.blog}>Website</a>} />
                    </List>

                    <Button
                        as="a"
                        href={state.profile.html_url}
                        target="_blank"
                        content="Visit Github Profile"
                        color="brown"
                        size="small"
                    />
                </Segment>
            </Segment.Group>
            <Segment textAlign="center" >
                <Label color="purple" size="big" style={{ margin: "5px" }} >
                    <Icon name="github" />
                    Public Repos: {state.profile.public_repos}
                </Label>
                <Label color="black" size="big" style={{ margin: "5px" }}>
                    <Icon name="github alternate" />
                    Public Gists: {state.profile.public_gists}
                </Label>
                <Label color="blue" size="big" style={{ margin: "5px" }}>
                    <Icon name="users" />
                    Followers: {state.profile.followers}
                </Label>
                <Label color="green" size="big" style={{ margin: "5px" }} >
                    <Icon name="user plus" />
                    Following: {state.profile.following}
                </Label>

            </Segment>
            <Segment.Group>
                <Loader active={state.loading} />
                <Segment textAlign="center">
                    <Label color="grey" size="big" style={{ margin: "5px" }}>
                        Popular Repositories of {state.profile.name}
                    </Label>
                </Segment>
                {state.repository &&
                    state.repository.map((repo, i) => (
                        <Segment as="h2" key={i} textAlign="center">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </Segment>
                    ))}
            </Segment.Group>
        </React.Fragment>
    );
}
export default UserDetails;