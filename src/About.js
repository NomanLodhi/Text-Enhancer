import React from 'react'


export default function About(props) {
  return (
    <>
     <div className={`bg-${props.mode}`}>
    <h1 className='text-warning text-center display-3 p-3'>Some Points About Us</h1>
    <div className="container  w-75" >
    <div className="accordion" id="accordionExample">
  <div className="accordion-item  m-3 rounded-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
 <b className='fs-3 text-primary'>Creator's Words</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is my first React App</strong>  <code>
I'm excited to introduce my very first React project, a testament to my dedication to honing my web development skills. Combining HTML, CSS, Bootstrap, and React, I embarked on this journey to put my knowledge to the test. Through this project, I aimed to showcase my ability to create dynamic and responsive web applications while gaining valuable experience in the world of front-end development.</code>
      </div>
    </div>
  </div>
  
  <div className="accordion-item  m-3 rounded-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b className='fs-3 text-primary'>What this app do?</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Text Enhancer  </strong> <code> is a versatile and user-friendly text editing application designed to empower users with a powerful set of tools for refining and enhancing their written content. Whether you need to correct grammatical errors, improve readability, or simply want to polish your text, Text Enhancer offers a seamless and efficient editing experience. With an array of features at your disposal, including spell-check, grammar suggestions, style enhancements, and more, it's your go-to solution for elevating the quality of your written work. Say goodbye to typos and hello to beautifully crafted, error-free text with Text Enhancer.</code>.
      </div>
    </div>
  </div>
</div> 

    </div>
        </div>
    </>
    )
}
