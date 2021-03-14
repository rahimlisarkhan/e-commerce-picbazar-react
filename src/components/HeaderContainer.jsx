import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../img/logo.svg";

//LANG
import ru from "../lang/messages/ru.json";
import en from "../lang/messages/en.json";
import tr from "../lang/messages/tr.json";
import az from "../lang/messages/az.json";
import translate from "../lang/translate";

//COMPONENTS
import JoinPopup from "./Auth/JoinPopup";
import SignUpPopup from "./Auth/SignUpPopup";
import FormAddProduct from "./OwnOrderPage/FormAddProduct";

//ACTIONS
import {
  createCategories,
  getCategories,
  createAddProduct,
} from "../redux/actions/productPageActions";
import {
  getRegisterAuth,
  getLoginAuth,
  logout,
} from "../redux/actions/authActions";
import { getOwnerProduct } from "../redux/actions/ownerPageActions";

//ICONS
import { MdDashboard } from "react-icons/md";
import * as aiIcon from "react-icons/ai";
import {
  FaCalendarCheck,
  FaBlog,
  FaQuestionCircle,
  FaClosedCaptioning,
} from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";

const HeaderContainer = (props) => {
  //Hooks
  const [langOpen, setLangDrop] = useState(false),
    [JoinOpen, setJoinPopup] = useState(false),
    [productAddOpen, setAddPanel] = useState(false),
    [SignUpOpen, setSignUpPopup] = useState(false),
    [openProfile, setProfileMenu] = useState(false),
    [fixnav, setFixNav] = useState(false),
    [mobileNavClose, setMobileNavClose] = useState(false);

  //BOM
  window.addEventListener("scroll", function () {
    window.scrollY > 800 ? setFixNav(true) : setFixNav(false);
  });

  //useEffects
  useEffect(() => {
    props.panelOpenClose && props.getCategories();

    setJoinPopup(props.openLoginPage);
    setAddPanel(props.openLoginPage);
    setSignUpPopup(props.closeSignUpPage);
  }, [props.openLoginPage, props.closeSignUpPage]);

  return (
    <>
      {/* Desktop nav */}
      <nav className={fixnav ? "navbar nav-fix" : "navbar"}>
        <button className="hamburger-btn" onClick={() => setMobileNavClose(!mobileNavClose)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar__logo-content">
          <NavLink to="/picbazar/" exact>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="navbar__land-join">
          {/* faq */}
          <NavLink to="/picbazar/faq" className="faq">
            <FaQuestionCircle /> {translate("help")}
          </NavLink>

          {/* lang dropdown */}
          <div
            className={langOpen ? "dropdown-lang openshow" : "dropdown-lang"}
          >
            <span
              onClick={() => {
                props.setMessages(en);
                props.setLocale("en");
                setLangDrop(false);
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                alt="flag"
              />
              English
            </span>

            <span
              onClick={() => {
                props.setMessages(az);
                props.setLocale("az");
                setLangDrop(false);
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Azerbaijan_1918.svg"
                alt="flag"
              />
              Azərbaycanca
            </span>

            <span
              onClick={() => {
                props.setMessages(tr);
                props.setLocale("tr");
                setLangDrop(false);
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png"
                alt="flag"
              />
              Türkçe
            </span>
            <span
              onClick={() => {
                props.setMessages(ru);
                props.setLocale("ru");
                setLangDrop(false);
              }}
            >
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
            <p> {translate("choose")}</p>
          </button>

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
                <FormAddProduct
                  categories={props.categories}
                  createCategories={(data) => props.createCategories(data)}
                  setAddPanel={() => setAddPanel(!productAddOpen)}
                  panelOpenClose={props.panelOpenClose}
                  getCategories={() => props.getCategories()}
                  createAddProduct={(data) => props.createAddProduct(data)}
                  getOwnerProduct={() => props.getOwnerProduct()}
                  openLoginPage={props.openLoginPage}
                />
                <button
                  className="closePanel"
                  onClick={() => setAddPanel(!productAddOpen)}
                >
                  {" "}
                  <aiIcon.AiOutlineClose />
                </button>
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
            <button
              className="close"
              onClick={() => setSignUpPopup(!SignUpOpen)}
            >
              <aiIcon.AiOutlineClose />
            </button>
          </div>

          {!props.auth && (
            <button
              className="join"
              onClick={() => setSignUpPopup(!SignUpOpen)}
            >
              {translate("singup")}
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
              {translate("login")}
            </button>
          )}

          {/* Profile menu */}
          {props.user && props.auth && (
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
                  !openProfile
                    ? "profile__content__dropMenu profile-show"
                    : "profile__content__dropMenu"
                }
              >
                <NavLink
                  to="/picbazar/"
                  exact
                  className="dropLink"
                  onClick={() => setProfileMenu(!openProfile)}
                >
                  <MdDashboard /> Dashboard
                </NavLink>
                <NavLink
                  to="/picbazar/profile"
                  className="dropLink"
                  onClick={() => setProfileMenu(!openProfile)}
                >
                  <aiIcon.AiTwotoneShop />
                  Profile
                </NavLink>
                <NavLink
                  to="/picbazar/owner-order"
                  className="dropLink"
                  onClick={() => setProfileMenu(!openProfile)}
                >
                  <FaCalendarCheck /> Own products
                </NavLink>
                <NavLink
                  to="/picbazar/your-order"
                  className="dropLink"
                  onClick={() => setProfileMenu(!openProfile)}
                >
                  <IoBagCheckSharp /> We order
                </NavLink>
                <NavLink
                  to="/picbazar/market-blog"
                  className="dropLink"
                  onClick={() => setProfileMenu(!openProfile)}
                >
                  <FaBlog /> Market Blog
                </NavLink>
                <NavLink
                  to="/picbazar/"
                  className="dropLink"
                  onClick={() => props.logout(props.history.push)}
                >
                  <RiLogoutBoxRFill /> Log out
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className={
          mobileNavClose ? "navbar-mobile navbar-mobile_show" : "navbar-mobile"
        }
      >
        <span
          className="navbar-mobile__close"
          onClick={() => setMobileNavClose(!mobileNavClose)}
        >
          <aiIcon.AiOutlineClose />
        </span>

        <div className="navbar-mobile__img">
          {!props.auth && (
            <button
              className="join"
              onClick={() => setSignUpPopup(!SignUpOpen)}
            >
              {translate("singup")}
            </button>
          )}
          {!props.auth && (
            <button className="join" onClick={() => setJoinPopup(!JoinOpen)}>
              {translate("login")}
            </button>
          )}
          {props.user && props.auth && (
            <>
              <img src={props.user.image} alt="user" />
              <h2>
                {props.user.first_name} {props.user.last_name}
              </h2>
            </>
          )}
        </div>
        <div className="navbar-mobile__menu">
          <NavLink
            to="/picbazar/"
            exact
            className="dropLink"
            onClick={() => setMobileNavClose(!mobileNavClose)}
          >
            <MdDashboard /> Dashboard
          </NavLink>
          <NavLink
            to="/picbazar/profile"
            className="dropLink"
            onClick={() => setMobileNavClose(!mobileNavClose)}
          >
            <aiIcon.AiTwotoneShop />
            Profile
          </NavLink>
          <NavLink
            to="/picbazar/owner-order"
            className="dropLink"
            onClick={() => setMobileNavClose(!mobileNavClose)}
          >
            <FaCalendarCheck /> Own products
          </NavLink>
          <NavLink
            to="/picbazar/your-order"
            className="dropLink"
            onClick={() => setMobileNavClose(!mobileNavClose)}
          >
            <IoBagCheckSharp /> We order
          </NavLink>
          <NavLink
            to="/picbazar/market-blog"
            className="dropLink"
            onClick={() => setMobileNavClose(!mobileNavClose)}
          >
            <FaBlog /> Market Blog
          </NavLink>
          <NavLink to="/picbazar/faq" className="faq"  onClick={() => setMobileNavClose(!mobileNavClose)}>
            <FaQuestionCircle /> {translate("help")}
          </NavLink>
          <NavLink
            to="/picbazar/"
            className="dropLink"
            onClick={() => {props.logout(props.history.push)
                            setMobileNavClose(!mobileNavClose)}}>
            <RiLogoutBoxRFill /> Log out
          </NavLink>
        </div>
      </nav>
    </>
  );
};

let mapStateToProps = (state) => ({
  openLoginPage: state.authentication.openLoginPage,
  closeSignUpPage: state.authentication.closeSignUpPage,
  user: state.userInfo.user,
  auth: state.authentication.auth,
  categories: state.productPage.categories,
  panelOpenClose: state.productPage.panelOpenClose,
  isLoading: state.productPage.isLoading,
});

export default compose(
  connect(mapStateToProps, {
    getRegisterAuth,
    getCategories,
    getLoginAuth,
    logout,
    getOwnerProduct,
    createCategories,
    createAddProduct,
  })
)(withRouter(HeaderContainer));
