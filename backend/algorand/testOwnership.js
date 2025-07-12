require('dotenv').config();

const {
  assignOwnership,
  getOwnershipStatus,
//   returnOwnership
} = require('./ownership');

(async () => {
  const productId = 'PROD-12345';
  const name = 'Alice';
  const phone = '+91-9999999999';

  try {
    console.log('Assigning ownership...');
    const txId = await assignOwnership(productId, name, phone);
    console.log(`Ownership assigned in transaction: ${txId}`);

    console.log('\nFetching current ownership status...');
    const status = await getOwnershipStatus(productId);
    console.log(status);

    // Optional: Try returnOwnership
    // const returnTx = await returnOwnership(productId, name, phone);
    // console.log(`Returned ownership in transaction: ${returnTx}`);

    // const statusAfterReturn = await getOwnershipStatus(productId);
    // console.log('After return:', statusAfterReturn);

  } catch (err) {
    console.error('Error:', err);
  }
})();
