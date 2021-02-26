import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

//------

const mockedboard = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Add card",
                    description: "Add capability to add a card in a column",
                },
            ],
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 2,
                    title: "Drag-n-drop support",
                    description: "Move a card between the columns",
                },
            ],
        },
    ],
};

//--------

export interface ProjectsTableProps {
    data: Array<any>;
}

export default function Kanban({ data }: ProjectsTableProps) {
    return (
        <Board
            initialBoard={{
                columns: [
                    {
                        id: 1,
                        title: "Backlog",
                        cards: [
                            {
                                id: 1,
                                title: "Add card",
                                description:
                                    "Add capability to add a card in a column",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Doing",
                        cards: [
                            {
                                id: 2,
                                title: mockedboard,
                                description: "Move a card between the columns",
                            },
                        ],
                    },
                ],
            }}
            allowRemoveCard
            onCardNew={console.log}
            allowAddCard={{ on: "top" }}
            allowRemoveLane
            allowRenameColumn
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            onNewCardConfirm={(draftCard: any) => ({
                id: new Date().getTime(),
                ...draftCard,
            })}
            renderCard={(xd: any, { removeCard, dragging }: any) => (
                // <YourCard dragging={dragging}>
                //   {content}
                //   <button type="button" onClick={removeCard}>Remove Card</button>
                // </YourCard>
                <div>
                    {"lol"}
                    <button type="button" onClick={removeCard}>
                        Remove Card
                    </button>
                    {console.log(xd)}
                </div>
            )}
        />
    );
}
