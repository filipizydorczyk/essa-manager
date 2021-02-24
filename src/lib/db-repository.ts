import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

export const DATABASE_NAME = "pm-database";
export const enum Tables {
    PROJECTS = "projects",
}

const adapter = new LocalStorage(DATABASE_NAME);
const db = low(adapter);
db.defaults({ projects: [] }).write();

export default db;
