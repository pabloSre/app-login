import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './BluetoothSearchTab.css';

function BluetoothSearchTab() {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [device, setDevice] = useState(null);
  const [characteristic, setCharacteristic] = useState(null);
  const [receivedData, setReceivedData] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const customServiceUUID = uuidv4(); // Generar un UUID personalizado para el servicio
    const customCharacteristicUUID = uuidv4(); // Generar un UUID personalizado para la característica

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [customServiceUUID],
      });

      const service = await device.gatt.getPrimaryService(customServiceUUID);
      const characteristic = await service.getCharacteristic(customCharacteristicUUID);

      setDevices([device]);
      setDevice(device);
      setCharacteristic(characteristic);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (!device || !characteristic) return;

    const encoder = new TextEncoder();
    const data = encoder.encode("Hello, Bluetooth!");

    try {
      await characteristic.writeValue(data);
      console.log("Data sent successfully.");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const receiveData = async (e) => {
    e.preventDefault();
    if (!device || !characteristic) return;

    try {
      const value = await characteristic.readValue();
      const decoder = new TextDecoder();
      const receivedText = decoder.decode(value);

      setReceivedData(receivedText);
      console.log("Received data:", receivedText);
    } catch (error) {
      console.error("Error receiving data:", error);
    }
  };

  return (
    <div 
      className="Search-device"
      >
      <h2
      className="Search"
      >
        Search devices bluetooth
      </h2>

      <button 
      className="Button-search"
      onClick={handleSearch}>Search</button>

      {isLoading && <p>Cargando...</p>}

      {error && <p className="Error-adapter">Error: {error.message}</p>}

      {devices.length > 0 ? (
        <div>
          <ul>
            {devices.map((device, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {device.name}<br/>
                <strong>Dirección MAC:</strong> {device.id}<br/>
                {/* Otros detalles del dispositivo */}
              </li>
            ))}
          </ul>

          <button onClick={sendData}>Enviar datos</button>
          <button onClick={receiveData}>Recibir datos</button>

          {receivedData && <p>Received data: {receivedData}</p>}
        </div>
      ) : (
        <p  className="Error-blue">No se encontraron dispositivos Bluetooth.</p>
      )}
    </div>
  );
}

export default BluetoothSearchTab;
