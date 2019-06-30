//最后三步是 1，2，3
let f1 = 1, f2 = 2, f3 = 4, result = 0; for (let i = 4; i <= 11; i++) {
    result = f1 + f2 + f3;  f1 = f2;  f2 = f3;  f3 = result; 
}
console.log(result)