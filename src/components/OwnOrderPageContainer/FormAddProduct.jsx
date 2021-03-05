import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { AiOutlinePlusCircle } from 'react-icons/ai';


//VALIDATE MESSAGES
const OwnerAddProduct = Yup.object().shape({
    
    title: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(10, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
    
    category: Yup.string()
      .required("Required"),
    
    price: Yup.string()
      .required("Required"),
    
    main_image: Yup.string()
      .required("Required"),
    

    amount_by_unit: Yup.string()
      .required("Required"),
    
    unit: Yup.string()
      .max(6, "Too Long!")
      .required("Required"),
  
  
  
  });





let FormAddProduct = (props) => {
    const [viewPassword,setPasswordView ] = useState(false)
    

return (

    <Formik
      initialValues={{
        title: "",
        description: "",
        password: "",
        category:"",
        price: "",
        discount_price: "",
        main_image: "",
        amount_by_unit:"",
        unit:"",
      }}
      validationSchema={OwnerAddProduct}
      
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
            <div className="form-owner-add-product">
                <h1>Add Product</h1>
                
                <div className="form-product uploadsize">
                    <h3>Upload your Product image here</h3>

                    <div className="form-product__content uploadsize__img">
                        <div className='form-product__content__group'>
                            <label  htmlFor="main_image">

                            
                                <FaCloudUploadAlt/>
                                <p> <span>Drag/Upload</span> your image here.</p>
                                <input  type='file'
                                        id='main_image'
                                        name='main_image'
                                        onChange={(e) => formik.setFieldValue("main_image",e.target.files[0])} />
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className="form-product-text ">
                    <h3>Add your Product description and necessary information from here</h3>

                    <div className="form-product-text__content">
                        <div className='form-product-text__content__group'>
                             <label htmlFor="title">Title</label>
                             <Field id="title" name='title' type="text"/>
                             <p><ErrorMessage name="title" /></p>
                        </div>
                        <div className='form-product-text__content__group'>
                             <label htmlFor="category">Category <AiOutlinePlusCircle/></label>
                                <select id="category" name="category">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                             <p><ErrorMessage name="category" /></p>
                        </div>
                        <div className='form-product-text__content__group'>
                             <label htmlFor="price">Price</label>
                             <Field id="price" name='price' type="number" placeholder='$'/>
                             <p><ErrorMessage name="price" /></p>
                        </div>
                        <div className='form-product-text__content__group'>
                             <label htmlFor="discount_price">Discount price</label>
                             <Field id="discount_price" name='discount_price' type="text"/>
                             <p><ErrorMessage name="discount_price" /></p>
                        </div>
                        <div className='form-product-text__content__group'>
                             <label htmlFor="amount_by_unit">Amount by unit</label>
                             <Field id="amount_by_unit" name='amount_by_unit' type="text"/>
                             <p><ErrorMessage name="amount_by_unit" /></p>
                        </div>
                        <div className='form-product-text__content__group'>
                             <label htmlFor="unit">Unit</label>
                             <Field id="unit" name='unit' type="text"/>
                             <p><ErrorMessage name="unit" /></p>
                        </div>
                        <div className='form-product-text__content__group'>
                             <label htmlFor="description">Description</label>
                             <Field id="description" className='input-h' name='description' type="text"/>
                             <p><ErrorMessage name="description" /></p>
                        </div>


                    </div>

                    
                </div>
                
                <div className="form-btn-group">
                    <button>Cancel</button>
                    <button>Create Product</button>

                </div>
            </div>
        </Form>
  )}

</Formik>
        
    );
}

export default FormAddProduct;