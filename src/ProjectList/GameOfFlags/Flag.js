import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Flag.css'
import nationData from './NationData.json'

const Flag = () => {
    // console.log(nationData);
    const [country, setCountry] = useState([])
    const [countryFlag, setCountryFlag] = useState({})
    const [score, setScore] = useState({ Correct: 0, Incorrect: 0, TotalScore: 0 })
    const [showAnswer, setShowAnswer] = useState(false)
    const [selected ,setSelected]= useState({})

    const generaterandomeNation = () => {
        let countryName = [];
        let i;
        for (i = 0; i < 4; i++) {
            const randomCity = Math.floor(Math.random() * nationData.length);
            countryName.push(nationData[randomCity])
        }
        // console.log(countryName);
        setCountry(countryName)
        const flagIndex = Math.floor(Math.random() * 4);
        setCountryFlag(countryName[flagIndex]);
        console.log(countryName, countryName[flagIndex]);
    }
    const checkAnswer = (country) => {
        setSelected(country)
        if (country.name === countryFlag.name) {
            setScore({ ...score, Correct: score.Correct + 1, TotalScore: score.TotalScore + 1 })
            // alert('Correct') 
        }
        else {
            setScore({ ...score, Incorrect: score.Incorrect + 1 })
            // alert('Incorrect')
        }
        setShowAnswer(true)
        setTimeout(() => {
            setShowAnswer(false)
            nextQuetion()
        }, 3000);

    }
    const nextQuetion = () => {
        generaterandomeNation()
    }

    useEffect(() => {
        generaterandomeNation()
    }, [])
    return (
        <>
            <div>
                <h1 className='GmaeHeading'>Game OF Flag</h1>
                <h5><b>Guess flage name 🤔</b></h5>
                <span><b>Score : Correct : {score.Correct} || Incorrect : {score.Incorrect} || Total : {score.TotalScore}</b> </span>
                {
                    countryFlag.name ? <p className='icons'><span className={`fi fi-${countryFlag['alpha-2'].toLowerCase()}`}></span></p> : null
                }
                <div>
                    <span><b>Options Here :</b> </span>
                    {country.map((currData, ind) => {
                        return (
                            <>
                                <button className='btncsss' key={ind} onClick={() => checkAnswer(currData)}>{currData.name}</button>
                            </>
                        )
                    })}
                </div>
                <div><br />
                    {
                        showAnswer ? <p className={countryFlag.name===selected.name? "correct" : "incorrect"}><b>The Correct Answer is : {countryFlag.name}</b></p> : null
                    }

                </div>
            </div>
        </>
    )
}

export default Flag