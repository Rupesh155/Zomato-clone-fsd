import React from 'react'
import './footer.css'
const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

const Footer = () => {
  return (
    <div className='mt-5 footer'>
      <div className='container w-75'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <img style={{ width: '8rem' }} src={zomatologo} />
          </div>
          <div className='w-25 ' id='input'>
            <select name="" id="" className='mx-5' >
              <option value="Chennai">Chennai</option>
              <option value="Jaipur">Jaipur</option>
              <option selected value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
            <select name="" id="">
              <option value="Chennai">Chennai</option>
              <option value="Jaipur">Jaipur</option>
              <option selected value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
            {/* <button> india</button> */}
            {/* <button> Eng</button> */}

          </div>
        </div>

        <div className='text mt-5 d-flex justify-content-between align-items-center'>
          <div>  <p> About Zomato</p>   <p> hello</p>  <p> hello</p>   </div>
          <div>  <p> hello</p>   <p> hello</p>  <p> hello</p>   </div>
          <div>  <p> hello</p>   <p> hello</p>  <p> hello</p>   </div>
          <div>  <p> hello</p>   <p> hello</p>  <p> hello</p>   </div>
          <div>  <p> hello</p>   <p> hello</p>  <p> hello</p>   </div>

        </div>

      </div>
    </div>
  )
}

export default Footer