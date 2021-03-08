import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getOwnerProduct,productRemove} from '../../redux/actions/ownerPageActions'
import {logout} from '../../redux/actions/authActions'
import OwnOrderPageNavbar from './OwnOrderPageNavbar'
import OwnOrderPageSection from './OwnOrderPageSection'
import { ToastContainer } from 'react-toastify'



 let OwnOrderPageContainer = (props) => {


    useEffect(() => {
        props.auth && props.getOwnerProduct()
        props.panelOpenClose && props.getOwnerProduct()

    }, [])



    return (
        <div className='owner-container' >
            <OwnOrderPageNavbar logout={()=> props.logout(props.history.push)} />
            <OwnOrderPageSection ownProduct={props.ownProduct}
                                 location={props.location.pathname}
                                 categories={props.categories}
                                 productRemove={(id) => props.productRemove(id)}
                                 getOwnerProduct={()=> props.getOwnerProduct()}
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
    ownProduct:state.userInfo.ownProduct,
    auth:state.authentication.auth,
    panelOpenClose:state.productPage.panelOpenClose

})

export default compose(connect(mapStateToProps,
                              {getOwnerProduct,
                               productRemove,
                               logout}))
                               ( OwnOrderPageContainer)