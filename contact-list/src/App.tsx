import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.min.css";
import { Register } from './Pages/Register';
import { ToastContainer } from "react-toastify";
import { RoutesApp } from './Components/RoutesApp';

function App() {
  return (
    
    <>
     
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
