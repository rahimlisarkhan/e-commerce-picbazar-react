import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getYourProduct} from '../../redux/actions/orderPageAction'
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
   logout}))
   ( YourOrderPageContainer)



