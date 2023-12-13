import React, { useEffect, useState } from 'react'
import arr from './CardData'
const View = () => {
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
  const [data,SetData]=useState()
  const [search,SetSearch]=useState(arr)
  const fun1=(e)=>{
    SetData(e.target.value)
    // console.log(e.target.value)

  }

  const fun2=()=>{

  let NewA=  arr.filter((str)=>{
    return str.text===data

    })
    SetSearch(NewA)
  }
    return (    
<>

<div className='container  w-75  d-flex justify-content-between align-items-center'>
    <img   style={{width:'8rem'}} src={zomatologo}/>
    <h1> Search here</h1>

</div>
<div className=''>
<form class='container d-flex justify-content-center align-items-center m-2  '>

  <div class="col-lg-4">
    
    <input    onChange={fun1}   name='data'  value={data}  type="text" class="form-control" id="inputPassword2" placeholder="Search"/>
  </div>
  <div class="col-auto mx-2 ">
    <button   onClick={fun2}  class="btn btn-primary ">search</button>
  </div>
</form>
</div>
<section className='container w-75 '>
    <h2 style={{fontWeight:400}} className=''> Best food in the Bhopal </h2>
    <div className='row   d-flex justify-content-between align-items-center'>
      {
        search.map((res)=>{
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


    </div>
</section>
</>
    )
}

export default View
