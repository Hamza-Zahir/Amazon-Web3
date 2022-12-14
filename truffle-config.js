

const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const bscscan_api_key = fs.readFileSync(".bscscan_api_key").toString().trim();
const etherscan_API_KEY = fs.readFileSync(".etherscan_API_KEY").toString().trim();

module.exports = {

 plugins: ["truffle-plugin-verify"],
    api_keys: {
      bscscan: bscscan_api_key
    },
    //      etherscan: etherscan_API_KEY,

/*
 // truffle migrate --network NetworkName

npm install -D truffle-plugin-verify
truffle run verify contractName@contractAdress --network NetworkName
*/

  networks: {

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4`),
      network_id: 42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4`),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      // gas: 5500000,
      // confirmations: 2,
      // timeoutBlocks: 200,
      skipDryRun: true
    },

  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.15",

    }
  },


// first_Contracts
  // ropsten : 0x9207FbB18805f338e3810a3Cf9502d7b0FCA31B1
  // kovan :   0x78cf0Ba53f4DfeD9F36C97F74f76848DB04F3561
  // rinkeby : 0xbCc9e5e119Fc194772bEE02F1B3010E8D21b2C94
  // bscTestnet : 0x24191b423D0Ec4bCd6F6eeC4dafba7CEEe93b5BC

  // Second_contracts
   // ropsten :   0x54F44D0E621935b9EEC056a3dfB463977827e861
  // kovan :      0xBC5299De1A31b2aC1B486747DC90eA8Fa561Eb6E
  // rinkeby :    0x3316C6a5AD63B323d554f5B97fc604eF7b3ddfD0
  // bscTestnet : 0x5822bE3556a5acDB859e0dC25Dff59f2eB38b492

  //third_contracts
    // ropsten :  0x24191b423D0Ec4bCd6F6eeC4dafba7CEEe93b5BC
  // kovan :      0xb902294E52012ad786dc739B495c35bd579c8792
  // rinkeby :    0x9E9f08302DD27b9908A758bb2d5D53fE2B414788
  // bscTestnet : 0x2Ec5500Bc1571F079194188FF1E76E5Ad311211C
  // 0xF7e2B845d06915e15Be0438d90b4201Bc7B44594
};

