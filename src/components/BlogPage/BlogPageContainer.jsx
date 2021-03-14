import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getBlogs,addBlog} from '../../redux/actions/blogPageAction'
import {logout} from '../../redux/actions/authActions'
import OwnOrderPageNavbar from '../OwnOrderPage/OwnOrderPageNavbar'
import BlogPagePageSection from './BlogPagePageSection'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


 let YourOrderPageContainer = (props) => {


  console.log(props);
    useEffect(() => {
      props.auth && props.getBlogs()   
    }, [])


    return (
        <div className='owner-container' >
        <OwnOrderPageNavbar  logout={()=> props.logout(props.history.push)} />
        <BlogPagePageSection blogs={props.blogs}
                             isLoading={props.isLoading}
                             marketName={props.marketName}
                             addBlog={(data) => props.addBlog(data)}
        />
        <ToastContainer/>
    </div>
    )
}

let mapStateToProps = (state)=>({
  blogs:state.userInfo.blogs,
  auth:state.authentication.auth,
  isLoading:state.productPage.isLoading,
  marketName:state.userInfo.user,
  isLoading:state.productPage.isLoading
})


export default compose(connect(mapStateToProps,
  {getBlogs,
    addBlog,
   logout}))
   ( YourOrderPageContainer)



