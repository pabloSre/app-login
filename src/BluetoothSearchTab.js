import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './BluetoothSearchTab.css';

function BluetoothSearchTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const [device, setDevice] = useState(null);
  const [characteristic, setCharacteristic] = useState(null);
  const [receivedData, setReceivedData] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSearchPerformed(true);

    const customServiceUUID = uuidv4();
    const customCharacteristicUUID = uuidv4();

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [customServiceUUID],
      });

      const service = await device.gatt.getPrimaryService(customServiceUUID);
      const characteristic = await service.getCharacteristic(customCharacteristicUUID);

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
    <div className="Search-device">
      <h2 className="Search">Search devices Bluetooth</h2>

      <button className="Button-search" onClick={handleSearch}>
        Search
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p className="Error-adapter">Error: {error.message}</p>}

      {isSearchPerformed && device && characteristic ? (
        <div>
          <ul>
            <li>
              <strong>Name:</strong> {device.name}<br/>
              <strong>MAC Address:</strong> {device.id}<br/>
              {/* Other device details */}
            </li>
          </ul>

          <button className="Send-data" onClick={sendData}>
            Send data
          </button>
          <button className="Receive-data" onClick={receiveData}>
            Receive data
          </button>

          {receivedData && <p>Received data: {receivedData}</p>}
        </div>
      ) : isSearchPerformed ? (
        <p className="Error-blue">No Bluetooth devices found.</p>
      ) : null}
    </div>
  );
}

export default BluetoothSearchTab;

export default BluetoothSearchTab;