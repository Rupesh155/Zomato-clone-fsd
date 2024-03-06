import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const ViewFood = () => {
  let navigate=    useNavigate()

  // console.log(useParams(),"rrrrrrrr");
 let {restroId}=  useParams()

  let addProduct=()=>{
    navigate(`/view/${restroId}/addProduct`)

  }
  return (
    <div>


      <button     onClick={addProduct} >
  add product
      </button>
    </div>
  )
}

export default ViewFood