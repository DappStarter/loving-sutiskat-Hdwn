require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rifle still minor inflict force fringe ghost'; 
let testAccounts = [
"0x48b2f8c2368e8525614dbdd4eed85a3eeaa8c77edbf882b32048f68ad36d926b",
"0xdf4941dbcf5db092528095445cc7c9655618a01a0809d747db600d19d38540e5",
"0x0da9bec5b164a1ee22610626a9a5d8dd8d18d6642d6b56abb868c37921fa7393",
"0xce869f989544a2f0a3c626bb4d02287c4e0da90f7703f63e0d858c1054cb3b1d",
"0x4520578ac35232dc4a5d8a7aefc2ea2048d4d26e41c959ff2a62eb675c751128",
"0x3f2b4b13c1b6eb1d74d4dfb14535b827c003d3ad382d249480f38bdff01321ce",
"0x6ce9f7fa1f32c265fde9e6f6d65bbb55b14efdd566364ae522465b6d8045c5b3",
"0xb74207658d812b2c4fd9d47f4c414e549801909f39d484d840b9f552e074ad11",
"0xa309a9e1db0e7fec47319555908d19b22e1c11d05c63b0e88301323112824b48",
"0x141d82b1667497396b889400e7bfc1a149b9645b0844425b4c776ba942b4240a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

