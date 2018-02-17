// This is only the for-loop variant of the exercise.

function everyLoop(array, test) {
    for (item of array) {
        if (test(item) === false) return false;
    }
    return true;
}
