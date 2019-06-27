function test() {
    return x = x + 1;
}

console.log(test())

var x = 1;

function test() {
    return x = x + 3;
}

console.log(test())

function test1(c) {
    var code = 1;
    setTimeout(() => {
        this.code = c
    })
}

var a = 1;

var b = {
    code: '2'
}

test1.apply(b, [a]);

console.log(b.code + a);