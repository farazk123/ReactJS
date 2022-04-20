import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./form.css";
import pic from "./images/left_img.png";
import formlogo from "./images/formlogo.png";
import showPwdImg from "./images/show.svg";
import hidePwdImg from "./images/hide.svg";
import { Link } from "react-router-dom";


function App() {
    //use state set state
    const [fname, setName] = useState('');
    const [lname, setlname] = useState('');
    const [company, setComapny] = useState('');
    const [ytitle, setYtitle] = useState('');
    const [password, setPwd] = useState("");

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
    };

    // Handling the last change
    const handleNamel = (e) => {
        setlname(e.target.value);
    };

    // Handling the company change
    const handleCompany = (e) => {
        setComapny(e.target.value);
    };

    // Handling the title change
    const hadleTitle = (e) => {
        setYtitle(e.target.value);
    };
    
    // Handling Email change
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Pass Reveal
    const [isRevealPwd, setIsRevealPwd] = useState(false);


    // Handle Form Submit
    const handleSubmit = (e) => {
        {
        alert('Thank for the registration :"' + fname + '"');
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
               <div className="custom-form register">
                  <div className="formlogo">
                     <img src={formlogo} />
                  </div>
                  <form onSubmit={(e) =>
                     { handleSubmit(e);}} >
                     <div className="float-container rgstr">
                        <div className="float-child left">
                           <label>Fisrt Name</label>
                           <br />
                           <input type="text" placeholder="Your first name" value={fname} required onChange={handleName} />
                           <br />
                           <br />
                        </div>
                        <div className="float-child right">
                           <label>Last Name</label>
                           <br />
                           <input type="text" placeholder="Your last name"value={lname} required onChange={handleNamel} />
                           <br />
                           <br />
                        </div>
                     </div>
                     <label>Company Name</label>
                     <input type="text"  placeholder="Your company name"  value={company} required onChange={handleCompany} />
                     <br />
                     <br />
                     <label>Your Title</label>
                     <br />
                     <input type="text" placeholder="Enter your title" value={ytitle} required onChange={hadleTitle} />
                     <br />
                     <br />
                     <label>Email Address</label>
                     <br />
                     <input type="email" placeholder="Your email address" value={email} required onChange={(e) => {handleEmailChange(e);}} />
                     <br />
                     <div className="setpasscont">
                        <label>Password</label>
                        <br />
                        <input type={isRevealPwd ? "text" : "password"} placeholder="Enter your password" value={password} required onChange={(e) => setPwd(e.target.value)} />
                        <br />
                        <img  title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd((prevState) => !prevState)}
                        />
                     </div>
                     <input type="submit" value="Sign Up" />
                     <div className="register">
                        Already have an account? 
                        <Link to="/">
                        Sign in now </Link>
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
