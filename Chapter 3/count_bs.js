function countChar(str, char) {
    let ctr = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == char) ctr++;
    }
    return ctr;
}

function countBs(a) {
    return countChar(a, "B");
}
