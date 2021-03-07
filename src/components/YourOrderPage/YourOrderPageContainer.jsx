import React from 'react'
import OwnOrderPageNavbar from '../OwnOrderPage/OwnOrderPageNavbar'
import YourOrderPageSection from './YourOrderPageSection'

 let YourOrderPageContainer = (props) => {
    return (
        <div className='owner-container' >
        <OwnOrderPageNavbar logout={()=> props.logout(props.history.push)} />
        <YourOrderPageSection ownProduct={props.ownProduct}
                             location={props.location.pathname}
                             categories={props.categories}
                             productRemove={(id) => props.productRemove(id)}
                             getOwnerProduct={()=> props.getOwnerProduct()}
                           />
    </div>
    )
}
export default YourOrderPageContainer