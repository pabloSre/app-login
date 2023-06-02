import React, { useState, useEffect} from "react";
import './BluetoothSearchTab.css'

function BluetoothSearchTab() {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });

      setDevices([device]);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h2>Buscar dispositivos Bluetooth</h2>

      <button onClick={handleSearch}>Buscar</button>

      {isLoading && <p>Cargando...</p>}

      {error && <p>Error: {error.message}</p>}

      {devices.length > 0 ? (
        <ul>
          {devices.map((device, index) => (
            <li key={index}>{device.name}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron dispositivos Bluetooth.</p>
      )}
    </div>
  );
}


export default BluetoothSearchTab;