import React from 'react'
import Roof from './Roof.js'
import Room from './Room.js'
import Pillar from './Reusables/Pillar.js'
import Wall from './Wall.js'
import Window from './Reusables/Window.js'
import Door from './Reusables/Door.js'
import Decking from './Decking.js'
import Foundation from './Foundation.js'
import Land from './Land.js'

const Building = () => {
    return (
        <div>
            <Roof/>
            <Room className="first-room">
                <Pillar className="pillar"/>
                <Wall className="wall-one">
                    <Window/>
                    <Window/>
                </Wall>
                <Pillar className="pillar"/>
                <Wall className="wall-two">
                    <Window/>
                </Wall>
                <Wall className="wall-three">
                    <Door/>
                </Wall>
            </Room>
            <Decking/>
            <Room className="second-room">
                <Pillar className="pillar"/>
                <Wall className="wall-four">
                    <Door/>
                    <Door/>
                </Wall>
                <Pillar className="pillar"/>
                <Pillar className="pillar"/>
                <Wall className="wall-five">
                    <Window/>
                </Wall>
                <Wall>
                    <Door/>
                    <Door/>
                    <Door/>
                </Wall>
            </Room>
            <Foundation/>
            <Land/>
        </div>
    )
}

export default Building
