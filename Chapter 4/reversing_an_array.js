function reverseArray(a) {
    b = [];
    for (i in a) {
        b.unshift(a[i]);
    }
    return b;
}

function reverseArrayInPlace(a) {
    let i, len;
    len = a.length;
    for (i = 0; i < len; i++) {
        a.splice(i, 0, a.pop());
    }
    return a;
}
