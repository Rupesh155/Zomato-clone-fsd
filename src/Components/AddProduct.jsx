import React, { useState } from 'react';
import './AddRestro.css'; // Import the CSS file
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://fzdfcdjjbsnwmdvxhfrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZGZjZGpqYnNud21kdnhoZnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODI4MzUsImV4cCI6MjAyNDQ1ODgzNX0.9PKXQYWt1KcDrstMRzxdVrW0AfoLJWzsnXAheNStG7s';
const supabase = createClient(supabaseUrl, supabaseKey);

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('product_images/' + productData.image.name, productData.image);
      if (error) {
        throw error;
      }

      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/product_images/${productData.image.name}`;
      console.log(imageUrl);

      // Save product data to MongoDB with image URL
      const response = await axios.post('http://localhost:4000/api/products', { ...productData, image: imageUrl });
      if (response) {
        alert('Product added successfully');
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="price" value={productData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
