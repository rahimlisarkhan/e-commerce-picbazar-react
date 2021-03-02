import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {checkToken} from '../../redux/actions/authActions'


export const AuthRequired = Component => {
  
    let RedirectComponent =(props) =>{

        // console.log(props.authenfication);
        // useEffect(() =>{props.checkToken(props.authenfication)},[])

            // if(!props.authenfication)
            //     return <Redirect to='/welcome/login'/>
            
            return <Component  {...props} />
            
        }
    let mapsStateToProps = (state) => ({authenfication:state})
    
    return connect(mapsStateToProps,{checkToken})(RedirectComponent);
    
}
   

    