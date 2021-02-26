import React, { useContext } from "react";
import { SingleProjectContext } from "../context/SingleProjectContext";
import { useParams } from "react-router-dom";

interface ProjectParams {
    id: string;
}

function ProjectView() {
    const projectContex = useContext(SingleProjectContext);
    const { id }: ProjectParams = useParams();
    projectContex.selectProject(id);

    return (
        <div className="project-view">
            <p>{projectContex.project?.name}</p>
        </div>
    );
}

export default ProjectView;
