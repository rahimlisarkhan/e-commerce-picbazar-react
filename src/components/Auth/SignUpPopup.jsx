import React, { useState } from 'react';
import * as aiIcon from 'react-icons/ai';
import { RiFolderUploadFill, RiLockPasswordLine } from 'react-icons/ri';
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";


//VALIDATE MESSAGES
const UserSignUp = Yup.object().shape({
    
    username: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    first_name: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    
    last_name: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    
    password: Yup.string()
      .min(8, "Please have at least 8 symbols")
      .max(15, "Very good!")
      .required("Required"),
  
  
    email: Yup.string().email("Invalid email").required("Required"),
  
  
  });





let SignUpPopup = (props) => {
    const [viewPassword,setPasswordView ] = useState(false)
    

return (

    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        image: "",
      }}
      validationSchema={UserSignUp}
      
      onSubmit={(values) => {

        let data = new FormData();
            data.append("first_name", values.first_name);
            data.append("last_name", values.last_name);
            data.append("username", values.username);
            data.append("password", values.password);
            data.append("image", values.image);
            data.append("email", values.email);

        props.getRegisterAuth(data);

    }}
    >


    {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div className="form-content form-size">
            
              <div className="form-desc">
                  <h1>Welcome</h1>
                  <h2>Sign up with your username, email & more</h2>
              </div>
              <div className="form-group">
                  <aiIcon.AiOutlineUser className='joinIcon'/>
                  <Field name='first_name' type="text" placeholder='marka name'/>
                  <p><ErrorMessage name="first_name" /></p>
              </div>
              <div className="form-group">
                  <aiIcon.AiOutlineUser className='joinIcon'/>
                  <Field name='last_name' type="text" placeholder='store license'/>
                  <p><ErrorMessage name="last_name" /></p>
              </div>
              <div className="form-group">
                  <aiIcon.AiOutlineUser className='joinIcon'/>
                  <Field name='username' type="text" placeholder='username'/>
                  <p><ErrorMessage name="username" /></p>
              </div>
              <div className="form-group">
                  <aiIcon.AiOutlineMail className='joinIcon'/>
                  <Field name='email' type="email" placeholder='email'/>
                  <p><ErrorMessage name="email" /></p>
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
              <div className="form-group">
              <label htmlFor="image">
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={(e) =>formik.setFieldValue("image", e.target.files[0])}/>
                    <RiFolderUploadFill /> <span>Upload market logo </span>
                  </label>
                  <p><ErrorMessage name="image" /></p>
              </div>

              <button type="submit"> Continue </button>
          </div>
         
        </Form>
  )}

</Formik>
        
    );
}

export default SignUpPopup;