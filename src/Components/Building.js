import React from 'react'
import Roof from './Roof.js'
import Room from './Room.js'
import Decking from './Decking.js'
import Foundation from './Foundation.js'
import Land from './Land.js'
import './Building.css'

const Building = (props) => {
    let balance = props.balance / 1000000
    let parts = []
    
    const setUp = () => {
        for(let i = 1; i < balance; i++){
            parts.push(<Room />)
            parts.push(<Decking />)
        }
    }
    setUp()
    if (balance == 1){

        return  (
            <div>
                <Roof/>
                <Room/>
                <Foundation/>
                <Land/>
            </div>
        )
    }else if (balance > 1){

    return (
        <div>
            <Roof/>
            {parts.map((part) => {return (part) })}            
            <Room/>
            <Foundation/>
            <Land/>
        </div>
    )
    }
}

export default Building
