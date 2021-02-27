import React, { useState } from 'react';
import * as aiIcon from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

let SignUpPopup = () => {
    const [JoinOpen, setJoinPopup] = useState(false)
    const [viewPassword,setPasswordView ] = useState(false)
    return (
        <div className={!JoinOpen ? 'popup-join' : ' join-show'}>

        <div className="form-content form-size">
            <div className="form-desc">
                <h1>Welcome</h1>
                <h2>Sign up with your username, email & more</h2>
            </div>
            <div className="form-group">
                <aiIcon.AiOutlineUser className='joinIcon'/>
                <input type="text" placeholder='first name'/>
            </div>

            <div className="form-group">
                <aiIcon.AiOutlineUser className='joinIcon'/>
                <input type="text" placeholder='last name'/>
            </div>

            <div className="form-group">
                <aiIcon.AiOutlineUser className='joinIcon'/>
                <input type="text" placeholder='username'/>
            </div>
            <div className="form-group">
                <aiIcon.AiOutlineMail className='joinIcon'/>
                <input type="email" placeholder='email'/>
            </div>
            <div className="form-group">
                <RiLockPasswordLine className='joinIcon'/>
                <input type={!viewPassword ? "password" : "text"} placeholder='password'/>

                <span className='password-view'
                      onClick={() => setPasswordView(!viewPassword)}>
                    {viewPassword
                     ?<aiIcon.AiOutlineEye/>
                     :< aiIcon.AiOutlineEyeInvisible />}
                </span>
            </div>

            <button> Continue </button>
       
        </div>

            <button className='close' onClick={()=> setJoinPopup(!JoinOpen)}  > <aiIcon.AiOutlineClose/></button>
        </div>
    );
}

export default SignUpPopup;