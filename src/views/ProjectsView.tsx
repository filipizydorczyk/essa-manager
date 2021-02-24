import React, { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

function ProjectsView() {
    const projectsContex = useContext(ProjectsContext);

    return (
        <div className="projects-view">
            <button>Dodaj projekt</button>
        </div>
    );
}

export default ProjectsView;
