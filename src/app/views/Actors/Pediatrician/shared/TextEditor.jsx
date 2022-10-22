// import React from "react";
// import { Editor, EditorState } from "draft-js";
// import "draft-js/dist/Draft.css";
//
// export default function MyEditor() {
//     const [editorState, setEditorState] = React.useState(() =>
//         EditorState.createEmpty()
//     );
//
//     const editor = React.useRef(null);
//     function focusEditor() {
//         editor.current.focus();
//     }
//
//     return (
//         <div
//             style={{ border: "1px solid black", minHeight: "8em", cursor: "text" , margin: "10px" }}
//             onClick={focusEditor}
//         >
//             <Editor
//                 ref={editor}
//                 editorState={editorState}
//                 onChange={setEditorState}
//                 placeholder="Write something!"
//             />
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SelectAutoWidth from "./BasicSelect";
import BasicSelect from "./BasicSelect";
import Button from '@mui/material/Button';
import InputAdornments from "./InputBox";
export default function App() {

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [title, setTitle] = React.useState(0)
    const [values, setValues] = React.useState(0)
        useEffect(() => {
        console.log(editorState.getCurrentContent());
    }, [editorState]);
    let Handleclick =(event) => {
        let title=event
        setTitle(title)
    };
    let Handleclick1 = (event) => {
        console.log("valueee",title)
        // console.log(__dirname)
        pass()
    };
    let pass=()=>{
        console.log("pass function",title)
    }
    return (
        <div>
            {/*<h1>React Editors</h1>*/}
            {/*<h2>Start editing to see some magic happen!</h2>*/}
             <div style={{marginBottom:'30px',marginTop:'20px'}}>
                 <BasicSelect handleclick1={Handleclick1}/>
             </div>
            <div>
                <InputAdornments Handleclick={Handleclick}/>
            </div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '250px',marginTop:'20px' }}>
                <p style={{fontSize:'.8em',fontFamily:'Roboto',color:'rgba(52, 49, 76, 0.54)'}}>First paragraph</p>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '250px',marginTop:'20px' }}>
                <p style={{fontSize:'.8em',fontFamily:'Roboto',color:'rgba(52, 49, 76, 0.54)'}}>Second paragraph</p>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
            <div>
                <Button variant="contained" style={{width:'100%',display:'flex',marginTop:'10px'}}>PUBLISH</Button>
            </div>
        </div>
    );
}