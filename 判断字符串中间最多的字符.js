/*
自己的写法 
*/
function check(str) {
    if(str.length <= 1) {
        return str;
    }

    let strArr = Array.from(new Set(Array.from(str)));

    let arr = [];

    strArr.forEach((item) => {
        var k = 0;
        for(let i = 0, len = str.length;i < len; i++) {         
            if(item === str[i]) {
                k++;
            }
        }
        arr.push({name: item, num: k})
    })
    arr.sort((a,b) => b.num - a.num)
    return arr[0].name;
}

/* 
网上的简单的写法
*/
function check1(str) {
    if(str.length <= 1) {
        return str;
    }
    let arr = str.split("").sort().join("").match(/([a-z0-9])\1*/g).sort((a, b) => b.length - a.length);
    console.log(arr[0][0]);
}

check1("dabcabca")