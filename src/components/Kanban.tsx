import React from "react";
import Board from "@lourenci/react-kanban";
import "../styles/kanban.scss";
import KanbanCard, { KanbanCardPosition } from "./KanbanCard";
import { Column } from "../types";

export interface ProjectsTableProps {
    data: Array<Column>;
    handleCardMove: (data: CardMovedResponse) => void;
}

export interface CardMovedResponse {
    source: KanbanCardPosition;
    destination: KanbanCardPosition;
    card: string;
}

export default function Kanban({ data, handleCardMove }: ProjectsTableProps) {
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
                return (
                    <KanbanCard
                        name={data.title}
                        description={data.description}
                    />
                );
            }}
            onCardDragEnd={(card: any, source: any, destination: any) => {
                handleCardMove({
                    card: card.id,
                    source: {
                        column: source.fromColumnId,
                        position: source.fromPosition,
                    },
                    destination: {
                        column: destination.toColumnId,
                        position: destination.toPosition,
                    },
                });
            }}
        >
            {boardData}
        </Board>
    );
}
