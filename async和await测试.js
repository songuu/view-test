/* 
直接使用async和await代替promise
*/

//并发操作
const getFoo = () => {

}

const getBar = () => {

}


let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

//请求操作
const getData = async () => {
    let result = await fetch({

    })
}

//在异常的处理上面
async function run() {
    try {
        var articles = await a();
        console.log(articles); // a
        var article = await b(articles);
        console.log(article); // ab
        var author = await c(article);
        console.log(author); // abc
    } catch (err) {
        console.log(err)
    }
}
run()
//在实现的时间，只会检测到第一个异常，后面的异常只有在前面异常中间嵌套使用

const task = () => {
    array.forEach(async (item, i) => {
        await echo(i);
    })
}

const task1 = () => {
    array.map(async (item, i) => {
        await echo(i);
    })
}

//此时的操作都是异步执行的，在forEach，map中间使用async和await都是异步
//解决办法：使用原生的for循环和for..of..函数

