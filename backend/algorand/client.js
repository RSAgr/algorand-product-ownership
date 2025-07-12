// // algorand/client.js
// const algosdk = require('algosdk');

// const algodToken = process.env.ALGOD_TOKEN || '';
// const algodServer = process.env.ALGOD_SERVER || 'https://testnet-api.algonode.cloud';
// const algodPort = '';

// const indexerServer = process.env.INDEXER_SERVER || 'https://testnet-idx.algonode.cloud';
// const indexerToken = process.env.INDEXER_TOKEN || '';

// const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
// const indexerClient = new algosdk.Indexer(indexerToken, indexerServer, '');

// module.exports = { algodClient, indexerClient };

const algosdk = require('algosdk');
require('dotenv').config();

const algodClient = new algosdk.Algodv2(
  process.env.ALGOD_TOKEN || '', // empty for algonode
  process.env.ALGOD_SERVER,      // like "https://testnet-api.algonode.cloud"
  process.env.ALGOD_PORT || ''
);

const indexerClient = new algosdk.Indexer(
  process.env.ALGOD_TOKEN || '',
  process.env.INDEXER_SERVER,
  process.env.INDEXER_PORT || ''
);

module.exports = { algodClient, indexerClient };
