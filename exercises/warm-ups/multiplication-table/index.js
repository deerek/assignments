
const multTable = () => {
    // start with empty array
    const output = [];
    for(let i = 1; i < 6; i++){
        const row = [];
        for(let j = 1; j < 6; j++){
            row.push(j * i);
        }
        output.push(row);
    }
    console.log(output);
    // do the following 5 times:
    // push first 5 numbers into array
    // add to parent array
}

multTable();

module.exports = multTable;
