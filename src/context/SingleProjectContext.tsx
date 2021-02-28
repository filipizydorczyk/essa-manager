import db, { Tables } from "../lib/db-repository";
import { Project, Column, Task } from "../types";
import React, { useState, createContext, ReactNode } from "react";

interface SingleProjectContextProps {
    children: ReactNode;
}

interface SingleProjectContextState {
    project: Project | null;
    columns: Array<Column>;
    selectProject: (id: string) => void;
    addTask: (column_id: string, task: Task) => boolean;
}

export const SingleProjectContext = createContext<SingleProjectContextState>({
    project: null,
    columns: [],
    selectProject: (id: string) => {},
    addTask: (column_id: string, task: Task) => {
        return false;
    },
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

    const addTask = (column_id: string, task: Task) => {
        if (project) {
            const column = project.columns.find(
                (column) => column.id === column_id
            );

            column?.tasks.push(task);
            db.get(Tables.PROJECTS)
                .find({ id: project.id })
                .assign({ columns: project.columns })
                .write();

            return true;
        } else {
            return false;
        }
    };

    return (
        <SingleProjectContext.Provider
            value={{ project, selectProject, columns, addTask }}
        >
            {children}
        </SingleProjectContext.Provider>
    );
};
