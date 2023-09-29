// page.tsx
import React from 'react';
import MetaMaskButton from './MetaMaskButton';

export default function Page() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <MetaMaskButton />
    </div>
  );
}