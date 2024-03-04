

import React from 'react'
import { Link } from 'react-router-dom'
import AddProducts from './AddProduct'
import { useParams,useNavigate } from 'react-router-dom'
const ViewFood = () => {

      let {restroId}=   useParams()
     let navigate=    useNavigate()
    const AddProducts=()=>{
        navigate(`/addr/${restroId}/addProduct`)
        console.log(restroId,"reeee");

    }
  return (
    <div>ViewFood 
       <h2  onClick={AddProducts}>  add products</h2>
    </div>
  )
}

export default ViewFood