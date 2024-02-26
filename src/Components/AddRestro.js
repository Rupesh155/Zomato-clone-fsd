
// Rup@#12345&*pesh

import React, { useState } from 'react';
import './AddRestro.css'; // Import the CSS file
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://fzdfcdjjbsnwmdvxhfrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZGZjZGpqYnNud21kdnhoZnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODI4MzUsImV4cCI6MjAyNDQ1ODgzNX0.9PKXQYWt1KcDrstMRzxdVrW0AfoLJWzsnXAheNStG7s';
const supabase = createClient(supabaseUrl, supabaseKey);

const AddRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    address: '',
    description: '',
    image: '',
    contactNo: '',
    openingTime: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRestaurantData({ ...restaurantData, image: file });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);
      if (error) {
        throw error;
      }
      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/rest/v1/storage/get/zomato/restaurant_images/${restaurantData.image.name}`;
      console.log(imageUrl,"blocking imaggeee");
      const CorrectImage = await axios.get(imageUrl, {
        headers: {
          'apikey': supabaseKey
        }
      }).catch(error => {
        console.error('Error fetching image:', error.response?.data || error.message);
        return null; // Return null or handle the error as needed
      });
      
      console.log(CorrectImage, "rr");
      
      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:4000/api/restro', { ...restaurantData, image: CorrectImage });
      if (response.ok) {
        alert('Restaurant added successfully');
        // Reset form fields
        setRestaurantData({
          name: '',
          address: '',
          description: '',
          image: '',
          contactNo: '',
          openingTime: ''
        });
      } else {
        alert('Failed to add restaurant');
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Failed to add restaurant');
    }
  };

  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={restaurantData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={restaurantData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={restaurantData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </div>
        <div className="form-group">
          <label>Contact No:</label>
          <input type="text" name="contactNo" value={restaurantData.contactNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Opening Time:</label>
          <input type="datetime-local" name="openingTime" value={restaurantData.openingTime} onChange={handleChange} />
        </div>
        <button type="submit">Add Restaurant</button>
        {/* <img   src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/81f3ff974d82520780078ba1cfbd453a1583259680.avif'/> */}
      </form>
    </div>
  );
};

export default AddRestaurant;

