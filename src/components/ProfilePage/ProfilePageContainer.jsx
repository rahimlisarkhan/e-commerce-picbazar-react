import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getOwnerProduct,productRemove} from '../../redux/actions/ownerPageAction'
import {logout} from '../../redux/actions/authActions'
import OwnOrderPageNavbar from '../OwnOrderPage/OwnOrderPageNavbar'
import ProfilePageSection from './ProfilePageSection'



 let ProfilePageContainer = (props) => {


    useEffect(() => {
        // props.auth && props.getOwnerProduct()
        // props.panelOpenClose && props.getOwnerProduct()

    }, [])



    return (
        <div className='owner-container' >
            <OwnOrderPageNavbar logout={()=> props.logout(props.history.push)} />
            <ProfilePageSection ownProduct={props.ownProduct}
                                 location={props.location.pathname}
                                 categories={props.categories}
                                 productRemove={(id) => props.productRemove(id)}
                                 getOwnerProduct={()=> props.getOwnerProduct()}
                               />
        </div>
    )
}

let mapStateToProps = (state)=>({
    userInfo:state.userInfo.user,
    auth:state.authentication.auth,
    panelOpenClose:state.productPage.panelOpenClose

})

export default compose(connect(mapStateToProps,
                              {getOwnerProduct,
                               productRemove,
                               logout}))
                               ( ProfilePageContainer)