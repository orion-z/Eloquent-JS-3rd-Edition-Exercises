function loop(value, testfn, updatefn, bodyfn) {
    let c = true;
    while (c == true) {
        if (testfn(value) == false) {
            c = false;
            return false;
        }
        bodyfn(value);
        value = updatefn(value);
    }
    return true;
}
