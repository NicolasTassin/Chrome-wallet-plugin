import React, { useState, useEffect } from 'react'
import './App.css'

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Check wallet connection status on mount
    chrome.runtime.sendMessage({ type: 'GET_WALLET_STATUS' }, (response) => {
      setIsConnected(response.isConnected)
    })
  }, [])

  const handleConnect = () => {
    chrome.runtime.sendMessage({ type: 'CONNECT_WALLET' }, (response) => {
      if (response.success) {
        setIsConnected(true)
      }
    })
  }

  const handleDisconnect = () => {
    chrome.runtime.sendMessage({ type: 'DISCONNECT_WALLET' }, (response) => {
      if (response.success) {
        setIsConnected(false)
      }
    })
  }

  return (
    <div className="container">
      <div className="wallet-status" style={{ color: isConnected ? 'green' : 'red' }}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>
      {!isConnected ? (
        <button className="connect-button" onClick={handleConnect}>
          Connect Wallet
        </button>
      ) : (
        <button className="disconnect-button" onClick={handleDisconnect}>
          Disconnect Wallet
        </button>
      )}
    </div>
  )
}

export default App 