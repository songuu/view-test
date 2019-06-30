const getUglyNumber = (num) => {
    if(num === 1) {
        return 1;
    }
    ​for(let i = 2, arr = [];;i++) {
        if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 && i % 7 !== 0) {
            arr.push(i);
        }
        if(arr.length === num) {
            return i;
        }
    }
}

console.log(getUglyNumber(20));