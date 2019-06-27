function clone(x) {
    const uniq = [];

    let root = {};

    const loopList = [{
        parent: root,
        key: undefined,
        data: x
    }]

    while(loopList.length) {
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        let res = parent;
        if(typeof key !=="undefined") {
            res = parent[key] = {}
        }

        let uniqData = find(uniq, data);

        if(uniqData) {
            parent[key] = uniqData.target;
            continue;
        }

        uniq.push({
            source: data,
            target: res
        })

        for(let k in data) {
            if(data.hasOwnProperty(k)) {
                if(typeof data[k] === 'object') {
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k]
                    })
                } else {
                    res[k] = data[k]
                }
            }
        }
    }
    return root;
}

function find(arr, item) {
    console.log(arr, ">>>>>>>>>>>>>>>>>" , item)
    for(let i = 0;i < arr.length; i++) {
        if(arr[i].source === item) {
            return arr[i];
        }
    }

    return null;
} 

var a = {
    b: 1,
    c: {
        d: 2,
        e: 3
    }
}

var k = clone(a);
console.log(k);