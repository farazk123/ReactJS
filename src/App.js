import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Form from "./component/form";
import Register from "./component/register";
import ForgotPass from "./component/ForgotPass";
import ResetPass from "./component/ResetPass";
const App = () => {
  return( 
  <>
<Router>
      
        <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/login" element={<Form/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/ForgotPass" element={<ForgotPass/>}/>
          <Route exact path="/ResetPass" element={<ResetPass/>}/>
        </Routes>
      
</Router>

  </>
  )
}

export default App