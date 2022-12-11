// import logo from './logo.svg';
// import './App.css';
import axios from "axios";
import React,{useEffect,useState} from "react";
import DataFile from "./components/DataFile";

function App() {



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div className="d-flex flex-column align-items-center">
    <h1>React Datatable</h1>


    </div>
    <DataFile />
    </>




  );
}

export default App;
