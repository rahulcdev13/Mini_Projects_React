// import React from 'react' 
import React, { useState, useEffect } from 'react'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import './ChappApp.css'


const ChappApp = () => {

    const [name, setName] = useState('');
    const [chats, setChats] = useState([]);
    const [msg, setMsg] = useState('')

    const db = getDatabase();
    const chatListRef = ref(db, 'chats');

    useEffect(() => {
        onChildAdded(chatListRef, (data) => {
            setChats(chats => [...chats, data.val()]);
        });
    }, []);

    const sendChat = () => {
        const chatsRef = push(chatListRef);
        set(chatsRef, { name, message: msg });
        setMsg('');
    }

    return (
        <>
            {/* <h2 className='Heading'>Chat Application</h2> */}
            <div className='mainDiv'>
                {name ? null : <div>
                    <input type="text" placeholder='Enter User Name ..' onBlur={(e) => setName(e.target.value)} />
                </div>}
                {name ? <div>
                    <h3 className='userHeading'><i className="fa fa-user-circle"></i> Mr. {name}</h3>
                    <div className='chat-container'>
                        {chats.map((currVal) => {
                            return (
                                <>
                                    <div className={`containers ${currVal.name === name ? 'me' : ''}`}>
                                        <p className='chatBox'>
                                            <strong>{currVal.name} : </strong>
                                            <span>{currVal.message}</span>
                                        </p>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                    <div className='btm'>
                        <input type="text" value={msg} onInput={(e) => { setMsg(e.target.value) }} cols="25" placeholder='Enter  Your Message ...'></input>
                        <button onClick={(e) => sendChat()} className="btn btn-primary">Send</button>
                    </div>
                </div> : null}
            </div>
        </>
    )
}

export default ChappApp