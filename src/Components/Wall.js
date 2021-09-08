import React from 'react'

const Wall = (props) => {
    return (
        <div style={{backgroundColor: "#722F37", color: "white"}}>
           {props.children} 
        </div>
    )
}

export default Wall
