import React, { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import ProjectsTable from "../components/ProjectsList";
import CreateProjectDialog from "../components/CreateProjectDialog";
import { v4 as uuidv4 } from "uuid";
import { createDeafultCoulmns } from "../types";
import "../styles/projects-view.scss";

function ProjectsView() {
    const projectsContex = useContext(ProjectsContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="projects-view">
            <div className="projects-view__top-nav">
                <button onClick={handleClickOpen}>Dodaj projekt</button>
            </div>

            <CreateProjectDialog
                isOpen={open}
                handleClose={handleClose}
                handleSubmit={(data) => {
                    projectsContex.addProject({
                        id: uuidv4() as string,
                        name: data.name,
                        description: data.description,
                        columns: createDeafultCoulmns(),
                    });
                }}
            />
            <ProjectsTable data={projectsContex.projects} />
        </div>
    );
}

export default ProjectsView;
