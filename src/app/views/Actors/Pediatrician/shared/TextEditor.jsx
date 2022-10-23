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
import { EditorState,convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import BasicSelect from "./BasicSelect";
import Button from '@mui/material/Button';
import InputAdornments from "./InputBox";
import {getPListForAdmin} from "../../../../services/Admin/Pediatrician/admin_pediatrician_service";
import {getPostList, PublishArticle} from "../../../../services/Pediatrician/pt_service";
export default function App() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [htmlContent, setHtmlContent] = useState('')
    const [title, setTitle] = React.useState(0)
    const [category, setCategory] = React.useState('')

    const handleEditorChange = (state) => {
        setEditorState(state);
        console.log(editorState)
        sendContent();
    };
    const sendContent = () => {
        getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };
    const getContent = (htmlContentProp) => {
        let content=htmlContentProp
        setHtmlContent(htmlContentProp);
        // console.log(htmlContent);
        // pass()
    }
    let Handleclick =(event) => {
        let title=event
        // console.log("title",title)
        setTitle(title)

    };
    let Handleclick1 = (event) => {
        let category=event
        // console.log("cat",category)
        setCategory(category)

    };
    const [PList, setAList] = useState([]);
    const Pass=()=>{
        console.log("hi")
        console.log("pass function",title)
        console.log("category",category)
        console.log(htmlContent);
        let id=1
        const options = [
            title,
            category,
            htmlContent,
            id
        ]
            PublishArticle(options).then(data => {
                // setPList(data);
                console.log("aa")
                console.log(data)
            }).catch(err => {
                console.log(err.error)
            })
    }
    return (
        <div>
            {/*<h1>React Editors</h1>*/}
            {/*<h2>Start editing to see some magic happen!</h2>*/}
             <div style={{marginBottom:'30px',marginTop:'20px'}}>
                 <BasicSelect Handleclick1={Handleclick1}/>
             </div>
            <div>
                <InputAdornments Handleclick={Handleclick}/>
            </div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '250px',marginTop:'20px' }}>
                {/*<p style={{fontSize:'.8em',fontFamily:'Roboto',color:'rgba(52, 49, 76, 0.54)'}}>First paragraph</p>*/}
                <Editor
                    // editorState={editorState}
                    // onEditorStateChange={setEditorState}
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                />
            </div>
            {/*<div style={{ border: "1px solid black", padding: '2px', minHeight: '250px',marginTop:'20px' }}>*/}
            {/*    <p style={{fontSize:'.8em',fontFamily:'Roboto',color:'rgba(52, 49, 76, 0.54)'}}>Second paragraph</p>*/}
            {/*    <Editor*/}
            {/*        editorState={editorState}*/}
            {/*        onEditorStateChange={setEditorState}*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <Button variant="contained" onClick={Pass} style={{width:'100%',display:'flex',marginTop:'10px'}}>PUBLISH</Button>
            </div>
        </div>
    );
}