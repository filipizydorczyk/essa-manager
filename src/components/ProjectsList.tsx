import React from "react";
import { Project } from "../types";
import "../styles/projects-list.scss";
import { useHistory } from "react-router-dom";

export interface ProjectsTableProps {
    data: Array<Project>;
}

export default function ProjectsTable({ data }: ProjectsTableProps) {
    const history = useHistory();

    return (
        <section className="projects-table">
            {data.map((element) => (
                <aside
                    className="projects-table__element"
                    key={element.id}
                    onClick={() => {
                        history.push(`/project/${element.id}`);
                    }}
                >
                    <h3>{element.name}</h3>
                    <p>Usuń</p>
                </aside>
            ))}
        </section>
    );
}
