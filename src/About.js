            // import React, {useState} from 'react'

            export default function About(props) {

                // const [myStyle,setMyStyle]= useState({
                //     color:"black",
                //     backgroundColor:"white"

                // })
                let myStyle={
                    color:props.mode === "dark" ?"white":"#042743",
                    backgroundColor: props.mode === "dark"?"#042743":"white",
                }
                
            return (
                <div className="container" style={{color:props.mode === "dark" ?"white":"#042743"}}>
                    <h1 className='my-3'>About us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>Filter()</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                filter() is a JavaScript array method that creates a new array with only the elements that pass a certain test (defined by a function).
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <b>Props</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong></strong>props (short for "properties") are a way to pass data from a parent component to a child component in React. They are read-only (immutable) and help make components reusable.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b>State</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                State is a way for React components to manage and track internal data that can change over time, triggering re-renders when updated. Unlike props (which are passed from parent to child), state is fully controlled within a component.
                </div>
                </div>
            </div>
            </div>
                </div>
            )
            }
