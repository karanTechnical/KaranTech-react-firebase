import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  
  let name, value;
  const getUserData = (event)=>{
   name = event.target.name;
   value = event.target.value;

   setUser({...user, [name]: value })
  }

  const postData = async(e)=>{
  e.preventDefault();

const {name, email, phone, address, message} = user;
 
if(name && email && phone && address && message){

  const res = await fetch("https://karantechnical-default-rtdb.firebaseio.com/reactfirebase.json",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body:JSON.stringify({
      name,
      email,
      phone,
      address,
      message,
    }),
   })

    if(res){
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      })
      alert("Data Strord Succesfully")
    }
}else{
 alert("please fill all the Data")
}

 
  }

  return (
    <>
     <div className='container-contact100'>
     <div className='wrap-contact100'>
     <form className='contact100-form' method='POST'>
     <span className='contact100-form-title'>Contact Us</span>

     <div className='wrap-input100 rs1-wrap-input100'>

     <span className='label-input100'>Your Name</span>
     <input
     className='input100' type="text" name="name" placeholder="Enter Your Name" aut
     value={user.name}
     onChange={getUserData}
     oComplete="off" required />

     <span className='focus-input100'></span>

     </div>

     <div className='wrap-input100 rs1-wrap-input100'>
     
     <span className='label-input100'>Email</span>
     <input
     className='input100' type="text" name="email" placeholder="Enter Your Email" au
     value={user.email}
     onChange={getUserData}
     toComplete="off" required />

     <span className='focus-input100'></span>

     </div>

     <div className='wrap-input100 rs1-wrap-input100'>
     
     <span className='label-input100'>Your Phone Number</span>
     <input
     className='input100' type="text" name="phone" placeholder="Enter Your Name" aut
     value={user.phone}
     onChange={getUserData}
     oComplete="off" required />

     <span className='focus-input100'></span>

     </div>

     <div className='wrap-input100 rs1-wrap-input100'>
     
     <span className='label-input100'>Address</span>
     <input
     className='input100' type="text" name="address" placeholder="Enter Your Address" 
     value={user.address}
     onChange={getUserData}
     autoComplete="off" required />

     <span className='focus-input100'></span>

     </div>

     <div className='wrap-input100 rs1-wrap-input100'>
     
     <span className='label-input100'>Message</span>
     <input
     className='input100' type="text" name="message" placeholder="Enter Your Message" 
     value={user.message}
     onChange={getUserData}
     autoComplete="off" required />

     <span className='focus-input100'></span>

     </div>

     <div className='container-contact100-form-btn'>
     <button className='contact100-form-btn' onClick={postData}>
        <span>Submit <i class="fa-solid fa-arrow-right-long m-l-7"></i> </span>
     </button>

     </div>
     </form>
     <span className='contact100-more'>
        For any question contact our 24/7 call center:
        <span className='contact100-more-highlight'> +601 7681 5643</span>
     </span>

     </div>

     </div>
    </>
  );
}

export default Contact;
