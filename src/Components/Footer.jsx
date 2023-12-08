import React from 'react'
const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

const Footer = () => {
  return (
    <div className='mt-5'>
         <div className='container w-75'>
           <div className='d-flex justify-content-between align-items-center'>
           <div>
           <img   style={{width:'8rem'}} src={zomatologo}/>
           </div>
           <div>
            <button> india</button>
            <button> Eng</button>

           </div>
           </div>

           <div className='text mt-5 d-flex justify-content-between align-items-center'>
              <div>  <p> hello</p>   <p> hello</p>  <p> hello</p>   </div>
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