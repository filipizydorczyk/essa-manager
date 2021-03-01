import React from "react";
import "../styles/kanban-card.scss";

export interface KanbanCardProps {
    name: string;
    description: string;
}

export interface KanbanCardPosition {
    column: string;
    position: number;
}

export default function KanbanCard({ name, description }: KanbanCardProps) {
    return (
        <div className="kanban-card">
            <h3 className="kanban-card__name">{name}</h3>
            <p className="kanban-card__description">{description}</p>
        </div>
    );
}
