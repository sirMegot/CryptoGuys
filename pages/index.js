import React from 'react';
import Web3 from 'web3';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Crypto Guys',
  description: 'Welcome to Crypto Guys app !',
};

function RootLayout({ children }) {
  return <div className={inter.className}>{children}</div>;
}

function Home() {
  function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable().then((accounts) => {
        if (accounts.length > 0) {
          const userAddress = accounts[0];
          console.log("Adresse Ethereum connectée :", userAddress);
        } else {
          console.error("Aucune adresse Ethereum trouvée !");
        }
      }).catch((error) => {
        console.error("Erreur lors de la connexion à MetaMask :", error);
      });
    } else {
      console.error("MetaMask n'est pas installé !");
    }
  }

  return (
    <RootLayout>
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Welcome to the Crypto Guys app, please &nbsp;
        <button onClick={connectToMetaMask} className="font-mono font-bold">Connect MetaMask</button>
      </p>
    </div>
    <div className="z-10 max-w-md w-full p-6 mt-10 bg-gradient-to-b from-zinc-200 rounded-xl backdrop-blur-2xl dark:bg-zinc-800/30 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-black mb-4">USDC to GDAO Swap</h2>
      <p className="text-sm text-black mb-4">Here you can convert your USDC to our newly minted GDAO token.</p>
      <div className="flex flex-col w-full mb-4">
         <label className="text-black mb-2">Amount of USDC:</label>
         <input type="number" className="p-2 border rounded" placeholder="Enter amount" />
     </div>
      <button className="p-2 bg-gray-500 text-black rounded">Swap to GDAO</button>
  </div>
  </main>
</RootLayout>
  );
}

export default Home;
