import React from 'react';
import Markdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {useSelector} from "react-redux";
import {selectMarkdownInput} from "../redux/markdownSlice.js";
import star from "../assets/star-regular.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownLeftAndUpRightToCenter, faMaximize} from "@fortawesome/free-solid-svg-icons";
import remarkGfm from "remark-gfm";


const Previewer = ({toggleIconPreviewer, hideEditor}) => {

    const markdownInput = useSelector(selectMarkdownInput);

    return (
       <div className='previewer'>
           <div className="previewer-toolbar">
               <div className='title'>
                   <img alt='' src={star} className='svg'/>
                   Previewer
               </div>
               {hideEditor?
                   <FontAwesomeIcon
                       icon={faDownLeftAndUpRightToCenter}
                       onClick={toggleIconPreviewer}
                   />
                   :
                   <FontAwesomeIcon
                       icon={faMaximize}
                       onClick={toggleIconPreviewer}
                   />
               }
           </div>
           <div className="previewer-window">
               <Markdown
                   remarkPlugins={[remarkGfm]}
                   children={markdownInput}
                   components={{
                       code(props) {
                           const {children, className, node, ...rest} = props
                           const match = /language-(\w+)/.exec(className || '')
                           return match ? (
                               <SyntaxHighlighter language="js" style={materialLight} PreTag="div" children={ children} />
                           ) : (
                               <code {...rest} className={className}>
                                   {children}
                               </code>
                           )
                       }
                   }}
               />
           </div>
       </div>

    );
};

export default Previewer;
