import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import { Project, Task } from "../types";

interface DBSchema {
    projects: Array<Project>;
    tasks: Array<Task>;
}

export const DATABASE_NAME = "pm-database";
export enum Tables {
    PROJECTS = "projects",
}

const adapter = new LocalStorage<DBSchema>(DATABASE_NAME);
const db = low(adapter);
db.defaults({ projects: [] }).write();

export default db;
