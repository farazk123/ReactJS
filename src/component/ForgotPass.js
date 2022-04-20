import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./form.css";
import pic from "./images/left_img.png";
import formlogo from "./images/formlogo.png";
import { Link } from "react-router-dom";



function App(props) {

    
    // Handling Email change
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    // Handle Form Submit
    const handleSubmit = (e) => {
        {
         window.location.href = "/Resetpass"; 
         
        }
        e.preventDefault();
    };


  return (
    <div className="App">
   <header className="App-header"></header>
   <content>
      <div className="container-fluid">
         <div className="row">
            <div className="col-sm-6 custom">
               <div className="lef-img">
                  <img src={pic} />
               </div>
            </div>
            <div className="col-sm-6 custombackground ">
               <div className="custom-form forgot-pass">
                  <div className="formlogo">
                     <img src={formlogo} />
                  </div>
                  <form onSubmit={(e) =>
                     { handleSubmit(e);}} >
                     <h3> Forgot Password </h3>
                     <div className="customheading">
                        <p>Enter Your Email to reset your pass</p>
                        </div>
                     
                     <label>Email Address</label>
                     <br />
                     <input type="email" placeholder="Your email address" value={email} required onChange={(e) => {handleEmailChange(e);}} />
                     <br />
                     
                     <input type="submit" value="Sign Up" />
                     <div className="register">
                        Remember your password? 
                        <Link to="/">
                        Sign in now</Link>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </content>
</div>
  );
}

export default App;
