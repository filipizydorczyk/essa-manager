import React from "react";
import Board from "@lourenci/react-kanban";
import "../styles/kanban.scss";
import KanbanCard from "./KanbanCard";
import { Column } from "../types";

export interface ProjectsTableProps {
    data: Array<Column>;
}

export default function Kanban({ data }: ProjectsTableProps) {
    const boardData = {
        columns: data.map((column) => {
            return {
                id: column.id,
                title: column.name,
                cards: column.tasks.map((task) => {
                    return {
                        id: task.id,
                        title: task.name,
                        description: task.description,
                    };
                }),
            };
        }),
    };

    return (
        <Board
            renderCard={(data: any, { removeCard, dragging }: any) => {
                console.log(data);
                return (
                    <KanbanCard
                        name={data.title}
                        description={data.description}
                    />
                );
            }}
        >
            {boardData}
        </Board>
    );
}
