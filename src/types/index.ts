import { v4 as uuidv4 } from "uuid";

export interface Project {
    id: string;
    name: string;
    description: string;
    columns: Array<Column>;
}

export interface Column {
    id: string;
    name: string;
    tasks: Array<string>;
}

export interface Task {
    id: string;
    name: string;
    description: string;
}

export const createDeafultCoulmns = (): Array<Column> => {
    return [
        {
            id: uuidv4() as string,
            name: "To do",
            tasks: [],
        },
        {
            id: uuidv4() as string,
            name: "Doing",
            tasks: [],
        },
        {
            id: uuidv4() as string,
            name: "Done",
            tasks: [],
        },
    ];
};
