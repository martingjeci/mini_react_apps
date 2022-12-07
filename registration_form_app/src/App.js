import React , { useState } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName : event.target.value})
  };

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName : event.target.value})
  };

  const handleEmailInputChange = (event) => {
    setValues({...values, email : event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="App">

      <div className='container'>

        {submitted && valid ? <div className='success'>Success! Thank you for registering</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value = {values.firstName}
          type='text' 
          placeholder='First Name' 
          className='btn'
        ></input>
        {submitted && !values.firstName?<span className='span'>Please enter a first name</span>:null}

        <input 
          onChange={handleLastNameInputChange}
          value = {values.lastName}
          type='text' 
          placeholder='Last Name' 
          className='btn'
        ></input>
        {submitted && !values.lastName?<span className='span'>Please enter a last name</span>:null}

        <input 
          onChange={handleEmailInputChange}
          value = {values.email}
          type='email' 
          placeholder='E-mail' 
          className='btn'
        ></input>
        {submitted && !values.email?<span className='span'>Please enter a email</span>:null}
        

        <button className='btn1' onClick={handleSubmit}>Register</button>
        
      </div>
  
    </div>
  );
}

export default App;
