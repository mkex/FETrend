// Module Import
import ZeroCopy from './zerocopy';

const hello = require('./hello');

// Module 사용
const zeroCopy = new ZeroCopy('FE-Tren');
document.write(`${zeroCopy.say()}, ${hello}!`);

//변수선언
const a = 0;

const is_Flag = true

if(is_Flag){
  console.log('asdf');
}
