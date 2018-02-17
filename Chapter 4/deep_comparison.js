/*
This is NOT the correct solution. However it shows
my thought process and maybe inspires someone to
find the correct solution.

function deepEqual(a, b) {
    if (typeof a == "object" && typeof b == "object" && a != null && b != null) {
        for (i in Object.keys(a)) {
            deepEqual(Object.keys(a)[i], Object.keys(b)[i])
        }
    } else if (a === b) {
        return true;
    }
    return false;
}

*/
