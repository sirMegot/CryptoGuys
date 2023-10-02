import React from 'react';
import Web3 from 'web3';
import Image from 'next/image'

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Crypto Guys -- &nbsp;
          <button onClick={connectToMetaMask} className="font-mono font-bold">Connecter MetaMask</button>
        </p>
      </div>
    </main>
  );
}

export default Home;
