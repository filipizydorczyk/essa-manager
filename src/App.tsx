import React from "react";
import ProjectsView from "./views/ProjectsView";
import ProjectView from "./views/ProjectView";
import { HashRouter, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HashRouter basename=".">
                <Route exact path="/" component={ProjectsView} />
                <Route exact path="/project/:id" component={ProjectView} />
            </HashRouter>
        </div>
    );
}

export default App;
