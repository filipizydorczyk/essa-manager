import React from "react";
import MonacoEditor from "@uiw/react-monacoeditor";

export interface NoteEditorProps {
    markdown: string | undefined;
}

export default function NoteEditor({ markdown }: NoteEditorProps) {
    const options = {
        theme: "vs",
    };

    return (
        <MonacoEditor
            height="500px"
            language="markdown"
            onChange={console.log}
            value={markdown}
            options={options}
        />
    );
}
