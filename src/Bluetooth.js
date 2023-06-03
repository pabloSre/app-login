import React, { useState, useEffect  } from "react";
import './Bluetooth.css';
import { Link } from "react-router-dom";
import {BsToggleOff, BsToggleOn} from "react-icons/bs";
import BluetoothSearchTab from './BluetoothSearchTab';
import axios from "axios";


function BluetoothForm() {
    const [isOn, setIsOn] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      // Verificar si el usuario está autenticado (por ejemplo, mediante la verificación del token almacenado en el cliente)
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, []);
  
    const handleClick = () => {
      setIsOn(!isOn);
    };
  
    const handleLogout = () => {
      // Eliminar el token de autenticación del cliente (por ejemplo, desde el almacenamiento local)
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    };
  
    const handleBluetoothSearch = () => {
      // Realizar la solicitud a la ruta protegida en el backend
      axios
        .get("/api/bluetooth")
        .then((response) => {
          // Manejar la respuesta exitosa
          console.log(response.data);
        })
        .catch((error) => {
          // Manejar el error de autenticación o cualquier otro error
          console.error(error);
        });
    };
    
    return (
      <div className="Container-form-bluetooth">
        {isLoggedIn ? (
          <form className="BluetoothForm">
            <h1 className="Title-conection">
              Bluetooth
              <div className="On-off" onClick={handleClick}>
                {isOn ? <BsToggleOn /> : <BsToggleOff />}
              </div>
            </h1>
  
            <BluetoothSearchTab />
            <button
              type="button"
              className="Logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              type="button"
              className="Bluetooth-search-button"
              onClick={handleBluetoothSearch}
            >
              Search Bluetooth
            </button>
          </form>
        ) : (
          <div>
            <p>You need to login first.</p>
            <Link to="/">Login</Link>
          </div>
        )}
      </div>
    );
  }
  
  export default BluetoothForm;