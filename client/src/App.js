import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Forum from "./pages/Forum";
import Team from "./pages/Team";

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/templates" component={Templates} />
                <Route exact path="/templates/:id" component={Templates} />

                <Route exact path="/forum" component={Forum} />
                <Route exact path="/forum/thread/:id" component={Forum} />

                <Route exact path="/meettheteam" component={Team} />
            </Switch>
        </div>
    </Router>
);

export default App;
