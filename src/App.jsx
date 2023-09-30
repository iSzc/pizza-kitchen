import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./components/AppContext";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Login from "./components/Signup/Login";
import CreateAccount from "./components/Signup/CreateAccount";
import Logout from "./components/Signup/Logout";
import Recover from "./components/Signup/Recover";
import BasePizza from "./components/CreatePizza/BasePizza";
import Toppings from "./components/CreatePizza/Toppings";
import OrderCompleted from "./components/CreatePizza/OrderCompleted";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createacc" element={<CreateAccount />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/recover" element={<Recover />} />
          <Route exact path="/basepizza" element={<BasePizza />} />
          <Route exact path="/toppings" element={<Toppings />} />
          <Route exact path="/finished" element={<OrderCompleted />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
