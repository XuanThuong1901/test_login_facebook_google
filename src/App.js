import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/login";
import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";
import { useEffect } from "react";
import AuthService from "./services/AuthService";
import GoogleRedirect from "./components/GoogleRedirect ";

function App() {
  // useEffect(() => {
  //   AuthService.getRedirectedUser().then((response) => {
  //     console.log("Logged in user:", response.data);
  //   });
  // }, []);
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/auth" element={<GoogleRedirect />} />
            {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> */}
          </Routes>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
