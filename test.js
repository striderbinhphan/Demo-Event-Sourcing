const assert = require('assert');
const { resolve } = require('path');
function test(a) { 
    return new Promise((resolve,reject)=>{
        if(a===1)resolve(a)
        else reject()
    });
}

console.log(test());