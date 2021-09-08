import React from 'react'
import Roof from './Roof.js'
import Room from './Room.js'
import Foundation from './Foundation.js'
import Land from './Land.js'
import './Building.css'

const Bungalow = () => {
    return (
        <div>
            <Roof/>
            <Room/>
            <Foundation/>
            <Land/>
        </div>
    )
}

export default Bungalow
