import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

//VALIDATE MESSAGES
const BlogAdd = Yup.object().shape({
  blogger_full_name: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  short_description: Yup.string().required("Required"),
//   content: Yup.string().required("Required"),
});

let Blogform = (props) => {
  return (
    <Formik
      initialValues={{
        blogger_full_name:
          props.marketName &&
          ` ${props.marketName.first_name} ${props.marketName.last_name}`,
        title: "",
        short_description: "",
        content: "",
      }}
      validationSchema={BlogAdd}
      onSubmit={(values, form) => {
        form.resetForm();
        props.addBlog(values);
      }}
    >

      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div className="form-blog">
            <h1>Add Blog</h1>
            <div className="form-blog__container">
              <div className="form-blog__container__group">
                <label htmlFor="blogger_full_name">Full Market Name:</label>
                <Field
                  id="blogger_full_name"
                  name="blogger_full_name"
                  type="text"
                />
                <p>
                  <ErrorMessage name="blogger_full_name" />
                </p>
              </div>
              <div className="form-blog__container__group">
                <label htmlFor="title">Title:</label>
                <Field id="title" name="title" type="text" />
                <p>
                  <ErrorMessage name="title" />
                </p>
              </div>
              <div className="form-blog__container__group">
                <label htmlFor="short_description">Short description</label>
                <Field
                  id="short_description"
                  name="short_description"
                  type="text"
                />
                <p>
                  <ErrorMessage name="short_description" />
                </p>
              </div>
              <div className="form-blog__container__group">
                <label htmlFor="content">Content:</label>
                <Field component="textarea" id="content" name="content" />
                <p>
                  <ErrorMessage name="content" />
                </p>
              </div>
            </div>
            <div className="form-blog-btn">
              <button type="button" onClick={() => props.setBlogForm()}>
                Cancel
              </button>
              <button disabled={props.panelOpenClose}>Create Blog</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Blogform;
