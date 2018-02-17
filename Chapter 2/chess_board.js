// function that draws a chess grid in console log
function chess_board(gridsize) {
    let doggo = []; // output array, each line is a row. return value
    for (let j = 1; j <= gridsize; j++) {
        let i;
        let pupper = []; // single line array
        (j % 2 == 0) ? i = 1 : i = 0; // alternating starting char
        for (i; i < gridsize; i++) { // actual drawing loop
            (i % 2 == 0) ? pupper.push(' ') : pupper.push('#');
        } 
        doggo.push((pupper.join('')) + '\n'); // join line array to string,
    }                                       // then push it to output array
    console.log(doggo.join(''));
}
