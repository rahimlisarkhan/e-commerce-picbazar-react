import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
import { FaCalendarCheck } from 'react-icons/fa'
import { IoBagCheckSharp } from 'react-icons/io5'
import { RiLogoutBoxRFill } from 'react-icons/ri'

 let OwnOrderPageNavbar = (props) => {

    return (
        <div className='owner-container__navbar' >
            <div className="owner-container__navbar__fixed">
            <NavLink to="/picbazar/" exact className="dropLink">
              <MdDashboard/> Dashboard
              </NavLink>
              <NavLink to="/picbazar/owner-order" className="dropLink" activeClassName="activeNav">
               <FaCalendarCheck/> Own order
              </NavLink>
              <NavLink to="/picbazar/your-order" activeClassName="activeNav" className="dropLink">
                <IoBagCheckSharp/> Your order
              </NavLink>
              <NavLink to="/picbazar/" className="dropLink" onClick={()=> props.logout()}>
                <RiLogoutBoxRFill/> Log out
              </NavLink>
            </div>
        </div>
    )
}
export default OwnOrderPageNavbar