import React, { useContext } from "react";
import { SingleProjectContext } from "../context/SingleProjectContext";
import { useParams } from "react-router-dom";
import Kanban from "../components/Kanban";
import "../styles/project-view.scss";

interface ProjectParams {
    id: string;
}

function ProjectView() {
    const projectContex = useContext(SingleProjectContext);
    const { id }: ProjectParams = useParams();
    projectContex.selectProject(id);

    return (
        <div className="project-view">
            <h1>{projectContex.project?.name}</h1>
            <div className="project-view__container">
                <div className="project-view__container-left"> </div>
                <div className="project-view__container-right">
                    <Kanban data={[]} />
                </div>
            </div>
        </div>
    );
}

export default ProjectView;
