import React, { useContext } from "react";
import { SingleProjectContext } from "../context/SingleProjectContext";
import { useParams } from "react-router-dom";
import Kanban from "../components/Kanban";
import NoteEditor from "../components/NoteEditor";
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
            <div className="project-view__top-nav">
                <button>Save</button>
                <button>Add column</button>
                <button>Add task</button>
                <h1>{projectContex.project?.name}</h1>
            </div>
            <div className="project-view__container">
                <div className="project-view__container-left">
                    <NoteEditor markdown={projectContex.project?.description} />
                </div>
                <div className="project-view__container-right">
                    <Kanban data={projectContex.columns} />
                </div>
            </div>
        </div>
    );
}

export default ProjectView;
