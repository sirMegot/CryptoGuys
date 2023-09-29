import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    function connectToMetaMask() {
      if (typeof (window as any).ethereum !== 'undefined') {
        (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      } else {
        alert('MetaMask is not installed. Please install it to continue.');
      }
    }

    const button = document.getElementById('connectButton');
    if (button) {
      button.addEventListener('click', connectToMetaMask);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', connectToMetaMask);
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <button 
        id="connectButton"
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
    </div>
  );
}
