import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, PropertyDetails } from "./pages";
import WhatsAppButton from "./components/wp/index";



const App = () => {


  return (
    <Router>
      
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
       
      </Routes>
    </Router>
  );
};

export default App;
