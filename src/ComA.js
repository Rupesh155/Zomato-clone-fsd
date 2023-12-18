import React, { useContext } from 'react'
import ComB from './ComB'
import Context from './Context'

const ComA = () => {

  let data=  useContext(Context)
    
  return (
    <div>
       <h2> {data}</h2>
        <ComB   />
    </div>
  )
}

export default ComA