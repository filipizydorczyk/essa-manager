import React from "react";
import ReactMarkdown from "react-markdown";
import MonacoEditor from "@uiw/react-monacoeditor";
import "../styles/note-editor.scss";

export interface NoteEditorProps {
    markdown: string | undefined;
}

export default function NoteEditor({ markdown }: NoteEditorProps) {
    const [editorMode, setEditorMode] = React.useState(false);
    const options = {
        theme: "vs",
        automaticLayout: true,
    };

    return (
        <div className="note-editor">
            <button
                onClick={() => {
                    setEditorMode(!editorMode);
                }}
            >
                Switch mode
            </button>
            {editorMode ? (
                <MonacoEditor
                    language="markdown"
                    onChange={console.log}
                    value={markdown}
                    options={options}
                />
            ) : (
                <ReactMarkdown children={markdown || ""} />
            )}
        </div>
    );
}
