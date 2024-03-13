


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  const [orders, setOrders] = useState([]);
  const [ratings, setRatings] = useState({rating:0});
  console.log(ratings,"rrr");
 

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:4000/api/past-orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching past orders:', error);
      }
    }

    fetchOrders();
  }, []);

  const renderStars = (rating, productId) => {
   
    const stars = [];
    for (let i = 1; i <= 5; i++) {

      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          color={i <= rating ? 'gold' : 'grey'}
          onClick={() => handleRating(productId, i)}
          style={{ cursor: 'pointer' }}
        />
      );
    }
    return stars;
  };

  const handleRating = (productId, rating) => {
    setRatings({ ...ratings, [productId]: rating });

    // setRatings({ ...ratings, rating });
   
  };

  return (
    <div>
      <h1>Past Orders</h1>
      {orders.map((orderWithDetails) => (
        <div key={orderWithDetails.order._id}>
          <h3>Order ID: {orderWithDetails.order._id}</h3>
          <p>Restaurant Name: {orderWithDetails.restaurant.name}</p>
          <p>Restaurant Address: {orderWithDetails.restaurant.address}</p>
          <p>Order Status: {orderWithDetails.order.status}</p>
          <h4>Products:</h4>
          <ul>
            {orderWithDetails.products.map((product) => (
              <li key={product._id}>
                <p>Product Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                {/* Render stars for rating */}
                <div>Rating: {renderStars(ratings[product._id] || 0, product._id)}</div>
            
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Success;
