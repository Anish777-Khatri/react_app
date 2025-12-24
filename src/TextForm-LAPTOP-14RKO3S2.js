import React, {useState} from 'react'

export default function TextForm(props) {
  const captialize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
    const handleUpper=()=>{
        // console.log("UpperCase was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert((captialize)("Converted to uppercase!"),"success");
    }   
     const handleLower=()=>{
      let lowText=text.toLowerCase();
      setText(lowText);
      props.showAlert((captialize)("Converted to lowercase!"),"success")

    }
    const clearText=()=>{
      let newText="";
      setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

const [text, setText]= useState('');
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?"white":"#042743"}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark" ? "#13466e":"white", color: props.mode==='dark'?"white":"#042743"}} id="myBox" rows="3"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleUpper}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleLower}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={clearText}>Clear Text</button>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?"white":"#042743"}}>
  <h1>Your text summary</h1> 
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
  <h2>Preview </h2>
  <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>
  )
}
