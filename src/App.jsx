import React from "react";
import { Container } from "semantic-ui-react";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import About from "./components/About";
import "semantic-ui-css/semantic.min.css";

function App() {
    return (
        <div className="App">
            {/* <Router> */}
            <Navbar className="main-nav" />
            <Container style={{ paddingTop: "4em" }}>
                <Routes>
                    <Route exact path="/" element={<Users />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/:uid" element={<UserDetails />} />
                </Routes>
            </Container>
            {/* </Router> */}
        </div>
    );
}

export default App;
