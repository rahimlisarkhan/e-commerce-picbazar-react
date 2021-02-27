import React, { useState } from "react";
import logo from "../img/logo.svg";
import JoinPopup from "./Auth/JoinPopup";
import SignUpPopup from "./Auth/SignUpPopup";

const Header = () => {
  const [langOpen, setLangDrop] = useState(false);
  const [JoinOpen, setJoinPopup] = useState(false);
  const [SignUpOpen, setSignUpPopup] = useState(false);

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
        {SignUpOpen && <SignUpPopup/>}
        <button className="join" onClick={() => setSignUpPopup(!SignUpOpen)}>
          Sign up
        </button>

        {/* join popup */}
        {JoinOpen && <JoinPopup />}
        <button className="join" onClick={() => setJoinPopup(!JoinOpen)}>
          Join
        </button>
      </div>
    </nav>
  );
};

export default Header;
