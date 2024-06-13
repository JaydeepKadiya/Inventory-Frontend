import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ForgetPassword from "./components/forgetPassword";
import ResetPassword from "./components/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/reset-password/:token" component={ResetPassword} />
      </Routes>
    </Router>
  );
}

export default App;
