import React from 'react'

const Login = () => {
  return (
    <div   className='container'>

<div class=" mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>


</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>

      
    </div>
  )
}

export default Login