import React from 'react'

function alert(props) {
  return (
    <div className='container'>
      <div className={`alert my-3 alert-${props.BgAlert} alert-dismissible fade show d-${props.dAlert}`}  role="alert">
  <strong><i className={`bi bi-${props.icon}-fill mx-3`}></i>{props.message}</strong> 
 
</div>
    </div>
  )
}

export default alert
