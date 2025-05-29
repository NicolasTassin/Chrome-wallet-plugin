// Content script - runs in the context of web pages
console.log('Content script loaded');

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in content script:', message);
  console.log('Sender:', sender);
  // Handle different message types
  switch (message.type) {
    case 'GET_PAGE_INFO':
      // Get information about the current page
      const pageInfo = {
        url: window.location.href,
        title: document.title,
      };
      sendResponse(pageInfo);
      break;
    default:
      console.log('Unknown message type:', message.type);
      sendResponse({ success: false });
  }

  return true; // Keep the message channel open for async responses
});

// Example: Inject wallet connection button
function injectWalletButton() {
  const button = document.createElement('button');
  button.textContent = 'Connect Wallet';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '9999';
  
  button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'CONNECT_WALLET' });
  });

  document.body.appendChild(button);
}

// Initialize content script
injectWalletButton(); 