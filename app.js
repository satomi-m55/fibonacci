'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n){
if(memo.has(n)) {
    return memo.get(n);
} else {
const value = fib(n-1)+fib(n-2);
    memo.set(n,value);
return value;
}
}

const length = 440;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
