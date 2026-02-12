import React from 'react'

function LoginPage() {
  return (
    <div>
        <label>UserName</label>
        <input type='text' className='border border-primary'/>
        <br/>
        
        <label>Pass</label>
        <input type='number'className = 'border border-primary'/>
        <br/>

        <button type='submit' className='bg bg-success mt-3 border '>submit</button>
    </div>
  )
}

export default LoginPage