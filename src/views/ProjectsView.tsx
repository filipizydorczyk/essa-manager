import React, { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import CreateProjectDialog from "../components/CreateProjectDialog";
import { v4 as uuidv4 } from "uuid";

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
            <button onClick={handleClickOpen}>Dodaj projekt</button>
            <CreateProjectDialog
                isOpen={open}
                handleClose={handleClose}
                handleSubmit={(data) => {
                    projectsContex.addProject({
                        id: uuidv4() as string,
                        name: data.name,
                        description: data.description,
                    });
                }}
            />
        </div>
    );
}

export default ProjectsView;