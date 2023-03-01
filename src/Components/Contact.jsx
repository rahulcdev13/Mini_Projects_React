import React from 'react'
import { useState } from 'react'
import './website.css'

const Contact = () => {
    const [data,setData] =useState();
    const savedata =()=>{
        
        alert(`My firstname and lastname is ${data}`)
    }
    return (
        <>
            <h2 style={{ marginTop: '10px' }} >Contact us</h2>
            <hr style={{ marginRight: '800px', marginLeft: '800px', fontWeight: 'bold' }}></hr>
            <div className='container'>
                <div className="containers">
                    <form>
                        <input type="text" name="firstname"   onChange={(e)=>{setData(e.target.value)}} placeholder="Your name.." required />
                        <input type="text" name="lastname"   onChange={(e)=>{setData(e.target.value)}} placeholder="Your last name.." required />
                        <select name="country" required>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <textarea name="subject" placeholder="Write something.." required ></textarea>
                        <button className='btn btn-success' onClick={savedata}>Submit</button>
                    </form>
                </div> 
            </div>
        </>
    )
}

export default Contact
