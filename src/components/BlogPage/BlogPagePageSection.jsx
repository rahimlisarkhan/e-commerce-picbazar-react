import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaPlusCircle } from 'react-icons/fa';
import ProductList from '../ProductPage/ProductList';
import Blogform from './Blogform';
import BlogList from './BlogList';

let BlogPagePageSection = (props) => {

    const [blogForm, setBlogForm] = useState(false)
    

    return (
        <div className="owner-container__section">
            <h1>Market Blog</h1>
            <span className='totalAmount' >Total blog {props.blogs && props.blogs.length} </span>

            <div className="blog-section">
                {props.blogs && props.blogs.slice(0).reverse().map(el => <BlogList key={el.id} blog={el} /> )}
            </div>

            {/* blog form */}
            <div className={blogForm ? "blog-form blog-show" : "blog-form"}>
                    <Blogform marketName={props.marketName}
                              setBlogForm={()=> setBlogForm(!blogForm)}
                              addBlog={props.addBlog}
                    />
            </div>

            <button className='blog-add' onClick={() => setBlogForm(!blogForm)} >
                {blogForm ? <FaMinus/> : <FaPlus/>}
                </button>
        </div>
    );
}

export default BlogPagePageSection;