// page.tsx
import React from 'react';
import MetaMaskButton from './MetaMaskButton';
import ClientComponent from './ClientComponent';

export default function Page() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <ClientComponent>
        <MetaMaskButton />
      </ClientComponent>
    </div>
  );
}
