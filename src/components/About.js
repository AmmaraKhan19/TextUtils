import React from 'react'

export default function About(props) {

  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}} >
        <h1 className="my-3">{props.title}</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}}>
                        TextUtils provides you a way to analyze your text quickly and effiently. Be it word count or anything else.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}}>
                        TextUtils is a free application. It does not charge anything to use any and all functions that it provides.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode=== 'dark'?'#010111':'white', color: props.mode=== 'dark'?'white':'black'}}>
                        TextUtils is a web based application that works on all the browsers like Chrome, Firefox, Edge etc.TextUtils also works on Smart Phone browsers.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
