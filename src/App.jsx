import { Provider } from 'react-redux';
import './styles/Styles.css'
import Editor from "./components/Editor.jsx";
import Previewer from "./components/Previewer.jsx";
import React, {useEffect, useState} from "react";
import { store } from './redux/store.js';


function App() {
    const [hideEditor, setHideEditor] = useState(false);
    const [hidePreviewer, setHidePreviewer] = useState(false);

    useEffect(() => {
        const editorElement = document.querySelector('.editor');
        const previewerElement = document.querySelector('.previewer');
        const textareaElement = document.querySelector("textarea")
        if (editorElement && previewerElement) {
            // editorElement.style.height = hideEditor ? '0' : '90%';
            editorElement.style.display = hideEditor ? 'none' : 'flex';
            previewerElement.style.height = hidePreviewer ? '0' : '90%';
            previewerElement.style.display = hidePreviewer ? 'none' : 'flex';
            textareaElement.rows = hidePreviewer ? 40 : 15


        }
    }, [hideEditor, hidePreviewer, ]);

    const toggleIconEditor = () => {
        setHidePreviewer(!hidePreviewer);
    };
    const toggleIconPreviewer = () => {
        setHideEditor(!hideEditor);
    };


    return(
        <Provider store={store}>
            <Editor toggleIconEditor = {toggleIconEditor}  hidePreviewer={hidePreviewer}/>
            <Previewer toggleIconPreviewer = {toggleIconPreviewer} hideEditor={hideEditor}/>
        </Provider>
    )
}

export default App
