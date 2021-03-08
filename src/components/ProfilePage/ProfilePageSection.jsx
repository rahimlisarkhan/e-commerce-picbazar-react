import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import * as Yup from "yup";


//VALIDATE MESSAGES
const ProfileForm = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),


});



let ProfilePageSection = (props) => {
  console.log(props.userInfo);
 

  return (
    <div className="profile-container__section">
      <h1>Your Profile</h1>

      <div className="profile-content">
        <Formik
          initialValues={props.userInfo}
          validationSchema={ProfileForm}
          onSubmit={(values) => {
            let data = new FormData();
            data.append("first_name", values.first_name);
            data.append("last_name", values.last_name);
            data.append("email", values.email);
            data.append("image", values.image);
            data.append("username", values.username);

            // props.createUserInfo(data);
            console.log(values);
            props.getUser()
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div className="profile-form">
              <div className="profile-form__imagegroup">
                  {props.userInfo && (
                    <img src={props.userInfo.image} alt="profile image"></img>
                  )}
                  <label htmlFor="image">
                    <FaCloudUploadAlt />
                    <p>
                      <span>Upload</span>
                    </p>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={(e) =>
                        formik.setFieldValue("image", e.target.files[0])
                      }
                    />
                  </label>
                  <p>
                    <ErrorMessage name="image" />
                  </p>
                </div>


              <div className="profile-form__content">
                <div className="profile-form__content__group">
                  <label htmlFor="first_name">name:</label>
                  <Field id="first_name" name="first_name" type="text" />
                  <p>
                    <ErrorMessage name="first_name" />
                  </p>
                </div>
                <div className="profile-form__content__group">
                  <label htmlFor="last_name">surname:</label>
                  <Field id="last_name" name="last_name" type="text" />
                  <p>
                    <ErrorMessage name="last_name" />
                  </p>
                </div>
                <div className="profile-form__content__group">
                  <label htmlFor="username">username:</label>
                  <Field id="username" name="username" type="text" />
                  <p>
                    <ErrorMessage name="username" />
                  </p>
                </div>
                <div className="profile-form__content__group">
                  <label htmlFor="email">email:</label>
                  <Field id="email" name="email" type="email" />
                  <p>
                    <ErrorMessage name="email" />
                  </p>
                </div>

              </div>   
            
              
                <div className="profile-form__btn-group">
                 
                  <button type="submit">Save</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default ProfilePageSection;
