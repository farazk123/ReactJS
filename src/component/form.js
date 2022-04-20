import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./form.css";
import pic from "./images/left_img.png";
import formlogo from "./images/formlogo.png";
import showPwdImg from "./images/show.svg";
import hidePwdImg from "./images/hide.svg";
import { Link } from 'react-router-dom'

function App() {

      //use state set state
      const [password, setPwd] = useState("");
      const [email, setEmail] = useState("");

      // Handling the email change
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      // Pass Reveal
      const [isRevealPwd, setIsRevealPwd] = useState(false);


      // Handle Form Submit
      const handleSubmit = (e) => {
        {
          alert('A form was submitted by Email :"' + email + '"');
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
               <div className="custom-form">
                  <div className="formlogo">
                     <img src={formlogo} />
                  </div>
                  <form onSubmit={(e) =>
                     { handleSubmit(e); }} >
                     <h3> Account Login </h3>
                     <label>Email Address</label>
                     <br />
                     <input type="email" placeholder="Your email address" value={email} required onChange={(e) => { handleEmailChange(e); }} />
                     <br />
                     <div className="setpasscont">
                        <label>Password</label>
                        <br />
                        <input type={isRevealPwd ? "text" : "password"}  placeholder="Enter your password" value={password} required onChange={(e) => setPwd(e.target.value)} />
                        <br />
                        <img  title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd((prevState) => !prevState)}  />
                     </div>
                     <div className="float-container">
                        <div className="float-child">
                           <input name="remember" type="checkbox" />
                           <span>Remember me</span>
                        </div>
                        <div className="float-child">
                           <div className="forgot"><Link to="/ForgotPass">Forgot password?</Link></div>
                        </div>
                     </div>
                     <input type="submit" value="Sign In" />
                     <div className="register">
                        Don’t have an account? 
                        <Link to="/register">
                        Sign up now</Link>
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