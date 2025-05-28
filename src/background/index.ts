// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed')
})

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'GET_WALLET_INFO') {
    // Handle wallet info request
    chrome.storage.local.get(['walletAddress', 'walletBalance'], (result) => {
      sendResponse({
        address: result.walletAddress || null,
        balance: result.walletBalance || '0',
      })
    })
    return true // Required for async sendResponse
  }
}) 