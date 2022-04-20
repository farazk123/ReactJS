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


    const [password, setPwd] = useState("");
    const [cpassword, csetPwd] = useState("");

    
    // Pass Reveal
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [cisRevealPwd, csetIsRevealPwd] = useState(false);


    // Handle Form Submit
    const handleSubmit = (e) => {
        {
        //   this.props.history.push('/home');
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
                     <h3> Reset Password </h3>
                     <div className="customheading">
                     <p >Your New pass can not be same as previous</p>
                     </div>
                    
                     
                     
                     <div className="setpasscont">
                        <label>New Password</label>
                        <br />
                        <input type={isRevealPwd ? "text" : "password"} placeholder="New password" value={password} required onChange={(e) => setPwd(e.target.value)} />
                        <br />
                        <img  title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd((prevState) => !prevState)}
                        />
                     </div>

                     <div className="setpasscont">
                        <label>Cinfirm Password</label>
                        <br />
                        <input type={cisRevealPwd ? "text" : "password"} placeholder="Cinfirm password" value={cpassword} required onChange={(e) => csetPwd(e.target.value)} />
                        <br />
                        <img  title={cisRevealPwd ? "Hide password" : "Show password"} src={cisRevealPwd ? hidePwdImg : showPwdImg} onClick={() => csetIsRevealPwd((prevState) => !prevState)}
                        />
                     </div>
                     <input type="submit" value="Sign Up" />
                     <div className="register">
                        AlreadyY have an account? 
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
