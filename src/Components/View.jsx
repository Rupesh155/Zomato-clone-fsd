import React, { useEffect, useState } from 'react'
import arr from './CardData'
const View = () => {


    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    return (
<>

<div className='container  w-75  d-flex justify-content-between align-items-center'>
    <img   style={{width:'8rem'}} src={zomatologo}/>
    <h1> Search here</h1>

</div>
<div className=''>
<form class='container d-flex justify-content-center align-items-center m-2  '>

  <div class="col-lg-4">
    
    <input type="text" class="form-control" id="inputPassword2" placeholder="Search"/>
  </div>
  <div class="col-auto mx-2 ">
    <button type="submit" class="btn btn-primary ">search</button>
  </div>
</form>
</div>
<section className='container w-75 '>
    <h2 style={{fontWeight:400}} className=''> Best food in the Bhopal </h2>
    <div className='row   d-flex justify-content-between align-items-center'>
      {
        arr.map((res)=>{
          return(<>
          <div class="card mt-4"  style={{width:300}}>
  <img src={res.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{res.text}</p>
  </div>
</div>
          </>)
        })
      }
  
{/* <div class="card mt-4"  style={{width:300}}>
  <img src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

    </div>
</section>
</>
    )
}

export default View
