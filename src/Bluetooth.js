import React, { useState } from "react";
import './Bluetooth.css';
import { Link } from "react-router-dom";
import {BsToggleOff, BsToggleOn} from "react-icons/bs";
import BluetoothSearchTab from './BluetoothSearchTab';


function BluetoothForm() {

  const linkBluetooth = (e) => {
    e.preventDefault();
  }

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    console.log('cambio')
  };

  return (
    <div 
    className='Container-form-bluetooth'>
      <form 
      className="BluetoothForm">
        <h1 
        className="Title-conection">
          Bluetooth
          <div 
          
            className={`On-off ${isOn ? 'active' : ''}`} 
            onClick={handleClick}
          >
            {isOn ? <BsToggleOn/> : <BsToggleOff/>}
          </div>
        </h1>
      
        {isOn && <BluetoothSearchTab />}
      </form>
    </div>
    
  )
}

export default BluetoothForm;