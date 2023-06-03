import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import BluetoothSearchTab from "./BluetoothSearchTab";
import axios from "axios";
import "./Bluetooth.css";

function BluetoothForm() {
  const [isOn, setIsOn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
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
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const handleBluetoothSearch = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/v1/auth/bluetooth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error(error);
          setIsAuthenticated(false); // Actualizar el estado en caso de error
        });
    }
  };
  
  if (isAuthenticated) {
    return <Redirect to="/bluetooth" />;
  }

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
