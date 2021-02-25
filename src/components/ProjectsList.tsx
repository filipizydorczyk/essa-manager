import React from "react";
import { Project } from "../types";
import "../styles/projects-list.scss";

export interface ProjectsTableProps {
    data: Array<Project>;
}

export default function ProjectsTable({ data }: ProjectsTableProps) {
    return (
        <section className="projects-table">
            {data.map((element) => (
                <aside
                    className="projects-table__element"
                    key={element.id}
                    onClick={console.log}
                >
                    <h3>{element.name}</h3>
                    <p>Usuń</p>
                </aside>
            ))}
        </section>
    );
}
