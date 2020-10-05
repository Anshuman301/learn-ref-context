import React from "react";
import LearnRef from "./components/LearnRef/LearnRef";
import LearnContext from './components/LearnContext/LearnContext'
import "./styles.css";

export default function App(){
    return(
      <div className="App">
      {/* <LearnRef/> */}
      <LearnContext/>
      </div>
    )
}
