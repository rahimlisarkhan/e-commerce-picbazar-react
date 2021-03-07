import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

//COMPONENTS
import JoinPopup from "./Auth/JoinPopup";
import SignUpPopup from "./Auth/SignUpPopup";
import FormAddProduct from "./OwnOrderPage/FormAddProduct";

//ACTIONS
import {createCategories, getCategories, createAddProduct} from '../redux/actions/productPageActions';
import { getRegisterAuth, getLoginAuth,logout } from "../redux/actions/authActions";
import { getOwnerProduct } from "../redux/actions/ownerPageAction";

//ICONS
import { MdDashboard } from "react-icons/md";
import * as aiIcon from "react-icons/ai";
import {FaCalendarCheck, FaUserAlt} from 'react-icons/fa';
import { IoBagCheckSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";


const HeaderContainer = (props) => {

  useEffect(() => {
    props.panelOpenClose && props.getCategories();
  },[]);

  console.log(props);

  //Hooks
  const [langOpen, setLangDrop] = useState(false),
        [JoinOpen, setJoinPopup] = useState(false),
        [productAddOpen, setAddPanel] = useState(false),
        [SignUpOpen, setSignUpPopup] = useState(false),
        [openProfile, setProfileMenu] = useState(false);

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
                productAddOpen || props.panelOpenClose
                  ? "product-add-panel panel-show"
                  : "product-add-panel"
              }
            >
              <FormAddProduct categories={props.categories}
                              createCategories={(data)=>props.createCategories(data)}
                              setAddPanel={() => setAddPanel(!productAddOpen)}
                              panelOpenClose={props.panelOpenClose}
                              getCategories={() => props.getCategories()}
                              createAddProduct={(data) => props.createAddProduct(data)}
                              getOwnerProduct={() => props.getOwnerProduct()}
                />
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
              <NavLink to="/picbazar/profile"  className="dropLink">
                 <FaUserAlt/> Profile
              </NavLink>
              <NavLink to="/picbazar/owner-order" className="dropLink">
                <FaCalendarCheck/> Own products
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
  categories:state.productPage.categories,
  panelOpenClose:state.productPage.panelOpenClose
});

export default compose(
  connect(mapStateToProps,{ getRegisterAuth,
                            getCategories, 
                            getLoginAuth,
                            logout,
                            getOwnerProduct,
                            createCategories,
                            createAddProduct
                          })
                          )(HeaderContainer);
