import db, { Tables } from "../lib/db-repository";
import { Project, Column } from "../types";
import React, { useState, createContext, ReactNode } from "react";

interface SingleProjectContextProps {
    children: ReactNode;
}

interface SingleProjectContextState {
    project: Project | null;
    columns: Array<Column>;
    selectProject: (id: string) => void;
}

export const SingleProjectContext = createContext<SingleProjectContextState>({
    project: null,
    columns: [],
    selectProject: (id: string) => {},
});

export const SingleProjectProvider = ({
    children,
}: SingleProjectContextProps) => {
    const [project, setProject] = useState<Project | null>(null);
    const [columns, setColumns] = useState<Array<Column>>([]);

    const selectProject = (id: string) => {
        const project = db.get(Tables.PROJECTS).find({ id }).value();
        setProject(project);
        setColumns(project.columns);
    };

    return (
        <SingleProjectContext.Provider
            value={{ project, selectProject, columns }}
        >
            {children}
        </SingleProjectContext.Provider>
    );
};
