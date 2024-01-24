import React, { useEffect, useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import axios from 'axios';


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [productData, setProductData] = useState([]);

  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  useEffect(() => {
    axios.get('http://localhost:8557/api/products/productinfo') // Replace with your backend API endpoint
      .then((response) => {
        // Handle the API response here
        const products = response.data;
        setProductData(products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={title} />
      <button onClick={addToBasket} className="product__button">Add to Cart</button>
    </div>
  );
}

export default Product;
