function arrayToList(arr) {
    let list = null;
    for (i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list}
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(item, list) {
    list = {value: item, rest: list};
    return list;
}

/* 
This is not completely correct. However I decided
to leave it, maybe it inspires someone to find
the correct solution.

function nth(list, index) {
    if (!list) return undefined;
    if (index == 0) return list;
    else return nth(list, index-1);
}

*/
