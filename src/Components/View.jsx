

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
  let navigate=  useNavigate()
  const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
  const [data, SetData] = useState('');
  const [search, SetSearch] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/api/restro');
        console.log(response.data,"resss");
      
        SetSearch(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    SetData(e.target.value);
  };

  const handleSubmit = () => {
    let NewA = search.filter((str) => {
      return str.text === data;
    });
    SetSearch(NewA);
  };




  return (
    <>
      <div className='container  w-75  d-flex justify-content-between align-items-center'>
        <img style={{ width: '8rem' }} src={zomatologo} alt='Zomato Logo'/>
        <h1> Search here</h1>
      </div>
      <div className=''>
        <form className='container d-flex justify-content-center align-items-center m-2  '>
          <div className="col-lg-4">
            <input onChange={handleChange} name='data' value={data} type="text" className="form-control" id="inputPassword2" placeholder="Search"/>
          </div>
          <div className="col-auto mx-2 ">
            <button onClick={handleSubmit} className="btn btn-primary">search</button>
          </div>
        </form>
      </div>
      <section className='container w-75 '>
        <h2 style={{ fontWeight: 400 }} className=''> Best food in the Bhopal </h2>
        <div className='row   d-flex justify-content-between align-items-center'>

{/* 
          {
            search.map((  data)=>{
              return(<>

              <img   src={data.image}/>
              <h4>   {data.name}</h4>
              <p> {data.address}</p>

              </>)

            })
          } */}



        {search.map((res, index) => (
  <div    key={index} className="card mt-4" style={{ width: '18rem' }}>
    <img src={res.image} className="card-img-top" alt="Restaurant" />
    <div className="card-body">
  
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Address: {res.address}</li>
      <li className="list-group-item">Contact: {res.contactNo}</li>
      <li className="list-group-item">Opening Time: {res.openingTime}</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">View Details</a>
    </div>
  </div>
))}
        </div>
      </section>
    </>
  );
};

export default View;

