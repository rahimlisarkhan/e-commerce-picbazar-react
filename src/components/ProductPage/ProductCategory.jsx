import React from "react";

let ProductCategory = (props) => {
  return (
    <>
      {props.categories &&
        props.categories.map((el) => (
          <p key={el.id}  onClick={() => props.getProductCategories(el.id)}>
            <img
              src={el.icon_png}
              alt="category"
            />
            {el.title}
          </p>
        ))}
    </>
  );
};

export default ProductCategory;
