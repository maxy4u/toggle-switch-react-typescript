import * as React from 'react';
import Switch from "./Switch";
import './style.css';
import { useCallback } from "react";

export default function App() {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.checked);
  },[]);
  return (
    <div>
      <h1>Custom Toggle switch in React</h1>
      <Switch className="switchCont" onChange={onChange} id="mySwitch1" name="mySwitch1"/><br />
      <Switch className="switchCont" onChange={(v)=>console.log(v)} id="mySwitch2" name="mySwitch2" disabled/> Disabled 
    </div>
  );
}
