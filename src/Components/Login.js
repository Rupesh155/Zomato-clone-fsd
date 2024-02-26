import React, { useState } from 'react';
import axios from 'axios'
import { Route, Routes ,json,useNavigate} from 'react-router-dom'


const Login = () => {
     let navigate=  useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    passWord: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login',formData);
      console.log(response.data,"rr");
            localStorage.setItem('userData', JSON.stringify(response.data))
            if(response.data){
              navigate('/')
            }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="passWord"
            placeholder="passWord"
            value={formData.passWord}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
