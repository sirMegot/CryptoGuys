import React from 'react';
import Web3 from 'web3';

function Connect() {
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
    <div>
      <button onClick={connectToMetaMask}>Connecter MetaMask</button>
    </div>
  );
}

export default Connect;
