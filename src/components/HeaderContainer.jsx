import React, { useState } from "react";
import logo from "../img/logo.svg";
import JoinPopup from "./Auth/JoinPopup";
import * as aiIcon from "react-icons/ai";
import SignUpPopup from "./Auth/SignUpPopup";
import { getRegisterAuth, getLoginAuth,logout } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {FaCalendarCheck} from 'react-icons/fa'
import { IoBagCheckSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import FormAddProduct from "./OwnOrderPageContainer/FormAddProduct";

const Header = (props) => {
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  //Hooks
  const [langOpen, setLangDrop] = useState(false);
  const [JoinOpen, setJoinPopup] = useState(false);
  const [productAddOpen, setAddPanel] = useState(false);
  const [SignUpOpen, setSignUpPopup] = useState(false);
  const [openProfile, setProfileMenu] = useState(false);

  return (
    <nav className="navbar ">
      <div className="navbar__logo-content">
        <NavLink to="/picbazar/" exact>
          <img src={logo} alt="logo" />
        </NavLink>
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

        {(props.location.pathname === "/picbazar" ||
          props.location.pathname === "/picbazar/") && (
          <button className="lang" onClick={() => setLangDrop(!langOpen)}>
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                alt="lang"
              />
            </span>
            Choose
          </button>
        )}


        {/* owner product add */}
        {props.location.pathname === "/picbazar/owner-order" && (
          <>
            
            <div
              className={
                productAddOpen
                  ? "product-add-panel panel-show"
                  : "product-add-panel"
              }
            >
              <FormAddProduct/>
              <button className='closePanel'
                      onClick={() => setAddPanel(!productAddOpen)} >  <aiIcon.AiOutlineClose /></button>
            </div>

            <button
              className="add-products"
              onClick={() => setAddPanel(!productAddOpen)}
            >
              Add Products
            </button>
          </>
        )}


        {/* register */}
        <div className={!SignUpOpen ? "popup-join" : "popup-join join-show"}>
          <SignUpPopup
            getRegisterAuth={(data) => props.getRegisterAuth(data)}
          />
          <button className="close" onClick={() => setSignUpPopup(!SignUpOpen)}>
            <aiIcon.AiOutlineClose />
          </button>
        </div>

        {!props.auth && (
          <button className="join" onClick={() => setSignUpPopup(!SignUpOpen)}>
            Sign up
          </button>
        )}


        {/* join popup */}
        <div className={JoinOpen ? "popup-join join-show" : "popup-join "}>
          <JoinPopup getLoginAuth={(data) => props.getLoginAuth(data)} />
          <button className="close" onClick={() => setJoinPopup(!JoinOpen)}>
            <aiIcon.AiOutlineClose />
          </button>
        </div>

        {!props.auth && (
          <button className="join" onClick={() => setJoinPopup(!JoinOpen)}>
            Join
          </button>
        )}


        {/* Profile menu */}
        {(props.user && props.auth) && (
          <div
            className="profile__content"
            onClick={() => setProfileMenu(!openProfile)}
          >
            <img src={props.user.image} alt="user" />
            <h2>
              {props.user.first_name} {props.user.last_name}
            </h2>

            <div
              className={
                openProfile
                  ? "profile__content__dropMenu profile-show"
                  : "profile__content__dropMenu"
              }
            >
              <NavLink to="/picbazar/" exact className="dropLink">
              <MdDashboard/> Dashboard
              </NavLink>
              <NavLink to="/picbazar/owner-order" className="dropLink">
               <FaCalendarCheck/> Own order
              </NavLink>
              <NavLink to="/picbazar/your-order" className="dropLink">
                <IoBagCheckSharp/> Your order
              </NavLink>
              <NavLink to="/picbazar/" className="dropLink" onClick={()=>props.logout(props.history.push) } >
                <RiLogoutBoxRFill/> Log out
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

let mapStateToProps = (state) => ({
  openLoginPage: state.authentication.openLoginPage,
  user: state.userInfo.user,
  auth: state.authentication.auth,
  state: state,
});

export default compose(
  connect(mapStateToProps, { getRegisterAuth, getLoginAuth,logout })
)(Header);
