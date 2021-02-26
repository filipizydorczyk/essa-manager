import db, { Tables } from "../lib/db-repository";
import { Project } from "../types";
import React, { useState, createContext, ReactNode } from "react";

interface SingleProjectContextProps {
    children: ReactNode;
}

interface SingleProjectContextState {
    project: Project | null;
    selectProject: (id: string) => void;
}

export const SingleProjectContext = createContext<SingleProjectContextState>({
    project: null,
    selectProject: (id: string) => {},
});

export const SingleProjectProvider = ({
    children,
}: SingleProjectContextProps) => {
    const [project, setProject] = useState<Project | null>(null);

    const selectProject = (id: string) => {
        setProject(db.get(Tables.PROJECTS).find({ id }).value());
    };

    return (
        <SingleProjectContext.Provider value={{ project, selectProject }}>
            {children}
        </SingleProjectContext.Provider>
    );
};
