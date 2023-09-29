import React from 'react';
import dynamic from 'next/dynamic';

function ConnectButtonComponent() {
  function connectToMetaMask() {
    if (typeof (window as any).ethereum !== 'undefined') {
      (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      alert('MetaMask is not installed. Please install it to continue.');
    }
  }

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

const ConnectButton = dynamic(() => Promise.resolve(ConnectButtonComponent), {
  ssr: false
});

export default function Page() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <ConnectButton />
    </div>
  );
}
