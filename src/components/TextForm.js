import React, { useState } from 'react'

export default function TextForm(props) {

  let myStyle = {
    fontSize: "20px",
    fontFamily: "monospace"
  }

  const [text, setText] = useState('');

  const upCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  }
  const loCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const clrCase = () => {
    setText("")
  }
  return (
    <>
      <div className="bdy" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="container py-5">
          <h1>{props.heading}</h1>
          <div className="container my-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="10" 
                      style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#1c1d1f':'white'}}></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={upCase}>ToUpperCase</button>
          <button className="btn btn-danger mx-1 my-1" onClick={clrCase}>Clear</button>
          <button className="btn btn-success mx-1 my-1" onClick={loCase}>ToLowerCase</button>
        </div>

        <div className="container text-end">
        </div>

        <div className="container py-5">
          <h1>Text Summary</h1>
          <p className="mt-3" style={myStyle}>Total No. of Words in the Text: {text.split(" ").filter((y) => (y!=="")).length} </p>
          <p style={myStyle}>Total No. of Characters int he Text: {text.length}</p>
          <h3>Text Preview: </h3>
          <p style={myStyle}>{text.length>0?text:'Enter your text above to preview here: '}</p>
        </div>
      </div>
    </>
  )
}
