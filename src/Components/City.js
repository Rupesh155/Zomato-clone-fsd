import React from 'react'
import './City.css'
const City = () => {
  return (
    <div>

      <div className='container  w-75 mt-5 d-flex justify-content-center align-items-center  flex-column'>
        <h1  style={{fontWeight:400}} >  Popular location in  🇮🇳  Bhopal</h1>
        <p  className='mt-3'   id='text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>


     
        <div className='container   d-flex justify-content-center align-items-center  flex-colu  w-75 mt-5'>
          <div className='row  '>
            <div  className='col-lg-4'>
            <div className='card1'>
              bhopal
            </div>
            </div>
            <div  className='col-lg-4'>
            <div className='card1'>
              bhopal
            </div>
            </div>
            <div  className='col-lg-4'>
            <div className='card1'>
            bhopal
            </div>
            </div>

          
          </div>

        </div>
    


    </div>
  )
}

export default City