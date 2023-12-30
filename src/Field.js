import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Field(props) {
  const [text, setText] = useState('');
const ToUpperCase = () =>{
 let UpperCase=text.toUpperCase()
 setText(UpperCase)
}
const Change = (e) =>{
  setText(e.target.value)
}
  
const ToLowerCase=()=>{
setText(text.toLowerCase())
}

const Cleartext=()=>{
setText('')
}



  return(
    <>
    <div className={`bg-${props.mode} `}>
    <div className="container p-4">
    <h1 className={`fs-2 p-2 text-${props.textChange}`}>ENTER TEXT TO INITIALIZE</h1>
      <div className="form-floating h-50">
  <textarea className="form-control"   id='Field' value={text} onChange={Change}></textarea>
  <label htmlFor="floatingTextarea2">{props.Placeholder}</label>
</div>
<buttton className="btn btn-primary m-2 rounded-0 fw-bold" onClick={ToUpperCase} >Convert To UpperCase</buttton>
<buttton className="btn btn-primary m-2 rounded-0 fw-bold" onClick={ToLowerCase}>Convert To LowerCase</buttton>
<buttton className="btn btn-primary m-2 rounded-0 fw-bold" onClick={Cleartext}>Clear Text</buttton>




    </div>
  <div className="container">
  <h1 className={`text-${props.textChange}`}>Summary:</h1>
  <p className={`text-${props.textChange}`}><span className="text-primary p-2 fw-bold">{text.length}</span> Characters <span className="text-primary p-2 fw-bold">{text.split(" ").length-1}</span> Words <span className="text-primary p-2 fw-bold">{0.008 * text.split(" ").length}</span> Minutes take to read words</p>
  <h2 className={`text-${props.textChange}`}>{props.Preview}</h2>
   <div className="container bg-preview rounded-3 p-4 overflow-y-scroll  my-3" style={{height:300+'px'}}><p className="text-dark" id='result'>{text}</p></div>
  </div>
  </div>
    </>
  )
}
// Field.propTypes={
// Placeholder:PropTypes.string
// }
