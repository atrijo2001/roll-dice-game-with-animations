import React, {useState} from 'react'
import Die from "./Die"
import "./RollDice.css"

const RollDice = () => {

    const numbers = ['one', 'two', 'three', 'four', 'five', 'six']

    const [dieone, setDieone] = useState('one')
    const [dietwo, setDietwo] = useState('one')
    const [isrolling, setIsrolling] = useState(false)

    const Roll = () => {
        setDieone(numbers[Math.floor(Math.random() * numbers.length)])
        setDietwo(numbers[Math.floor(Math.random() * numbers.length)])
        setIsrolling(true)

        setTimeout(() => {
            setIsrolling(false)
        }, 1000);
    }

    return (
        <div className='rollDice'>
            <div className="rollDice-container">
                <Die face={dieone} isrolling={isrolling}/>
                <Die face={dietwo} isrolling={isrolling}/>
            </div>
            <button onClick={Roll} disabled={isrolling}>
                {isrolling ? 'Dice is rolling...' : 'Roll Dice'}
            </button>
        </div>
    )
}

export default RollDice
