import React, { useState } from "react";
import logo from "../img/logo.svg";
import JoinPopup from "./Auth/JoinPopup";
import * as aiIcon from 'react-icons/ai';
import SignUpPopup from "./Auth/SignUpPopup";
import {getRegisterAuth,getLoginAuth} from '../redux/actions/authActions'
import { connect } from "react-redux";
import { compose } from "redux";


const Header = (props) => {
  
  //Hooks
  const [langOpen, setLangDrop] = useState(false);
  const [JoinOpen, setJoinPopup] = useState(false);
  const [SignUpOpen, setSignUpPopup] = useState(false);
  const [openProfile,setProfileMenu] = useState(false);

  console.log('====================================');
  console.log(props);
  console.log('====================================');

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

        {!props.auth && <button className="join" onClick={() => setSignUpPopup(!SignUpOpen)}>
          Sign up
        </button>}


        {/* join popup */}
        <div className={JoinOpen ? 'popup-join' : 'popup-join join-show'}>
          <JoinPopup getLoginAuth ={(data)=> props.getLoginAuth(data)}/>
          <button className='close' onClick={()=> setJoinPopup(!JoinOpen)}  > 
          <aiIcon.AiOutlineClose/></button>
        </div>

        {!props.auth && <button className="join" onClick={() => setJoinPopup(!JoinOpen)}>
          Join
        </button>}

        {props.auth && <div className='profile__content' onClick={() => setProfileMenu(!openProfile)}>
          {/* <img src={props.user.image} alt="user" />
          <h2>{props.user.first_name} {props.user.last_name}</h2> */}

          <div className={openProfile ? "profile__content__dropMenu profile-show" : "profile__content__dropMenu"}>
              <span>Own order</span>
              <span>Your order</span>
              <span>Log out</span>
          </div>
        </div>
}

      </div>
    </nav>
  );
};


let mapStateToProps = (state) => ({
  state:state,
  openLoginPage:state.authentication.openLoginPage,
  user:state.userInfo.user,
  auth:state.authentication.auth
})

export default compose(connect(mapStateToProps,{getRegisterAuth,getLoginAuth}))( Header);
