let {result, downloadStart, downloadFinish} = require('./producing-promise.js');
// Consuming Promise
const main = async () => {
    await downloadStart();
    await downloadFinish();
}

main();