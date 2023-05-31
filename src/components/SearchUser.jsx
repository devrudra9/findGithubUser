import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function SearchUser(props) {
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);

    const handleChange = e => {
        setQuery(e.target.value);
        error && setError(false);
    };

    const handleClear = e => {
        e.preventDefault();
        props.onClear();
        setQuery("");
    };

    const handleSubmit = () => {
        if (query === "") {
            setError(true);
        } else {
            props.onSearch(query);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} size="big" >
                <Form.Input
                    error={
                        error && {
                            content: "Please enter username to search",
                            pointing: "below"
                        }
                    }
                    type="text"
                    icon="search"
                    placeholder="Enter Github User here..."
                    value={query}
                    onChange={handleChange}
                />
                <Form.Button fluid content="Search" color="brown" type="submit" size="large" />
                {props.showClear && (
                    <Form.Button
                        size="large"
                        fluid
                        content="Clear"
                        onClick={handleClear}
                        type="button"
                    />
                )}
            </Form>
        </div>
    );
}
export default SearchUser;
