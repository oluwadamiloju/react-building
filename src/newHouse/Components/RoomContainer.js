import React, { useState, useEffect }from 'react'
import Room from './Room'
import { useSelector } from 'react-redux'

const RoomContainer = () => {
    const pillarData = useSelector((state) => state.pillarState)
    const { pillar } = pillarData

    const [rooms, setRooms] = useState([])

    const showRooms = () => {
        let roomAmount = Math.floor(pillar / 4)
        let newArray = new Array(roomAmount)
        newArray.fill(roomAmount)
        setRooms(newArray)
    }

    useEffect(() => {
        showRooms()
    }, [pillar])

    return (
        <div>
            {rooms.map((room, index) => <Room key={index}/>)}
        </div>
    )
}

export default RoomContainer
