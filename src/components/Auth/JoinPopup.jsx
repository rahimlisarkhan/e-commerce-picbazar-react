import React, { useState } from 'react';
import * as aiIcon from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

let JoinPopup = () => {
    const [JoinOpen, setJoinPopup] = useState(false)
    const [viewPassword,setPasswordView ] = useState(false)
    return (
        <div className={!JoinOpen ? 'popup-join' : ' join-show'}>

        <div className="form-content">
            <div className="form-desc">
                <h1>Welcome Back</h1>
                <h2>Login with your username & password</h2>
            </div>

            <div className="form-group">
                <aiIcon.AiOutlineUser className='joinIcon'/>
                <input type="text" placeholder='username'/>
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
            {/* AiOutlineEye
            AiOutlineEyeInvisible */}
        </div>

            <button className='close' onClick={()=> setJoinPopup(!JoinOpen)}  > <aiIcon.AiOutlineClose/></button>
        </div>
    );
}

export default JoinPopup;