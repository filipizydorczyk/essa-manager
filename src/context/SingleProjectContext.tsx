import db, { Tables } from "../lib/db-repository";
import { Project, Column, Task } from "../types";
import React, { useState, createContext, ReactNode } from "react";
import { KanbanCardPosition } from "../components/KanbanCard";

interface SingleProjectContextProps {
    children: ReactNode;
}

interface SingleProjectContextState {
    project: Project | null;
    columns: Array<Column>;
    selectProject: (id: string) => void;
    addTask: (column_id: string, task: Task) => boolean;
    swapColumns: (start: number, end: number) => void;
    moveTask: (start: KanbanCardPosition, end: KanbanCardPosition) => void;
}

export const SingleProjectContext = createContext<SingleProjectContextState>({
    project: null,
    columns: [],
    selectProject: (id: string) => {},
    addTask: (column_id: string, task: Task) => {
        return false;
    },
    swapColumns: (start: number, end: number) => {},
    moveTask: (start: KanbanCardPosition, end: KanbanCardPosition) => {},
});

/**
 * Provider for view `ProjectView`
 * @param props contains only children to render
 */
export const SingleProjectProvider = ({
    children,
}: SingleProjectContextProps) => {
    const [project, setProject] = useState<Project | null>(null);
    const [columns, setColumns] = useState<Array<Column>>([]);

    /**
     * Select task with given id. Once you select task you can access
     * to it by `project` value in provider until you select another one.
     * @param id id of task to be selected
     */
    const selectProject = (id: string) => {
        const project = db.get(Tables.PROJECTS).find({ id }).value();
        setProject(project);
        setColumns(project.columns);
    };

    /**
     * Add new task to selected project. No task will be added
     * if project doesn't exist.
     * @param column_id id of column to append new task
     * @param task instance of task to append. It needs to be
     * full instance event with id database doesn't take care of ids
     */
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

    /**
     * Change order of columns. It is bassically swap.
     * @param start index of column to move
     * @param end index to place a column
     */
    const swapColumns = (start: number, end: number) => {
        const columns = project?.columns;

        if (columns && project) {
            [columns[start], columns[end]] = [columns[end], columns[start]];
            setColumns([...columns]);
            db.get(Tables.PROJECTS)
                .find({ id: project.id })
                .assign({ columns: project.columns })
                .write();
        }
    };

    /**
     * Moves tasks between diffrent columns
     * @param start column and position of task to move
     * @param end column and position of task destination
     */
    const moveTask = (start: KanbanCardPosition, end: KanbanCardPosition) => {
        const columns = project?.columns;

        if (columns && project) {
            const start_column = columns.find(
                (column) => column.id === start.column
            );
            const end_column = columns.find(
                (column) => column.id === end.column
            );
            const element = start_column?.tasks[start.position];

            if (element) {
                end_column?.tasks.splice(end.position, 0, element);
                start_column?.tasks.splice(start.position, 1);

                setColumns([...columns]);
                db.get(Tables.PROJECTS)
                    .find({ id: project.id })
                    .assign({ columns: project.columns })
                    .write();
            }
        }
    };

    return (
        <SingleProjectContext.Provider
            value={{
                project,
                selectProject,
                columns,
                addTask,
                swapColumns,
                moveTask,
            }}
        >
            {children}
        </SingleProjectContext.Provider>
    );
};
