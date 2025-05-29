// Background script - runs in the background of the extension
console.log('Background script loaded');

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in background:', message);
  console.log('Sender:', sender);
  // Handle different message types
  switch (message.type) {
    case 'CONNECT_WALLET':
      // Handle wallet connection
      break;
    case 'DISCONNECT_WALLET':
      // Handle wallet disconnection
      break;
    default:
      console.log('Unknown message type:', message.type);
  }

  // Always send a response
  sendResponse({ success: true });
  return true; // Keep the message channel open for async responses
}); 