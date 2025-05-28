import { ethers } from 'ethers'
import { useWalletStore } from '@/store'

declare global {
  interface Window {
    ethereum?: any;
  }
}

function App() {
  const { address, balance, setAddress, setBalance } = useWalletStore()

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", [])
        const balance = await provider.getBalance(accounts[0])
        
        setAddress(accounts[0])
        setBalance(ethers.formatEther(balance))
      } else {
        alert('Please install MetaMask!')
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  return (
    <div className="w-96 p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Wallet</h1>
      
      {!address ? (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Address:</p>
            <p className="font-mono text-sm break-all">{address}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Balance:</p>
            <p className="font-mono text-sm">{balance} ETH</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App 