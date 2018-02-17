function range(a, b, step='') {
    output = [];
    if (step != '') {
        step = parseInt(step);
        if (a < b) {
            while (a <= b) {
                output.push(a);
                a += step;
        }} else {
            while (a >= b) {
                output.push(a);
                a += step;
        }}
    } else {
        while (a <= b) {
            output.push(a);
            a++;
    }}
    return output;
}

function sum(numbers) {
    let x = 0;
    for (let i of numbers) {
        x += i;
    }
    return x;
}
