require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender slab alpha crawl toss coconut coral light army genuine'; 
let testAccounts = [
"0xd4e813325216a3ee4259fd8f9b9ac73674c9b4e70532e7a4c207176cf884d4c7",
"0x54cb08658f75d108d67396a0b64d78f3dbeb096bd8384990fbaac738c8d4f781",
"0xdf7402f01a988ea7f16dd5b24ec0d04db10aa088a035cf2f23db814e8927f586",
"0x41599ff3c4854ceb360bc35205a6e18b94c0864894dbde1b0e33fa7abdd75001",
"0x8655dc0b9140f41991d4b80a68b72ac1ec1d3c1458cd2dc17bce082a4ee19ee3",
"0x3ba19307dda463e102a06cc437d35993ea7e6d7d928058f9146c41276348be59",
"0x301b3c38c7be5de66e07ad5299df345e3a50299c04e22c829bc2cdc385b1622e",
"0xa5e8ff182ac57e50680e28b1b32402e18d6729e09bf32c3c2b8bdb71c6ab3016",
"0x8f4a4e311315f18d48c36e48430030b30f3f25eba7e14490c4c11d1a7ed85315",
"0xb259e85ada1caa13472890700463b627f8af995b05408519e02cd1ab0a9dd0be"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
