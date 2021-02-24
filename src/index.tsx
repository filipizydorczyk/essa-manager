import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import { ProjectsProvider } from "./context/ProjectsContext";

ReactDOM.render(
    <React.StrictMode>
        <ProjectsProvider>
            <App />
        </ProjectsProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
