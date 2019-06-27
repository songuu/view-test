const curry = (fn, ...args) => {
    return fn.length > args.length ? (...arguments) => curry(fn, ...args, ...arguments) : fn(...args);
}

/* 
    首先判断的是传入参数和函数的所需要的参数的比例
    传入的小于则继续传入
    传入的等于，则直接执行
*/

function sum(a, b, c) {
    return a + b + c;
}

let total = curry(sum);

total(1,2,3)
total(1)(2)(3)