let HDWalletProvider = require('truffle-hdwallet-provider');
let mnemonic = "spend tooth cherry broken sound animal cat ozone catalog kitten special outside";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    buddy: {
      host: "ganache",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/9f4121fa151f4f51a16bb2444bb9475d");
      },
      network_id: '4',
    }
  }
};




