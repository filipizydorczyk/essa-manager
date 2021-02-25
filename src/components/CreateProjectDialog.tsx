import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "../styles/create-project-dialog.scss";

export interface CreateProjectDialogProps {
    isOpen: boolean;
    handleClose: () => void;
    handleSubmit: (response: CreateProjectDialogResponse) => void;
}

export interface CreateProjectDialogResponse {
    name: string;
    description: string;
}

export default function CreateProjectDialog({
    isOpen,
    handleClose,
    handleSubmit,
}: CreateProjectDialogProps) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleNameEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const handleDescriptionEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value);
    };

    const submit = () => {
        handleSubmit({ name, description });
        handleClose();
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            className="create-project-dialog"
        >
            <div className="create-project-dialog__container">
                <h1>New project</h1>
                <h3>Name</h3>
                <input type="text" onChange={handleNameEvent} />
                <h3>Description</h3>
                <input type="text" onChange={handleDescriptionEvent} />

                <button type="submit" onClick={submit}>
                    Add
                </button>
            </div>
        </Dialog>
    );
}
