import React from 'react'
import Pillar from './Reusables/Pillar.js'
import Wall from './Wall.js'
import Window from './Reusables/Window.js'
import Door from './Reusables/Door.js'
import './Room.css'

const Room = () => {
    return (
        <div className="room" style={{margin: "auto", padding: "0% 10% 0% 10%"}}>
            <div className = "pillars">
                <Pillar className ="first-pillar"/>
                <Pillar className ="second-pillar"/>
            </div>
            <Wall>
                <Window/>
                <Window/>
            </Wall>
            <Wall>
                <Window/>
                <Door/>
            </Wall>
            <div className = "pillars">
                <Pillar className ="first-pillar"/>
                <Pillar className ="second-pillar"/>
            </div>
        </div>
    )
}

export default Room
