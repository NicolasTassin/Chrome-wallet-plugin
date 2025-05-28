// Listen for messages from the webpage
window.addEventListener('message', (event) => {
  // Only accept messages from the same frame
  if (event.source !== window) return

  // Only accept messages that we know are ours
  if (event.data.type && event.data.type === 'FROM_PAGE') {
    // Forward the message to the background script
    chrome.runtime.sendMessage(event.data)
  }
})

// Inject the wallet provider into the page
const script = document.createElement('script')
script.src = chrome.runtime.getURL('injected.js')
script.type = 'text/javascript'
document.head.appendChild(script) 