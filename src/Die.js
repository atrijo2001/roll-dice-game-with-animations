import React from 'react'
import "./Die.css"

const Die = ({face, isrolling}) => {
    return (
        <div className={isrolling?'rolling' : ''}>
            <i className={`die fas fa-dice-${face}`}></i>
        </div>
    )
}

export default Die
