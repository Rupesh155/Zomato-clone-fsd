
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Success = () => {
  const [orders, setOrders] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:4000/api/past-orders');
        setOrders(response.data);

        const initialRatings = response.data.map((order) => {
          const productsRatings = {};
          order.products.forEach((product) => {
            productsRatings[product._id] = { rating: 0, productId: product._id };
          });
          return {
            orderId: order.order._id,
            productsRatings
          };
        });
        setRatings(initialRatings);
      } catch (error) {
        console.error('Error fetching past orders:', error);
      }
    }

    fetchOrders();
  }, []);

  const renderStars = (orderId, productId) => {
    const orderRatings = ratings.find((rating) => rating.orderId === orderId);
    if (!orderRatings) return null;

    const { rating } = orderRatings.productsRatings[productId] || { rating: 0 };
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          color={i <= rating ? 'gold' : 'grey'}
          onClick={() => handleRating(orderId, productId, i)}
          style={{ cursor: 'pointer' }}
        />
      );
    }
    return stars;
  };

  const handleRating = async (orderId, productId, rating) => {
    try {
      const response = await axios.post('http://localhost:4000/api/ratings', { orderId, productId, rating });
      console.log('Rating saved:', response.data);
      setRatings((prevRatings) => {
        const updatedRatings = prevRatings.map((orderRatings) => {
          if (orderRatings.orderId === orderId) {
            return {
              ...orderRatings,
              productsRatings: {
                ...orderRatings.productsRatings,
                [productId]: { rating, productId }
              }
            };
          }
          return orderRatings;
        });
        return updatedRatings;
      });
    } catch (error) {
      console.error('Error saving rating:', error);
    }
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
                <div>Rating: {renderStars(orderWithDetails.order._id, product._id)}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Success;

