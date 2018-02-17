function flatten() {
    let a = [
        [1, 2, 3],
        [4, 5, "hi"],
        [7, "lol", 9],
    ];
    a = a.reduce((y, z) => y.concat(z));
    
    console.log(a);
}

flatten();
