const getNums = (n, m) => {
    var hash = {};
    for(let i = 0;i < m;i++) {
        let key = genRandom(0, n);
        if(hash[key]) {
            hash[key]++;
        }else {
            hash[key] = 1;
        }
    }

    let num = 0;
    for(let j in hash) {
        if(hash[j] >= n) {
            num++;
        }
    }
    return num;
}

const genRandom = (min, max) => (Math.random() * (max - min + 1) | 0) + min;

console.log("this is num", getNums(3,9))