import Navbar from "./components/Navbar/Navbar";
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ul className="lista">
        <li>Aprendendo React</li>
        <li>Aprendendo Components</li>
      </ul>
    </div>
  );
}
