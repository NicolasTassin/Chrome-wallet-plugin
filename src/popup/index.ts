// Popup script - runs when the extension popup is opened
console.log('Popup script loaded');

// DOM Elements
const connectButton = document.getElementById('connect-wallet');
const disconnectButton = document.getElementById('disconnect-wallet');
const walletStatus = document.getElementById('wallet-status');

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
  // Check wallet connection status
  chrome.runtime.sendMessage({ type: 'GET_WALLET_STATUS' }, (response) => {
    updateWalletStatus(response.isConnected);
  });
});

// Event Listeners
if (connectButton) {
  connectButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'CONNECT_WALLET' }, (response) => {
      if (response.success) {
        updateWalletStatus(true);
      }
    });
  });
}

if (disconnectButton) {
  disconnectButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'DISCONNECT_WALLET' }, (response) => {
      if (response.success) {
        updateWalletStatus(false);
      }
    });
  });
}

// Update UI based on wallet connection status
function updateWalletStatus(isConnected: boolean) {
  if (walletStatus) {
    walletStatus.textContent = isConnected ? 'Connected' : 'Disconnected';
    walletStatus.style.color = isConnected ? 'green' : 'red';
  }
  
  if (connectButton) {
    connectButton.style.display = isConnected ? 'none' : 'block';
  }
  
  if (disconnectButton) {
    disconnectButton.style.display = isConnected ? 'block' : 'none';
  }
} 