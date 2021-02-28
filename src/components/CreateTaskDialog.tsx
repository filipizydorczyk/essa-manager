import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "../styles/create-project-dialog.scss";
import { Project } from "../types";

export interface CreateTaskDialogResponse {
    name: string;
    description: string;
    column: string;
}

export interface CreateTaskDialogProps {
    isOpen: boolean;
    handleClose: () => void;
    handleSubmit: (response: CreateTaskDialogResponse) => void;
    project: Project;
}

export default function CreateTaskDialog({
    isOpen,
    handleClose,
    project,
    handleSubmit,
}: CreateTaskDialogProps) {
    const [name, setName] = React.useState("");
    const [column, setColumn] = React.useState(project.columns[0].id);
    const [description, setDescription] = React.useState("");

    const handleNameEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const handleDescriptionEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value);
    };

    const changeName = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumn(event.target.value);
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            className="create-project-dialog"
        >
            <div className="create-project-dialog__container">
                <h1>New task</h1>
                <h3>Name</h3>
                <input type="text" onChange={handleNameEvent} />
                <h3>Description</h3>
                <input type="text" onChange={handleDescriptionEvent} />

                <select name="columns" onChange={changeName}>
                    {project.columns.map((column) => (
                        <option key={column.id} value={column.id}>
                            {column.name}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    onClick={() => {
                        handleSubmit({ name, column, description });
                        setColumn(project.columns[0].id);
                        handleClose();
                    }}
                >
                    Add
                </button>
            </div>
        </Dialog>
    );
}
