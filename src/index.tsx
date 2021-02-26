import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import { ProjectsProvider } from "./context/ProjectsContext";
import { SingleProjectProvider } from "./context/SingleProjectContext";

ReactDOM.render(
    <SingleProjectProvider>
        <ProjectsProvider>
            <App />
        </ProjectsProvider>
    </SingleProjectProvider>,
    document.getElementById("root")
);
