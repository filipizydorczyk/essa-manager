import React, { useContext } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

interface ProjectParams {
    id: string;
}

function ProjectView() {
    const { id }: ProjectParams = useParams();

    return (
        <div className="project-view">
            <p>{id}</p>
        </div>
    );
}

export default ProjectView;
