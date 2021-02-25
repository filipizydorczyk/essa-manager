import React from "react";
import ProjectsView from "./views/ProjectsView";
import ProjectView from "./views/ProjectView";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={ProjectsView} />
                <Route exact path="/project/:id" component={ProjectView} />
            </Router>
        </div>
    );
}

export default App;
