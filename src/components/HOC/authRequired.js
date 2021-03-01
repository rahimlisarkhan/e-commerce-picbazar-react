import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {checkToken} from '../../redux/action/index'


export const AuthRequired = Component => {
  
    let RedirectComponent =(props) =>{
        useEffect(() =>{props.checkToken(props.authenfication)},[])

            if(!props.authenfication)
                return <Redirect to='/welcome/login'/>
            
            return <Component  {...props} />
        }
    
    return connect(mapsStateToProps,{checkToken})(RedirectComponent);
}
   
let mapsStateToProps = (state) => ({authenfication:state.authenfication.auth})
    