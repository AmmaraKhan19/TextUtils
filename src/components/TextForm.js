import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpCase = ()=> {
        let newtext = text.toUpperCase()
        setText(newtext);
        props.showalert("Converted to Uppercase!", "success");
    }
    const handlelowCase = ()=> {
        let newtext = text.toLowerCase()
        setText(newtext);
        props.showalert("Converted to Lowercase!", "success");
    }
    const handleCapCase = ()=> {
        let newtext = text.replace(/\b\w/g, c => c.toUpperCase());
        setText(newtext);
        props.showalert("Converted to Capcase!", "success");
    }
    const handleClear = ()=> {
        let newtext = ''
        setText(newtext);
        props.showalert("Textbox Cleared!", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Text copied to clipboard!", "success");
    }

    const handleextraspace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);   
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}}
                id="mybox" rows="8" value={text} onChange={handleOnChange} placeholder='Type somthing'></textarea>
            </div>
            <button style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}} className="btn btn-dark mx-1 my-1" onClick={handleUpCase}>Uppercase</button>
            <button style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}} className="btn btn-dark mx-1 my-1" onClick={handlelowCase}>Lowercase</button>
            <button style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}} className="btn btn-dark mx-1 my-1" onClick={handleCapCase}>Capitalize</button>
            <button style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}} className="btn btn-dark mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}} className="btn btn-dark mx-1 my-1" onClick={handleextraspace}>Remove Exatra Space</button>
            <button style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode=== 'dark'?'black':'white'}} className="btn btn-dark mx-1 my-1" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}}>
            <h1>Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read text</p>
            <p>{text.split(".").filter((element)=>{return element.length !== 0}).length} sentences</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Type Something in the textbox'}</p>
        </div>
        </>
    );
}
