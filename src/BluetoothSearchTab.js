import React, { useState } from "react";
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

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });

      const service = await device.gatt.getPrimaryService(service_uuid);
      const characteristic = await service.getCharacteristic(characteristic_uuid);

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
    <div>
      <h2>Buscar dispositivos Bluetooth</h2>

      <button onClick={handleSearch}>Buscar</button>

      {isLoading && <p>Cargando...</p>}

      {error && <p>Error: {error.message}</p>}

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
        <p>No se encontraron dispositivos Bluetooth.</p>
      )}
    </div>
  );
}

export default BluetoothSearchTab;