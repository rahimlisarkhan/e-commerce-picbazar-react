import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";


//VALIDATE MESSAGES
const OwnerAddCategories = Yup.object().shape({
    
    title: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    
    icon_png: Yup.string()
      .required("Required"),
    
  });





let FormAddCategories = (props) => {

    

return (
    <>
      <Formik
        initialValues={{
          title: "",
          icon_png: "",
        }}
        validationSchema={OwnerAddCategories}
        
        onSubmit={(values,form) => {

          let data = new FormData();
              data.append("title", values.title);
              data.append("icon_png", values.icon_png);

        //   form.resetForm()    
          props.createCategories(data)
          props.getCategories()
      }}
      >


      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
              <div className="form-categories-add-content">
                <h1>Add Category</h1>


                <div className='form-categories-add-content__group'>
                    <label htmlFor="title">Title:</label>
                    <Field id="title" name='title' type="text"/>
                    <p><ErrorMessage name="title" /></p>
                </div>

                <div className='form-categories-add-content__group'>
                    <label  htmlFor="icon_png">
                        <FaCloudUploadAlt/>
                        <p> <span>Icon/Upload</span> </p>
                        <input  type='file'
                                id='icon_png'
                                name='icon_png'
                                onChange={(e) => formik.setFieldValue("icon_png",e.target.files[0])} />
                                 
                    </label>
                    <p><ErrorMessage name="icon_png" /></p>
                </div>
                  
                
                <div className="form-categories-add-content__btn-group">
                    <button onClick={()=> props.setCategoryPanelView()} >Cancel</button>
                    <button type='submit'>Create Category</button>
                </div>
            </div>
        </Form>
    )}
  </Formik>

  </>
    );
}

export default FormAddCategories;