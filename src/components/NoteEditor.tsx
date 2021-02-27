import React from "react";
import MonacoEditor from "@uiw/react-monacoeditor";

export interface NoteEditorProps {
    markdown: string | undefined;
}

export default function NoteEditor({ markdown }: NoteEditorProps) {
    const options = {
        theme: "vs",
        automaticLayout: true,
    };

    return (
        <MonacoEditor
            language="markdown"
            onChange={console.log}
            value={markdown}
            options={options}
        />
    );
}
