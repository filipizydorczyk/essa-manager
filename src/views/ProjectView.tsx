import React, { useContext, useEffect } from "react";
import { SingleProjectContext } from "../context/SingleProjectContext";
import { useParams } from "react-router-dom";
import Kanban from "../components/Kanban";
import NoteEditor from "../components/NoteEditor";
import CreateTaskDialog from "../components/CreateTaskDialog";
import { v4 as uuidv4 } from "uuid";
import "../styles/project-view.scss";

interface ProjectParams {
    id: string;
}

function ProjectView() {
    const projectContex = useContext(SingleProjectContext);
    const [open, setOpen] = React.useState(false);
    const { id }: ProjectParams = useParams();
    useEffect(() => {
        projectContex.selectProject(id);
    });

    return (
        <div className="project-view">
            {projectContex.project != null ? (
                <>
                    <CreateTaskDialog
                        isOpen={open}
                        handleClose={() => setOpen(false)}
                        project={projectContex.project}
                        handleSubmit={(respone) => {
                            projectContex.addTask(respone.column, {
                                id: uuidv4(),
                                name: respone.name,
                                description: respone.description,
                            });
                        }}
                    />
                    <div className="project-view__top-nav">
                        <button>Save</button>
                        <button>Add column</button>
                        <button onClick={() => setOpen(true)}>Add task</button>
                        <h1>{projectContex.project?.name}</h1>
                    </div>
                    <div className="project-view__container">
                        <div className="project-view__container-left">
                            <NoteEditor
                                markdown={projectContex.project?.description}
                            />
                        </div>
                        <div className="project-view__container-right">
                            <Kanban
                                data={projectContex.columns}
                                handleCardMove={console.log}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <h1>Project not found </h1>
            )}
        </div>
    );
}

export default ProjectView;
