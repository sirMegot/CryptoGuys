import React from 'react';

function connectToMetaMask() {
  if (typeof (window as any).ethereum !== 'undefined') {
    (window as any).ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    alert('MetaMask is not installed. Please install it to continue.');
  }
}

export default function Page() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
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
    </div>
  );
}
