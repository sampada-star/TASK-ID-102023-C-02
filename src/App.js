import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [email, setEmail] = useState("bac@gmail.com");
  const [message, setMessage] = useState(" ");
  function handleEmail(event) {
    let new_Email = event.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      setMessage("Please, enter a valid email!");
    } else {
      setMessage("");
    }
  }
  return (
    <div>
     
      
    
    <h2 style = {{ textAlign : " center " }}>Login Details</h2>
    <div className="App">
       {
       
      <form>
       <label>
        Name:&nbsp;
        <input type="text" name="fname">
        </input>
       </label>
       <br></br>
       <br></br>
       <label>
        Password:&nbsp;
        <input type="password" name="pass">
        </input>
       </label>
       <br></br>
       <br></br>
       
       <div style = {{ color: "red" }}> {message} </div>
       <label>
        Email:&nbsp;
       </label>
      <input type = "email" value = {email} onChange = {handleEmail} />
      <div> The email entered is {email} </div>
       <br></br>
       <br></br>
       <input type="submit">
       </input>
      
      </form>
      
      
      }
      
    </div>
    </div>
  );
};

export default App;