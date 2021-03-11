import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getYourProduct,orderRemove} from '../../redux/actions/orderPageAction'
import {logout} from '../../redux/actions/authActions'
import OwnOrderPageNavbar from '../OwnOrderPage/OwnOrderPageNavbar'
import YourOrderPageSection from './YourOrderPageSection'

 let YourOrderPageContainer = (props) => {


  console.log(props);
    useEffect(() => {
      props.auth && props.getYourProduct()   
    }, [])


    return (
        <div className='owner-container' >
        <OwnOrderPageNavbar logout={()=> props.logout(props.history.push)} />
        <YourOrderPageSection orderProduct={props.orderProduct}
                              location={props.location.pathname}
                              orderRemove={(id) => props.orderRemove(id)}
                              getYourProduct={()=> props.getYourProduct() }
                           />
    </div>
    )
}

let mapStateToProps = (state)=>({
  orderProduct:state.userInfo.orderProduct,
  auth:state.authentication.auth,
  isLoading:state.productPage.isLoading

})


export default compose(connect(mapStateToProps,
  {getYourProduct,
    orderRemove,
   logout}))
   ( YourOrderPageContainer)



