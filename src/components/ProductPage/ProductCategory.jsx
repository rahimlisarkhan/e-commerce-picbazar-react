import React from "react";

let ProductCategory = (props) => {
  return (
    <>
      <p onClick={() => props.getProducts()}>
            <img
              src='https://static.thenounproject.com/png/1603774-200.png'
              alt="category"
            />
            All
      </p>
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
