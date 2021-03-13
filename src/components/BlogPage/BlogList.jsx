import React from "react";

function BlogList(props) {

    console.log(props);
  return (
    <div className="blog-card">
        <div className="blog-card__market">
        <img
          src="https://img.freepik.com/free-vector/couple-store-kiosk-with-flowers-avatar-character_25030-30150.jpg?size=338&ext=jpg"
          alt="marketlogo"
        />
        <h2> {props.blog.blogger_full_name} </h2>
      </div>

        <div className="blog-card__info">
            <h3> {props.blog.title}</h3>
            <h4>{props.blog.short_description} </h4>
            <p>
            {props.blog.content}
            </p>
        </div>
        <span>{props.blog.created_at}</span>
    </div>
  );
}

export default BlogList;
