import React, { useState } from "react";
import logo from "../img/logo.svg";
import JoinPopup from "./Auth/JoinPopup";
import * as aiIcon from 'react-icons/ai';
import SignUpPopup from "./Auth/SignUpPopup";
import profileImage from '../img/profile.jpeg';
import {getRegisterAuth} from '../redux/actions/authActions'
import { connect } from "react-redux";
import { compose } from "redux";


const Header = (props) => {
  
  //Hooks
  const [langOpen, setLangDrop] = useState(false);
  const [JoinOpen, setJoinPopup] = useState(false);
  const [SignUpOpen, setSignUpPopup] = useState(false);
  const [openProfile,setProfileMenu] = useState(false);


  return (
    <nav className="navbar ">
      <div className="navbar__logo-content">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__land-join">
        {/* lang dropdown */}
        <div className={langOpen ? "dropdown-lang openshow" : "dropdown-lang"}>
          <span>
            
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
              alt="flag"
            />
            English
          </span>
          <span>
            
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Azerbaijan_1918.svg"
              alt="flag"
            />
            Azərbaycanca
          </span>
          <span>
            
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png"
              alt="flag"
            />
            Türkçe
          </span>
          <span>
            
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
              alt="flag"
            />
            Pусский
          </span>
        </div>
        <button className="lang" onClick={() => setLangDrop(!langOpen)}>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
              alt="lang"
            />
          </span>
          Choose
        </button>
        
        {/* register */}
        <div className={!SignUpOpen ? 'popup-join' : 'popup-join join-show'}>
          <SignUpPopup getRegisterAuth={(data) => props.getRegisterAuth(data)} />
          <button className='close' onClick={()=> setSignUpPopup(!SignUpOpen)}  > 
          <aiIcon.AiOutlineClose/></button>
        </div>

        <button className="join" onClick={() => setSignUpPopup(!SignUpOpen)}>
          Sign up
        </button>




        {/* join popup */}
        <div className={!JoinOpen ? 'popup-join' : 'popup-join join-show'}>
        <JoinPopup />
        <button className='close' onClick={()=> setJoinPopup(!JoinOpen)}  > 
        <aiIcon.AiOutlineClose/></button>
        </div>

        <button className="join" onClick={() => setJoinPopup(!JoinOpen)}>
          Join
        </button>

        <div className='profile__content' onClick={() => setProfileMenu(!openProfile)}>
          <img src={profileImage} alt="user" />


          <div className={openProfile ? "profile__content__dropMenu profile-show" : "profile__content__dropMenu"}>
              <span>Own order</span>
              <span>Your order</span>
              <span>Log out</span>
          </div>
        </div>


      </div>
    </nav>
  );
};


let mapStateToProps = (state) => ({auth:state})

export default compose(connect(mapStateToProps,{getRegisterAuth}))( Header);
