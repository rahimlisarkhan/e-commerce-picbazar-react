import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getOwnerProduct} from '../../redux/actions/ownerPageAction'
import {logout} from '../../redux/actions/authActions'
import OwnOrderPageNavbar from './OwnOrderPageNavbar'
import OwnOrderPageSection from './OwnOrderPageSection'



 let OwnOrderPageContainer = (props) => {

    console.log(props);

    useEffect(() => {
        props.auth && props.getOwnerProduct()
    }, [])



    return (
        <div className='owner-container' >
            <OwnOrderPageNavbar logout={()=> props.logout(props.history.push)} />
            <OwnOrderPageSection ownProduct={props.ownProduct}
                                 location={props.location.pathname}
            />
        </div>
    )
}

let mapStateToProps = (state)=>({
    ownProduct:state.userInfo.ownProduct,
    auth:state.authentication.auth
})

export default compose(connect(mapStateToProps,{getOwnerProduct,logout}))( OwnOrderPageContainer)