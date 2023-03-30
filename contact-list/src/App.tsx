import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from './Components/RoutesApp';
import { ContactRegister } from './Components/ContactRegister';
import { Interface } from 'readline';
import { iUserContext, UserContext } from './Contexts/UserContext';


function App() {
 

 
  return (
    
    <>
     {/* <ContactRegister /> */}
      <RoutesApp
      />
      
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
     
    </>
  );
}

export default App;
