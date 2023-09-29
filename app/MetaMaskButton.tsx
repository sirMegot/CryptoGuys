// @client
// MetaMaskButton.tsx
import React, { useEffect } from 'react';

export default function MetaMaskButton() {
  function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      alert('MetaMask is not installed. Please install it to continue.');
    }
  }

  useEffect(() => {
    // Tout code à exécuter au montage du composant
  }, []);

  return (
    <button 
      onClick={connectToMetaMask}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Connect Wallet
    </button>
  );
}
