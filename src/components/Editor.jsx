import React from 'react';
import {selectMarkdownInput, setMarkdownInput} from "../redux/markdownSlice.js";
import {useDispatch, useSelector} from "react-redux";
import star from "../assets/star-regular.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownLeftAndUpRightToCenter, faMaximize} from "@fortawesome/free-solid-svg-icons";


const Editor = ({toggleIconEditor, hidePreviewer}) => {

    const dispatch = useDispatch();
    const markdownInput = useSelector(selectMarkdownInput);

    const handleMarkdownChange = (newMarkdown) => {
        dispatch(setMarkdownInput(newMarkdown));
    };

    return (
        <div className='editor'>
            <div className="editor-toolbar">
                <div className='title'>
                    <img alt='' src={star} className='svg'/>
                    Editor
                </div>
                {hidePreviewer?
                    <FontAwesomeIcon
                        icon={faDownLeftAndUpRightToCenter}
                        onClick={toggleIconEditor}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faMaximize}
                        onClick={toggleIconEditor}
                    />
                }
            </div>
            <textarea

                value={markdownInput}
                onChange={(e) => handleMarkdownChange(e.target.value)}
                placeholder="Enter Markdown text here..."

            />
        </div>
    );
};

export default Editor;