import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StateObject from "./StateObject";
import StateArr from "./StateArr";
import StateArrayOfObjs from "./StateArrayOfObjs";

function App() {


  return (
    <>
      <StateObject />
      <StateArr />
      <StateArrayOfObjs/>
    </>
  );
}

export default App;
