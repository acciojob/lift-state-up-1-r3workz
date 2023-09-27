import React from "react";

const Child = (props) => (
    <div style={{
        backgroundColor: "red",
        marginRight: "10%"
    }} className="child">

        <h2>Child Component</h2>
        <button onClick={()=>props.setShowModal(!props.showModal)}>Show Modal</button>
        {props.children}
    </div> 
)
export default Child