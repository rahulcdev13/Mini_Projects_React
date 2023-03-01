import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './GoogleTranslate.css'
import axios from 'axios'

const GoogleTranslate = () => {
    const [options, setOptions] = useState([])
    const [to, setTo] = useState("en")
    const [from, setFrom] = useState("en")
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    // const fetDataApi = () => {

    // }

    const translate = () => {
        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post('https://libretranslate.de/translate', params,
            {
                headers: {
                    "accept": "application/json",
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(res => {
                // console.log("TranslateApi : ", res.data)
                setOutput(res.data.translatedText)
            })
    }

    useEffect(() => {
        axios.get(`https://libretranslate.com/languages`,
            { headers: { "accept": "application/json" } })
            .then(res => {
                // console.log("LanguageAPI", res.data)
                setOptions(res.data)
            })
    }, [])

    return (
        <>
            <div className='container'>
                <h2 className='Headin'> <span style={{color:"blue"}}>G</span><span style={{color:"red"}}>o</span><span style={{color:"#FFC300"}}>o</span><span style={{color:"blue"}}>g</span><span style={{color:"green"}}>l</span><span style={{color:"red"}}>e</span> Translator</h2>
                <div className='optionselect'>
                    <select className='selectOption' onChange={(e) => { setFrom(e.target.value) }}>
                        {
                            options.map((currData) => {
                                return (
                                    <>
                                        <option key={currData.code} value={currData.code}>{currData.name}</option>
                                    </>
                                )
                            })
                        }

                    </select> &nbsp;&nbsp;
                    <select className='selectOption' onChange={(e) => { setTo(e.target.value) }}>
                        {
                            options.map((currData) => {
                                return (
                                    <>
                                        <option key={currData.code} value={currData.code}>{currData.name}</option>
                                    </>
                                )
                            })
                        }

                    </select>
                </div>
                <div>
                    <textarea rows="7" cols="50" onInput={(e) => { setInput(e.target.value) }}></textarea>
                </div>
                <div>
                    <textarea rows="7" cols="50" placeholder='Translation..' value={output} onInput={(e) => { setOutput(e.target.value) }}></textarea>
                </div>
                <div>
                    <button className="btn btn-success" onClick={e => translate()}>Translate</button>
                </div>
            </div>
        </>
    )
}

export default GoogleTranslate