import db, { Tables } from "../lib/db-repository";
import { Project } from "../types";
import React, { useState, createContext, ReactNode } from "react";

interface ProjectsContextProps {
    children: ReactNode;
}

interface ProjectsContextState {
    projects: Array<Project>;
    addProject: (newProject: Project) => void;
}

export const ProjectsContext = createContext<ProjectsContextState>({
    projects: [],
    addProject: () => {},
});

/**
 * Provider for view `ProjectsView`
 * @param props contains only children to render
 */
export const ProjectsProvider = ({ children }: ProjectsContextProps) => {
    const [projects, setProjects] = useState<Array<Project>>(
        db.get(Tables.PROJECTS).value()
    );

    /**
     * Add project to database
     * @param newProject instance of project to be added (with id)
     */
    const addProject = (newProject: Project) => {
        setProjects([...projects, newProject]);
        db.set(Tables.PROJECTS, projects).write();
    };

    return (
        <ProjectsContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectsContext.Provider>
    );
};
