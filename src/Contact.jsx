import React, { useState } from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',   
  })

  const inputevent=(e)=>{
       const {name, value}=e.target;

       setdata((preval)=>{
            return{ preval,[name]:value}
       })
  }

  const formSubmit=(e)=>{
      e.preventDefault();
      alert(`My full name is ${data.fullname} my number is ${data.phone} `)
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
            
                 <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name="fullname" 
                value={data.fullname}
                onChange={inputevent} 
                placeholder="Enter Name"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> Mobile Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" 
                name="phone" 
                value={data.phone}
                onChange={inputevent} 
                placeholder="Mobile number"/>
              </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1"
                   name="email" 
                  value={data.email}
                  onChange={inputevent} 
                  placeholder='mail' aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" 
                  name="msg" 
                  value={data.msg}
                  onChange={inputevent} 
                  rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-success">Submit</button>
             
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
