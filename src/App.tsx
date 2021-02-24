import React from "react";
import ProjectsView from "./views/ProjectsView";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={ProjectsView} />
            </Router>
        </div>
    );
}

export default App;
