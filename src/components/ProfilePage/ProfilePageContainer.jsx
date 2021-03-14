import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getOwnerProduct,productRemove} from '../../redux/actions/ownerPageActions'
import {getUser,createUserInfo} from '../../redux/actions/profilePageActions'
import {logout} from '../../redux/actions/authActions'
import OwnOrderPageNavbar from '../OwnOrderPage/OwnOrderPageNavbar'
import ProfilePageSection from './ProfilePageSection'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'



 let ProfilePageContainer = (props) => {

    console.log(props);

    useEffect(() => {
        props.auth && props.getUser()

    }, [])



    return (
        <div className='owner-container' >
            <OwnOrderPageNavbar logout={()=> props.logout(props.history.push)} />
            <ProfilePageSection userInfo={props.userInfo}
                                isLoading ={props.isLoading}
                                getUser={() => props.getUser()}
                                createUserInfo={(data) => props.createUserInfo(data)}
                               />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              className='f-size'
      />
        </div>
    )
}

let mapStateToProps = (state)=>({
    userInfo:state.userInfo.user,
    auth:state.authentication.auth,
    panelOpenClose:state.productPage.panelOpenClose,
    isLoading:state.productPage.isLoading

})

export default compose(connect(mapStateToProps,
                              {getOwnerProduct,
                               productRemove,
                               getUser,
                               createUserInfo,
                               logout}))
                               ( ProfilePageContainer)