// Module Import
import ZeroCopy from './zerocopy';

const hello = require('./hello');

const a = 0;

// Module 사용
const zeroCopy = new ZeroCopy('FE-Trend');
document.write(`${zeroCopy.say()}, ${hello}!`);
