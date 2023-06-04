
import './BluetoothSearchTab2.css';

const handleSearch = () => {
  if (isWebBLAvailable()) {
    getDeviceInfo();
  }
}

function isWebBLAvailable() {
  if (!navigator.bluetooth) {
    console.log('Web BL is not available')
    return false
  }

  return true
}

function getDeviceInfo() {
  const options = {
    acceptAllDevices: true
  }
  console.log('requestin BL device info')
  navigator.Bluetooth.requestDevice(options).then(device=>{
    console.log('name: '+ device.name)
  }).catch(error =>{
    console.log('Reques device error: ' + error)
  })
}

function BluetoothSearchTab2() {
  return (
    <button 
    className="Button-search"
    onClick={handleSearch}>
      Search
    </button>
  )
}
/* <div className="Search-device">
      <h2 className="Search">Search devices Bluetooth</h2>

      <button 
      className="Button-search" 
      onClick={handleSearch}>
        Search
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p 
      className=
      "Error-adapter">Error: {error.message}</p>}

      {isSearchPerformed && device && characteristic ? (
        <div>
          <ul>
            <li>
              <strong>Name:</strong> {device.name}<br/>
              <strong>MAC Address:</strong> {device.id}<br/>
              
            </li>
          </ul>

          <button 
          className="Send-data" 
          onClick={sendData}>
            Send data
          </button>
          <button 
          className="Receive-data" 
          onClick={receiveData}>
            Receive data
          </button>

          {receivedData && <p>Received data: {receivedData}</p>}
        </div>
      ) : isSearchPerformed ? (
        <p className="Error-blue">No Bluetooth devices found.</p>
      ) : null}
    </div>
  ); */
      
      

export default BluetoothSearchTab2;