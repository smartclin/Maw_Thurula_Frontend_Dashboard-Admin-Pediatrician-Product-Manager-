import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function MyEditor() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    const editor = React.useRef(null);
    function focusEditor() {
        editor.current.focus();
    }

    return (
        <div
            style={{ border: "1px solid black", minHeight: "8em", cursor: "text" , margin: "10px" }}
            onClick={focusEditor}
        >
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Write something!"
            />
        </div>
    );
}