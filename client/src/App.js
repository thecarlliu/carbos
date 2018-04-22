import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Templates from "./pages/Templates";
import Forum from "./pages/Forum";
import Team from "./pages/Team";

const App = () => (

    <Router>
        <div>
            <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/docs" component={Docs} />

                    <Route exact path="/templates" component={Templates} />

                    <Route exact path="/forum" component={Forum} />

                    <Route exact path="/team" component={Team} />
                </Switch>

            <Footer />
        </div>
    </Router>

);

export default App;
