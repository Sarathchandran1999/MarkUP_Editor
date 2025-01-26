import React, { useState, useEffect } from 'react';
import { convertMarkdown } from '../utils/Api';

export const Editor = () => {
    const [markdown, setMarkdown] = useState('');
    const [htmlOutput, setHtmlOutput] = useState('');

    useEffect(() => {
        fetchHtml();  // Call the async function inside useEffect
    }, [markdown]);  // Dependency array ensures this runs when markdown changes
    const fetchHtml = async () => {
        if (markdown) {
            try {
                const html = await convertMarkdown(markdown);  // Await the result of the async function
                console.log("HTML Output: ", html);
                setHtmlOutput(html);  // Update the state with the converted HTML
            } catch (error) {
                console.error('Error converting markdown:', error);
            }
        } else {
            setHtmlOutput('');  // Clear output if no markdown is present
        }
    };
    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);  // Update markdown state when user types
    };

    return (
        // <div className="main-editor">
        //     <h1>Markup Text Editor</h1>
        //     <div className="input-output">
        //         <div className="input">
                    // <textarea
                    //     className="text-area1"
                    //     placeholder="Type your Markdown here..."
                        // value={markdown}
                        // onChange={handleMarkdownChange}
                    // ></textarea>
        //         </div>
        //         <div className="output">
        //             <textarea
        //                 className="text-area2"
                        // placeholder="Rendered HTML will appear here..."
                        // readOnly
                        // value={htmlOutput}
        //             ></textarea>
        //         </div>
        //     </div>
        // </div>
        <div className="main-editor">
            <h1 className="editor-heading">Markup Text Editor</h1>
            <div className="container">
                <textarea
                    className="text-area left"
                    placeholder="Type your Markdown here..."
                    value={markdown}
                    onChange={handleMarkdownChange}
                ></textarea>
                <textarea
                    className="text-area right"
                    placeholder="Rendered HTML will appear here..."
                    readOnly
                    value={htmlOutput}
                ></textarea>
            </div>
        </div>
        
    );
};
