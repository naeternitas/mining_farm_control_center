const builder = require('./ethermine_flypool');
const endpoint = 'https://api-zcash.flypool.org';

module.exports = builder(endpoint, 'kH/s', function(hashrate){
  return (hashrate / 1000).toFixed(1);
});