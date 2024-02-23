import React, { useState } from 'react'
import img from "./Natural.jpeg";
export default function Forlogin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mob: ""
  });

  const { name, email, password, mob } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveAllData = () => {
    const dataArray = [formData];
    alert("log-in successfully") 
    console.log(dataArray); 
  };
  return (
    <div id='BOX'>
      <div id='box'>
        <div id='techispot-chat'>
         
          <h1>Techispot is TEchMaster</h1>
           <img src={img}></img> 
        </div>
        <div id='border'>

      
        </div>
        <div className='log-inside'>
           <div className='name'>
            <label htmlFor="name">Username :- </label>
            <input type="text" id='name' name="name" value={name} onChange={handleInputChange} />
          </div>
          <div className='email'>
            <label htmlFor="email">Email :- </label>
            <input type="email" id='email' name="email" value={email} onChange={handleInputChange} />
          </div>
          <div className='password'>
            <label htmlFor="password">Password :- </label>
            <input type="password" id='password' name="password" value={password} onChange={handleInputChange} />
          </div>
          <div className='number'>
            <label htmlFor="mob">Mob:- </label>
            <input type="text" id='mob' name="mob" value={mob} onChange={handleInputChange} />
          </div>
          <div>
            <button type='button' onClick={saveAllData}>Log-in</button>
            <button type='submit'>Sign-in</button>
          </div>
          </div>
      </div>
    </div>
    
  )
}
