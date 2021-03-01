import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as aiIcon from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as Yup from "yup";

//VALIDATE MESSAGES
const UserLogin = Yup.object().shape({
    
    username: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
 
    
    password: Yup.string()
      .min(8, "Please have at least 8 symbols")
      .max(15, "Very good!")
      .required("Required"),
  
  });




let JoinPopup = (props) => {
   
    const [viewPassword,setPasswordView ] = useState(false)



    return (
        <Formik initialValues={{username: "",password: ""}}
                validationSchema={UserLogin}
                onSubmit={(values) => {props.getLoginAuth(values)}}>


    {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
        <div className="form-content">
            <div className="form-desc">
                <h1>Welcome Back</h1>
                <h2>Login with your username & password</h2>
            </div>

            <div className="form-group">
                <aiIcon.AiOutlineUser className='joinIcon'/>
                <Field name='username' type="text" placeholder='username'/>
                <p><ErrorMessage name="username" /></p>
            </div>

            <div className="form-group">
                <RiLockPasswordLine className='joinIcon'/>
                <Field name='password' type={!viewPassword ? "password" : "text"} placeholder='password'/>
                <p><ErrorMessage name="password" /></p>
                <span className='password-view'
                      onClick={() => setPasswordView(!viewPassword)}>
                    {viewPassword
                     ?<aiIcon.AiOutlineEye/>
                     :< aiIcon.AiOutlineEyeInvisible />}
                </span>
            </div>

            <button> Continue </button>

        </div>
        </Form>
    )}
    </Formik>
    );
}

export default JoinPopup;